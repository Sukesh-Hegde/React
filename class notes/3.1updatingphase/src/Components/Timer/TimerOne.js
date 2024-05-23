import React from "react"

class Timer extends React.Component() {
  constructor() {
    super();

    console.log("TimerOne Constructor");
  }

  static getDerivedStateFromProps() {
    console.log("Timer getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  render() {
    console.log("TimerOne Render");
    return (
        <h1>Timer</h1>
    );
  }

  componentDidMount() {
    console.log("TimerOne componentDidMount");
  }

  getSnapshoyBeforeUpdate()
}