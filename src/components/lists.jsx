import doneSvg from "../svgs/done.svg";
import deleteSvg from "../svgs/delete.svg";
import { useState } from "react";
export default function Lists() {
  const [message, setMessage] = useState(
    "Ready to conquer your day? Start adding tasks!"
  );
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { text: "Welcome! lets manage your tasks. ", areCompleted: false },
  ]);
  const pendingTasks = todos.filter((task) => !task.areCompleted).length;

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setMessage("Task deleted!");
  };
  const handleDone = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setMessage(`Task completed!`);
  };
  function handleAdd() {
    if (todo.trim() !== "") {
      setTodos([...todos, { text: todo }]);
      setTodo("");
      setMessage("Task added!");
    } else {
      setMessage("Task can't be empty!");
    }
  }
  function handleChange(event) {
    setTodo(event.target.value);
  }
  return (
    <>
      <header>
        <div className="nav">
          <h2 className="title">todo list.</h2>
          <div className="animate">
            <p>Pending Tasks: {pendingTasks}</p>
          </div>
        </div>
        <div className="new-todo">
          <input
            placeholder="Enter New Task"
            class="input-style"
            type="text"
            value={todo}
            onChange={handleChange}
          />
          <button onClick={handleAdd}>Add</button>
        </div>
      </header>
      <main>
        <p className="animate">{message}</p>
        {todos.map((item, index) => {
          return (
            <div key={index} className="todos">
              {" "}
              <div className="text">
                <p>{item.text}</p>
                <div className="btns">
                  <button className="tool del" onClick={handleDelete}>
                    <img src={deleteSvg} alt="" />
                    <span class="tooltip">delete</span>{" "}
                  </button>
                  <button className="tool done" onClick={handleDone}>
                    <img src={doneSvg} alt="" />
                    <span className="tooltip done">done</span>{" "}
                  </button>
                </div>
              </div>
            </div>
          );
        })}{" "}
      </main>
    </>
  );
}
