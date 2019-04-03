import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <Link className="item active" to="/">
          <h2 className="ui header" style={{ color: "white" }}>
            Phone Directory
          </h2>
        </Link>
      </div>
    </div>
  );
}
