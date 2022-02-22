import React, { Component } from "react";
import Like from "./like";

class Counter extends Component {
  

  render() {
    return (
      <div className="m-3 row">
       <h5>counter #{this.props.counter.id}</h5> 

      <div className="col">
          <span className={this.newMethod()}>{this.formatCount()}</span>
    </div>
        <div className="col">
          {" "}
          <button
            onClick={()=> this.props.onIncreament(this.props.counter)}
            className="btn btn-success ml-3"
          >
            +
          </button>
        </div>
        <div className="col">
          <button
            onClick={()=>this.props.onDecreament(this.props.counter)}
            className="btn btn-danger ml-3 "
            disabled={this.props.counter.value===0 ? 'disabled':''}
          >
            -
          </button>
  </div>
        <div className="col">
          <button
            onClick={()=>this.props.onDelete(this.props.counter.id)}
            className="btn btn-primary ml-3 "
          >
            Delete
          </button>
        </div>
    <div className='col'> 
    
    <Like/>


    </div>
      </div>
    );
  }
  /*handleDecreament = () => {
    if (this.state.value=== 0) return;

    this.setState({ value: this.state.value- 1 });
  };*/
  
  
  renderTag() {
    if (this.state.tag.length === 0) return <p>no list</p>;
    return (
      <ul>
        {this.state.tag.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }
  newMethod() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;}
  
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "0 " : value;
  }
}
export default Counter;