import React, { Component } from "react";

class TextInputGroup extends Component {
  render() {
    const {
      label,
      name,
      value,
      placeholder,
      type,
      onChange,
      error
    } = this.props;
    const classname = error ? "field error" : "field";
    return (
      <div className={classname}>
        <label htmlFor="{name}">{label}</label>
        <input
          type={type}
          name={name}
          // className={classname}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error ? (
          <div className="ui basic red pointing prompt label transition visible">
            {error}
          </div>
        ) : null}
      </div>
    );
  }
}
export default TextInputGroup;
