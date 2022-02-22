import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {onReset ,onIncreament,onDelete,counters,onDecreament}=this.props
    return (
      <React.Fragment>
        <div className="text-center mt-3">
          <div>
            <button
              onClick={onReset}
              className="btn btn-primary btn-sm m-2"
            >
              Reset
            </button>
            {/* <Card
              name="Hebatuallah"
              message="Greetings.... I am heba"
              imageSource="https://imgur.com/random/"
              facebook="https://facebook.com"
              instagram="https://instagram.com/hebatullah_s"
            /> */}
            {counters.map(counter => (
              <Counter
                key={counter.id}
                onDelete={onDelete}
                onIncreament={onIncreament}
                counter={counter}
                onDecreament={onDecreament}
              ></Counter>
            ))}
          </div>
          <button onClick={() => (window.location = "https://google.com")}>
            Send me to google
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Counters;
