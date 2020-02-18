import React, { Component } from "react";
import ReactDom from "react-dom";

const handleSubmit = () => {

};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      bestImpression: ""
    };
  }

  myChangeHandler1 = (event) => {
    let fNam = event.target.firstName;
    let val = event.target.value;
    // let lNam = event.target.lasttName;
    // let bes = event.target.bestImpression;
    this.setState({ [fNam]: val });
  };

  myChangeHandler2 = (event) => {
    let lNam = event.target.lastName;
    let val = event.target.value;
    // let lNam = event.target.lasttName;
    // let bes = event.target.bestImpression;
    this.setState({ [lNam]: val });
  };

  myChangeHandler2 = (event) => {
    let bes = event.target.bestImpression;
    let val = event.target.value;
    // let lNam = event.target.lasttName;
    // let bes = event.target.bestImpression;
    this.setState({ [bes]: val });
  };

  render() {
    return (
        <form>
          <h2>Contact</h2>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            onChange={this.myChangeHandler1}
          />
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            onChange={this.myChangeHandler2}
          />
          <input
            type="text"
            id="bestImpression"
            placeholder="Best Impression"
            onChange={this.myChangeHandler3}
          />
          <button onClick={handleSubmit}>Join Us!</button>
        </form>
    );
  }
}

ReactDom.render(<Form />, document.getElementById("App"));
export default Form;

