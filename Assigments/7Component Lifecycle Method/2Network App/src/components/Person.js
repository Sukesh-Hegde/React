import { Component } from "react";

class Person extends Component {
  // Define appropriate lifecycle method to show alert here
  componentWillUnmount() {
    const {email}=this.props.person
      alert(`Person with email ${email} has been removed.`);
    
  }

  render() {
    const { img, email } = this.props.person;
    const {removePerson,index}= this.props;
    return (
      <div className="person">
        <button onClick={()=>removePerson(index)}>X</button>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
