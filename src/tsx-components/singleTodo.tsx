import {Todo} from '../App';
import styled from 'styled-components';
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

const Single = styled.div<{argument: string, complete: string}>`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        letter-spacing: -0.17px;
        text-align: left;
        color: ${(props) => props.complete=="true" ? (props.argument === "true" ? '#4D5067' : '#D1D2DA') : (props.argument === "true" ? '#C8CBE7' : '#4D5067')};
        text-decoration: ${(props) => props.complete=="true" ? 'line-through' : 'none'};
    }
    .todo{
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 12px;
    }
    .circle{
        width: 20px;
        height: 20px;
        position: relative;
        border: 1px solid ${(props) => props.argument=="true" ? '#393A4B' : '#E3E4F1' };
        border-radius: 50%;
        box-sizing: border-box;
    }
    .circle:hover::before {
        content: '';
        position: absolute;
        top: -1px;
        left: -1px;
        right: -1px;
        bottom: -1px;
        border-radius: 50%;
        background: linear-gradient(135deg, #55DDFF 0%, #C058F3 100%);
    }
    .circle:hover::after{
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        background-color: ${(props) => props.argument=="true" ? '#25273D' : '#FFFFFF' };
        border-radius: 50%;
    }
    img{
        width: 20px;
    }
    .cross{
        width: 12px;
    }
`