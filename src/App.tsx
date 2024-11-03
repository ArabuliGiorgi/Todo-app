import './App.css'
import { useState } from 'react'
import {Main} from './styled-components/Main-div.tsx'
import Sun from '/images/icon-sun.svg'
import Moon from '/images/icon-moon.svg'
import CheckIcon from '/images/icon-check.png'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [check, setCheck] = useState(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("hello!");
    }
  }

  return (
    <Main argument={`${darkMode}`}>
      <div className="header">
        <h1>TODO</h1>
        <img src={darkMode ? Sun : Moon} alt="sun-moon" onClick={() => setDarkMode(!darkMode)}/>
      </div>
      <form>
        <div className="check" onClick={() => setCheck(!check)}>
          {check ? 
            <img src={CheckIcon} alt="check" /> :
            <div className="circle"></div>      
          }
        </div>
        <input type="text" maxLength={40} placeholder='Create a new todo…' onKeyDown={handleKeyDown}/>
      </form>
    </Main>
  )
}

export default App