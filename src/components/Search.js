import React, { useState } from "react";

function Search(props){
    const [keyword,setKeyword] = useState('');
    function handleChange(e){
        console.log(e.target.value);
        setKeyword (e.target.value); 
        props.filterTask(e.target.value);
    }

    return (
          <input
            type="text"
            id="new-todo-search"
            className="input input__lg"
            name="text"
            autoComplete="off"
            placeholder ="Search for a task..."
            value={keyword}
            onChange={handleChange}
          />

      );

}

export default Search;