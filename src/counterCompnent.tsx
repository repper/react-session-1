import React, { Component } from "react";

interface Props {}
interface State {}

export default class counterCompnent extends Component<Props, State> {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h3>Counter Example State</h3>
        <h5>{this.state.count}</h5>

        <button style={{ marginRight: 10 }} onClick={this.increment}>
          +
        </button>

        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
