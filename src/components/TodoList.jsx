// TodoList.js
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../reducers/taskSlice.js";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (taskText) {
      dispatch(addTask({ id: Date.now(), text: taskText }));
      setTaskText("");
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <div>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
