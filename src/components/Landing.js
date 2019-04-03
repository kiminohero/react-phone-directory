import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../actions";

class Landing extends Component {
  onClick = index => {
    this.props.deleteContact(index);
  };

  render() {
    return (
      <div className="container">
        {this.props.contacts.length > 0 ? (
          <table className="ui three column celled table">
            <thead>
              <tr>
                <th scope="col" className="center aligned">
                  Name
                </th>
                <th scope="col" className="center aligned">
                  Phone Number
                </th>
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
              {this.props.contacts.map((contact, index) => (
                <tr key={index}>
                  <th className="center aligned">{contact.name}</th>
                  <td className="center aligned">{contact.number}</td>
                  <td className="center aligned">
                    <button
                      className="ui circular red button"
                      onClick={() => this.onClick(index)}
                    >
                      <i className="fas fa-trash-alt" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="ui placeholder segment">
            <div className="container">
              <h2 style={{ textAlign: "center" }}>No Contacts Available</h2>
            </div>
          </div>
        )}
        <div className="ui divider" />
        <div className="ui one column stackable center aligned page grid">
          <div className="column twelve wide">
            <Link
              to="/addContact"
              className="ui  positive button"
              style={{ marginRight: "10px" }}
            >
              <i className="fas fa-plus" /> Add Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(
  mapStateToProps,
  { deleteContact }
)(Landing);
