
import { useState } from 'react';
import './App.css';
import ThemeButton from './ThemeButton';

export default function App () {

  const [message, setMessage] = useState("Ready")
  const [counter, setCounter] = useState(0)
  const [theme, setTheme] = useState("secondary")

  const handleClick = (e, newTheme) => {
    const newCounter = counter + 1
    setCounter(newCounter)
    setTheme(newTheme)
    setMessage("Event: " + newCounter)   
  }

  const selectTheme = (newTheme) => {
    setTheme(newTheme)
    setMessage("Theme: " + newTheme)
  }

  return (
    <div className="m-2">
      <div className={"h4 bg-" + theme + " text-white text-center p-2"}>
        {message}
      </div>

      <div className="text-center">
        <ThemeButton theme="primary" callback={selectTheme} />
        <ThemeButton theme="danger" callback={selectTheme} />
      </div>
    </div>

  )
   
}
