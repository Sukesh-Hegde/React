import React from "react";
import ComponentB from "./ComponentB";

class ComponentA extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "ComponentA",
    };
    console.log("ComponentA Constructed"); 
  }

  static getDerivedStateFromProps(){
    console.log("ComponetA getDerivedStateByProps");
    return null
  }

  componentDidMount(){
    console.log("ComponentA ComponentDidMount");
  }

  render() {
    console.log("ComponentA renderd");

    return (
    (<>
      <h1>{this.state.name}</h1>
      <ComponentB/>
    </>));
  }
}

export default ComponentA
