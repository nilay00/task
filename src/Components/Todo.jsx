import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
    console.log(tasks);
  };

  return (
    <div className="container main">
      <h2 className="text-center heading">ToDo App</h2>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <form onSubmit={submitTask}>
            <div className="d-flex flex-row">
              <div className="px-2">
                <input
                  type="text"
                  className="form-control input-task"
                  placeholder="Enter Task"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary to-do-button">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-6">
          <TodoList tasks={tasks} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
