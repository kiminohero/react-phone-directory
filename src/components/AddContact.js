import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { addContact } from "../actions";

import TextInputGroup from "./TextInputGroup";

class AddContact extends Component {
  state = {
    name: "",
    phone_no: "",
    errors: {
      name: "",
      phone_no: ""
    }
  };

  onChange = e => {
    if (this.state.errors.name !== "" || this.state.errors.phone_no !== "") {
      this.setState({
        errors: {
          name: "",
          phone_no: ""
        }
      });
    }
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const name = this.state.name;
    const phone_no = this.state.phone_no;

    if (name === "") {
      this.setState({
        errors: { name: "Name is required" }
      });
      return;
    }

    if (phone_no === "") {
      this.setState({
        errors: { phone_no: "Phone number is required" }
      });
      return;
    }

    if (phone_no.length !== 10) {
      this.setState({
        errors: { phone_no: "Phone number is invalid" }
      });
      return;
    }

    if (this.state.errors.phone_no === "" && this.state.errors.name === "") {
      this.setState({ name: "", phone_no: "" });
      this.props.addContact(name, phone_no);
    } else {
      console.log(this.state.errors);
    }
  };

  render() {
    return (
      <div>
        <div className="ui one column stackable center aligned page grid">
          <div className="column twelve wide">
            <Link to="/" className="ui large positive button">
              <i className="fas fa-chevron-circle-left" /> Go Back
            </Link>
          </div>
        </div>
        <hr />
        <div className="ui centered card" style={{ padding: "30px" }}>
          <form className="ui form" onSubmit={this.onSubmit}>
            <div className="required field">
              <TextInputGroup
                type="text"
                value={this.state.name}
                placeholder="Enter Your Name"
                onChange={this.onChange}
                name="name"
                label="Name"
                error={this.state.errors.name}
              />
            </div>
            <TextInputGroup
              type="number"
              value={this.state.phone_no}
              placeholder="Enter Your Phone Number"
              onChange={this.onChange}
              name="phone_no"
              label="Phone Number"
              error={this.state.errors.phone_no}
            />
            <button
              type="Submit"
              className="ui blue button"
              style={{ marginTop: "10px" }}
            >
              Add Contact
            </button>
          </form>
        </div>
        {this.state.name && this.state.phone_no ? (
          <>
            <hr />
            <h3>Subscriber To Be Added: </h3>
            <p>Name: {this.state.name}</p>
            <p>Phone Number: {this.state.phone_no}</p>
          </>
        ) : null}
      </div>
    );
  }
}

export default connect(
  null,
  { addContact }
)(AddContact);
