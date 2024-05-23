import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "ComponentA",
      data: []
    };
    console.log("ComponentA Constructed");
  }

  static getDerivedStateFromProps() {
    console.log("ComponetA getDerivedStateByProps");
    return null;
  }
  //https://jsonplaceholder.typicode.com/users
  componentDidMount() {
    console.log("ComponentA ComponentDidMount");
    fetch("https://jsonplaceholder.typicode.com/user")
      .then((response) => response.json())
      .then((data) => this.setState({data}));
  }

  render() {

    return (
      <>
        <h1>{this.state.name}</h1>
        <ul>
        {this.state.data.map((d)=>{
            return(
                <li>{d.username}</li>
            )
        })}
      </ul>
      </>
    );
  }
}

export default ComponentA
