import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Todo from "./components/Todo";
import Search from "./components/Search";
import { nanoid } from "nanoid";


function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [keyword, setKeyword] = useState("");

  function addTask(name) {
    let newTask = {
      id: "todo-" + nanoid(),
      name: name,
      complete: false
    };

    setTasks([...tasks, newTask]);

  }

  function editTask(id, newName) {

    const editedTasks = tasks.map(task => {

      if (id === task.id) {

        return { ...task, name: newName };
      }
      return task;

    });

    setTasks(editedTasks);
  }

  function deleteTask(id) {

    const remainTasks = tasks.filter(task => task.id !== id);
    setTasks(remainTasks);

  }

  function filterTask(keyword) {
    setKeyword(keyword);
  }



  const taskList = tasks.filter(task => keyword ? task.name.includes(keyword): true).map(task => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));


  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      <div className="Content">
        <Form addTask={addTask} />
        <Search filterTask={filterTask} />
        <ul
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
      <div className="Footer">
        {/* add footer */}
      </div>
    </div>
  );
}

export default App;
