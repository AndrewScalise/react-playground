import React, { Component, Fragment } from 'react';
import './App.css';
import BottomNavigationExampleOne from "./bottom.js";
import Main from "./theme.js";
import ToolBarExamplesSimple from "./toolbar.js";

class App extends Component {
  render() {
    return (
        <Fragment>
          <div className="App">
              <Main/>
              <ToolBarExamplesSimple/>
              <BottomNavigationExampleOne/>
          </div>
        </Fragment>
    );
  }
}

export default App;
