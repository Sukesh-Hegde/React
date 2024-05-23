import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: "",
    };
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex),
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevProps) {
    if (this.props.showName && !prevProps.showName) {
      // Start the interval if showName becomes true
      this.intervalId = setInterval(this.typeWriterEffect, 500);
    } else if (!this.props.showName && prevProps.showName) {
      // Clear the interval if showName becomes false
      clearInterval(this.intervalId);
    }
  }

  // Clear interval when component unmounts to prevent memory leaks
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
