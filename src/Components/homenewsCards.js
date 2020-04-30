import React, { Component } from 'react'
import "./newsCard.css";
export default class homenewsCards extends Component {
    render() {
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
                 </div>
                  <br/>
                </div>
                <br/>
                
                  <br/>
          </div>
        )
    }
}
