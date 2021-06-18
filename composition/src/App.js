import './App.css';
import { useState } from 'react';
import React from 'react';
import ActionButton from './components/ActionButton';
import Message from './components/Message';

function App() {
  const [counter, setCounter] = useState(0)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  return (
    <div className="m-2 text-center">
      <Message theme = "primary" message={"Counter: " + counter} />
      <ActionButton theme ="secondary" text="Increment" callback={incrementCounter} />
    </div>
  );
}

export default App;
