import React from "react";
import ModalArea from "./Modal";
import Home from "./Home";
import {Switch, Route} from "react-router-dom";

class App extends React.Component {
  
  render() {
    return (
      <div className="main">
        <Switch>
          <Route path="/"  exact component={Home} />
          <Route path="/modal" component={ModalArea}/>
        </Switch>
      </div>
    );
  }
}

export default App;
