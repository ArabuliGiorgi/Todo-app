import {Todo} from '../App';
import { Single } from '../styled-components/singleTodoStyle';
import CheckIcon from '/images/icon-check.png'
import Cross from '/images/icon-cross.svg'

const SingleTodo: React.FC<{
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    darkMode: string
    todo: Todo
}> = ({setTodos, darkMode, todo}) => {
    const handleCompleteClick = ()=>{
        setTodos((prevTodos) => 
            prevTodos.map((obj) => 
                obj.id === todo.id ? {...obj, complete: !obj.complete} : obj
            )
        )
    };
    const handleDelete = () => {
        setTodos((prevTodos) => prevTodos.filter((obj) => obj.id !== todo.id));
    };

    return(
        <>
            <Single argument={darkMode} complete={`${todo.complete}`}>
                <div className="todo" onClick={handleCompleteClick}>
                    {todo.complete ? 
                    <img src={CheckIcon} alt="check" /> :
                    <div className="circle"></div>
                    }
                    <h1>{todo.text}</h1>
                </div>
                <img src={Cross} alt="cross" className='cross' onClick={handleDelete}/>
            </Single>
            <div className={`w-[100%] h-[1px] ${darkMode == "true" ? 'bg-[#393A4B]' : 'bg-[#E3E4F1]'}`}></div>
        </>
    );
}

export default SingleTodo;