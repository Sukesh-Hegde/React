import React from "react"

export default class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  handleIncrease = () =>{
    this.setState((prevState)=>{
        return {count:prevState+1}
    })
  }

  render() {
    console.log("TimerOne Render");
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleIncrease}>increase</button>
      </>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
    console.log("-------------------------------");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("Timer componentDidUpdate");
        console.log("-------------------------------");

  }
}

