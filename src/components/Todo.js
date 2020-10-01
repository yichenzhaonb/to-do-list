import React, {useState } from "react";

function Todo(props){

    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
    }


    const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <input
                id={props.id}
                type="checkbox"
                value={newName}
                onChange={handleChange}
              />
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
            </div>
            <div className="btn-group">
            <button
              type="button"
              className="btn"
              >
                Edit <span className="visually-hidden">{props.name}</span>
              </button>
              <button
                type="button"
                className="btn btn__danger"
                onClick={() => props.deleteTask(props.id)}
              >
                Delete <span className="visually-hidden">{props.name}</span>
              </button>
            </div>
        </div>
      );
       // eslint-disable-next-line
      return <li className="todo">{viewTemplate}</li>;
}

export default Todo;