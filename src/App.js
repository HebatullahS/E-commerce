import Navbar from "./component/navbar";
import Counters from "./component/counters";
import React, { Component } from "react";

class App extends Component {
  constructor(){
    super();
    console.log('constructor')

  }
  state = {
    counters: [
      { id: 0, value: 1 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };
  handleIncreament = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (countersId) => {
    const counters = this.state.counters.filter((c) => c.id !== countersId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({counters});
  };
  handleDecreament=(counter)=>{
   const counters=[...this.state.counters];
   const index = counters.indexOf(counter);
   counters[index] = { ...counter };
   counters[index].value--;
   console.log("hi ana bra")
   this.setState({counters})
   
  };

  render() {
    return (
      <div>
        <Navbar totalCounters={this.state.counters.filter(c=>c.value>0).length}/>
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncreament={this.handleIncreament}
            onDecreament={this.handleDecreament}
          />
        </main>
      </div>
    );
  }
}
export default App;
