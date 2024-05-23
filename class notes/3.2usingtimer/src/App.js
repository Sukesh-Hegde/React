import React from "react";
import Timer from "./Components/Timer/TimerOne";
import ComponentA from "./Components/Component/ComponentA";
import ComponentB from "./Components/Component/ComponentB";
import ErrorBoundary from "./ErrorBoundary";

class App extends React.Component {
  constructor() {
    super();

    // this.state = {
    //   timerOn: false,
    // };
  }

  // handleTimerOn = () => {
  //   this.setState((prevState) => ({ timerOn: !prevState.timerOn }));
  // };

  render() {
    return (
      <>
        <ErrorBoundary>
          <ComponentA />
        </ErrorBoundary>

        <ErrorBoundary>
          <ComponentB />
        </ErrorBoundary>

        {/* <Timer timerOn = {this.state.timerOn} />
        <button onClick={this.handleTimerOn}>
          {this.state.timerOn ? "STOP" : "START"}
        </button> */}
      </>
    );
  }
}

export default App;
