import React, {useState,useContext,useEffect} from 'react';
import TodoService from '../Services/TodoService';
import TodoItem from './TodoItem';
import axios from 'axios';
export default class Saved extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            todos:[]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handle = this.handle.bind(this);
    }
    handle(ele){
        console.log(ele._id);
        axios.delete('/user/todo/'+ele._id)
      .then(response => { console.log(response.data)});
      this.setState({
        todos: this.state.todos.filter(el => el._id !== ele._id)
      })
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
            
            <div>
                <button onClick={this.handleClick}>Get Articles</button>
                 <ul>
                {
                    this.state.todos.map(todo =>{
                        return(<div><TodoItem key={todo._id} todo={todo}/>
                        <button onClick={()=> this.handle(todo)}>delete</button></div>)
                    })
                }
            </ul>
            </div>
        )
    }
}


