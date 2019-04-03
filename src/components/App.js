import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";

import Header from "./Header";
import Landing from "./Landing";
import AddContact from "./AddContact";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Header />
        <div className="container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/addContact" component={AddContact} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
