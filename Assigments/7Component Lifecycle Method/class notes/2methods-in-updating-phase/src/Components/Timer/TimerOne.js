import React from "react";

export default class TimerOne extends React.Component {
  constructor() {
    super();

    this.state = {
      time: 0,
    };

    this.timer = null;
    console.log("TimerOne Constructed");
  }

  static getDerivedStateFromProps() {
    console.log("TimerOne getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true; // if it return false it will not rerender
  }

  render() {
    console.log("TimerOne renderd");
    return (
      <>
        <h2>
          Time Spent:{" "}
          {new Date(this.state.time * 1000).toISOString().slice(11, 19)}
        </h2>
      </>
    );
  }

  componentDidMount() {
    console.log("Timer ComponentDidMount");
    console.log("_________________________________");
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("Timer getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Timer componentDidUpdate");
    console.log("_________________________________");

    if (prevProps.timerOn !== this.props.timerOn) {
      if (this.props.timerOn) {
        this.timer = setInterval(() => {
          this.setState((prevState) => ({ time: prevState.time + 1 }));
        }, 1000);
      } else {
        clearInterval(this.timer);
      }
    }
  }

  componentWillUnmount() {
    console.log("Timer componentWillUnmount");
    clearInterval(this.timer);
  }
}
