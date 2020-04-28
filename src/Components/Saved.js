import React, {useState,useContext,useEffect} from 'react';
import TodoService from '../Services/TodoService';
import TodoItem from './TodoItem';
export default class Saved extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            todos:[]
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
  
        // console.log(this.props.title);
        TodoService.getTodos().then(res =>{
            console.log(res.todos);
            this.setState({ todos: res.todos })
        });

      }
    
   
    render() {
        return (
           // <div><h1>Saved!</h1></div>
            
            <div>
                <button onClick={this.handleClick}>Get Articles</button>
                 <ul>
                {
                    this.state.todos.map(todo =>{
                        return <TodoItem key={todo._id} todo={todo}/>
                    })
                }
            </ul>
            </div>
        )
    }
}


