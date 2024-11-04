import {Todo} from '../App';
import React, { useState } from 'react';
import {TodosDiv, ListView} from '../styled-components/todosListStyle';
import SingleTodo from './singleTodo';

const TodoList: React.FC<{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    darkMode: string
}> = ({todos, setTodos, darkMode}) => {
    const [listView, setListView] = useState<string>('all');
    const counter = todos.filter((todo) => {
        if(listView === 'all')
            return todo;
        else if(listView === 'active')
            return !todo.complete;
        else
            return todo.complete;
    }).length;
    const handleClear = () => {
        setTodos((prevTodos) => prevTodos.filter((obj) => !obj.complete));
    }

    return(
        <>
            <TodosDiv argument={darkMode}>
                {todos.filter((single) => {
                    if(listView === 'all')
                        return single;
                    else if(listView === 'active')
                        return !single.complete;
                    else
                        return single.complete;
                }).map((single) => (
                    <SingleTodo todo={single} setTodos={setTodos} key={single.id} darkMode={darkMode}></SingleTodo>
                ))}
                <div className="todos-info">
                    <h1>{counter} items left</h1>
                    <h1 onClick={handleClear} className='clear'>Clear Completed</h1>
                </div>
            </TodosDiv>
            <ListView view={listView} argument={darkMode}>
                <h1 className='all' onClick={() => setListView('all')}>All</h1>
                <h1 className='active' onClick={() => setListView('active')}>Active</h1>
                <h1 className='completed' onClick={() => setListView('completed')}>Completed</h1>
            </ListView>
        </>
    )
}

export default TodoList;