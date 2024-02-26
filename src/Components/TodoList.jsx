import React, { useState } from "react";

const TodoList = ({ tasks }) => {
  const [completedTasks, setCompletedTasks] = useState(
    Array(tasks.length).fill(false)
  );

  const handleCompleted = (index) => {
    setCompletedTasks((prevCompletedTasks) => {
      const updatedTasks = [...prevCompletedTasks];
      updatedTasks[index] = !updatedTasks[index];
      return updatedTasks;
    });
  };

  const completed = completedTasks.filter((value) => value).length;
  const incompleted = tasks.length - completed;

  return (
    <div>
      <ul className="list-group">
        {tasks?.map((task, index) => (
          <li
            key={index}
            className={`list-group-item ${
              completedTasks[index] ? "completed" : ""
            }`}
          >
            <input
              className="form-check-input me-1"
              type="checkbox"
              checked={completedTasks[index] || false}
              onChange={() => handleCompleted(index)}
              id={`checkbox-${index}`}
              disabled={completedTasks[index]}
            />
            <label
              className="form-check-label stretched-link"
              htmlFor={`checkbox-${index}`}
            >
              {completedTasks[index] ? (
                <span style={{ textDecoration: "line-through" }}>{task}</span>
              ) : (
                task
              )}
            </label>
          </li>
        ))}
      </ul>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Total</h3>
              <h5 className="card-title">{tasks.length}</h5>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Incompleted Task</h3>
              <h5 className="card-title">{incompleted}</h5>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Completed Task</h3>
              <h5 className="card-title">{completed}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
