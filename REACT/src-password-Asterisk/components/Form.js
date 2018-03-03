import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    firstName: "",
    password: ""
  };
  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };
  handlePasswordChange = event => {
    // Getting the value and name of the input which triggered the change
    const value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if ((!this.state.username) && (!this.state.password)) {
      alert("forgot something");
    } else if (this.state.password.length < 6) {
      alert("create a longer password");
    } else {
      this.setState({
        username: "",
        password: ""
      })
    }
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>
        <p>Password: {'*'.repeat(this.state.password.length)}</p>
        <input
          value={this.state.username}
          name="username"
          onChange={this.handleInputChange}
          type="text"
          placeholder="First Name"
        />
        <input
          value={this.state.password}
          name="password"
          onChange={this.handlePasswordChange}
          type="password"
          placeholder="Password"
        />
        < button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}
export default Form;
