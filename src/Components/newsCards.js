import React, {useState,useContext,useEffect} from 'react';
import TodoService from '../Services/TodoService';
import "./newsCard.css";

class NewsCards extends React.Component {
 constructor(props) {
   super(props)
   this.state={
     name: ''
   }
   this.handleClick = this.handleClick.bind(this);
  // const [todo,setTodo] = useState({name : ""});
 }
 
 handleClick() {
  
  // console.log(this.props.title);
   this.setState({
     name : this.props.title
    });
    const todo= {
      name: this.props.title
    }
    console.log(todo);
   TodoService.postTodo(todo).then(data =>{
    const { message } = data;})
}
  render(){
  return (
    <div key={this.props.id}>
      <div className="divshape">
        <img className="image"  src={this.props.image} alt={"News article"} />
        <div >
              <h5 >{this.props.title}</h5>
            <p className="kau">{this.props.description}</p>
              <footer><cite title="Source Title">{this.props.source}</cite></footer>
              <a href={this.props.url} target="noopener noreferrer">
                Read More
              </a> 
              <br/>
            <button onClick={this.handleClick}>save</button>  
            </div>
            <br/>
          </div>
          <br/>
          
            <br/>
    </div>
  );
  }
}
export default NewsCards;
