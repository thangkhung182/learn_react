import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState('Ready')
  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState('secondary')

  const handleClick = (e, newTheme) => {
    //e.persist()
    setCounter(counter + 1)
    console.log(counter)
    setMessage('Event: ' + e.type + ':' + counter)
    setTheme(newTheme)
  }

  const toogleCheckBox = (e) => {
    if (counter === 0) {
      e.preventDefault()
    }
  }
  
  return (
    <div className="m-2">

      <div className = "form-check">
        <input className="form-check-input" type="checkbox" onClick={toogleCheckBox}/>
        <label>This is a checkbox</label>  
      </div>
      
      <div className={"h4 bg-" + theme +" text-white text-center p-2"}>
        {message}
      </div>
      <div className="text-center">
        <button className="btn btn-primary"
          onClick={(e) => handleClick(e, "primary")}
        >
          Normal
        </button>

        <button className="btn btn-primary"
          onClick={(e) => handleClick(e, "danger")}
        >
          Danger
        </button>
      </div>
    </div>
  );
}

export default App;
