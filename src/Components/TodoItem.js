import React from 'react';

const TodoItem = props =>{
    console.log(props.todo.name);
    return (
       
        <li>{props.todo.name}</li>
    )
}

export default TodoItem;