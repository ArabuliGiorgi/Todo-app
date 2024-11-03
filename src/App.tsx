import { useState } from 'react'
import {Main} from './styled-components/Main-div.tsx'
import Sun from '/images/icon-sun.svg'
import Moon from '/images/icon-moon.svg'
import CheckIcon from '/images/icon-check.png'
import TodoList from './tsx-components/todoList.tsx'

export interface Todo{
  text: string,
  complete: boolean,
  id: number
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([
    {
      text: "Complete online JavaScript course",
      complete: true,
      id: 1
    },
    {
      text: "Jog around the park 3x",
      complete: false,
      id: 2
    },
    {
      text: "10 minutes meditation",
      complete: false,
      id: 3
    },
    {
      text: "Read for 1 hour",
      complete: false,
      id: 4
    },
    {
      text: "Pick up groceries",
      complete: false,
      id: 5
    },
    {
      text: "Complete Todo App on Frontend Mentor",
      complete: false,
      id: 6
    }
  ]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTodo: Todo = {
        text: event.currentTarget.value,
        complete: check,
        id: Math.random()
      }
      setTodos((prevTodos) => [...prevTodos, newTodo])
      event.currentTarget.value = "";
      setCheck(false);
    }
  }

  return (
    <Main argument={`${darkMode}`}>
      <div className='max-w-[540px] w-[100%]'>
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
        <TodoList todos={todos} setTodos={setTodos} darkMode={`${darkMode}`}></TodoList>
        <h1 className='footer'>Drag and drop to reorder list</h1>
      </div>
    </Main>
  )
}

export default App