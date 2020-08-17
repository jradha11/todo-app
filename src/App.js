import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import AddIcon from "@material-ui/icons/Add";
import db from "./firebase";
import firebase from "firebase";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");
  const updateTodo = (e) => {
    e.preventDefault();
    db.collection("todos").add({
      task: input,
      isChecked: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };

  //when the app loads we need to listen to the database and fetch new todos
  useEffect(() => {
    //this code loads when the app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            task: doc.data().task,
            isChecked: doc.data().isChecked,
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <div className="todo_input_form">
        <input
          className="todo_input"
          placeholder="What do you want to do today?..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={!input}
          type="submit"
          className="btn add_button"
          onClick={updateTodo}
        >
          <AddIcon /> <p>Add todo</p>
        </button>
      </div>
      <List todos={todos} />
      <Footer />
    </div>
  );
}

export default App;
