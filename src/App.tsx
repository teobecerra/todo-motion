import React, { useState } from 'react';
import { Button } from 'evergreen-ui'
import { TextInput } from 'evergreen-ui';
import './App.css';
import DragableList from './components/DragableList';

const App = () => {

  const [currentInput, setCurrentInput] = useState("");
  const [todos, setTodos] = useState<any>([{ id: 123, text: "Fix backend", done: false },
  { id: 769, text: "Do more github projects", done: true }, 
  { id: 789, text: "Add motion", done: true }]);
  const [input, updateInput] = useState("");

  const addTodo = (currentInput) => {
    if (currentInput) {
      setTodos([...todos, { id: Date.now(), text: currentInput, done: false }])
      updateInput("")
    }

  }

  const deleteTodo = (id) => {

    setTodos([...todos.filter(todo => {
      return todo.id !== id
    })])
  }

  return (
    <div className="app-container">
      <h1 className="headline">Teos Todo's</h1>

      <div className="add-task">

        <TextInput marginRight={16} height={40} className="todo-input" id="todoinput" placeholder="Get stuff done!" value={input} onChange={(e) => {
          updateInput(e.target.value)
          setCurrentInput(e.target.value)
        }}
          onKeyPress={e => {
            if (e.key === "Enter") {
              addTodo(currentInput)
            }
          }}
        />

        <Button iconBefore="plus" marginTop={16} marginBottom={16} height={40} width={130} appearance="primary" onClick={
          () => {addTodo(currentInput)}}>Add Task</Button>

      </div>

      <DragableList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />

    </div>
  );
}

export default App;
