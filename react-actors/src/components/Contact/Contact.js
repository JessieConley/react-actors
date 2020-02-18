import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <input type="text" id="firstName" placeholder="First Name" />
        <input type="text" id="lastName" value="" placeholder="Last Name" />
        <input
          type="text"
          id="bestImpression"
          value=""
          placeholder="Best Impression"
        />
        <button type="button" id="addTaskButton">
          Join Us!
        </button>

        <p>Phone: 1-800-WE-REACT</p>
        <p>Email: info@ReactActors.com</p>
      </div>
    );
  }
}

export default Contact;
