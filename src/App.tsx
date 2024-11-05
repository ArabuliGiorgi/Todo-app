import { useState } from 'react'
import {Main} from './styled-components/AppStyle.tsx'
import Sun from '/images/icon-sun.svg'
import Moon from '/images/icon-moon.svg'
import CheckIcon from '/images/icon-check.png'
import TodoList from './tsx-components/todoList.tsx'
import data from './todos.json';

export interface Todo{
  text: string,
  complete: boolean,
  id: number
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [check, setCheck] = useState(false);
  const [todos, setTodos] = useState<Todo[]>(data);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTodo: Todo = {
        text: event.currentTarget.value,
        complete: check,
        id: Math.random()
      }
      setTodos((prevTodos) => [newTodo, ...prevTodos])
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