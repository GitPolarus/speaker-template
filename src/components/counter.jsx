import { Component } from "react";
import "./style.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    // declaration de l'etat
    this.state = {
      count: 0,
    };
    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    let { count: value } = this.state;
    this.setState({ count: value + 1 });
  };

  decrement = () => {
    let { count: value } = this.state;
    this.setState({ count: value - 1 });
  };

  render() {
    const { count } = this.state;
    let theme = {};
    if (count > 5) {
      theme = { backgroundColor: "red", color: "white" };
    } else if (count < -5) {
      theme = { backgroundColor: "blue", color: "white" };
    } else {
      theme = { backgroundColor: "green", color: "white" };
    }
    return (
      <>
        <div style={theme} id="counter">
          {count}
        </div>
        <button onClick={this.decrement}>Decrementer</button>

        <button onClick={this.increment}>Incrementer</button>
      </>
    );
  }
}

export default Counter;
