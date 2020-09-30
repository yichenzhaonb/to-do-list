import React from 'react';
import './App.css';
import Form from "./components/Form";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          To Do List
        </p>
      </header>
      <div className="Content">
        <Form />
       {/* add content */}
      </div>
     <div className="Footer">
        {/* add footer */}
     </div>
    </div>
  );
}

export default App;
