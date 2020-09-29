import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { MovieHoc, WithTooltip } from "../../../components";

class HocContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>HOC Container</h1>
        <div className="row">
          <div className="col-2">
            <div className="list-group">
              <NavLink
                className="list-group-item list-group-item-action list-group-item-light"
                style={{ cursor: "pointer" }}
                to="/hoc/movie-hoc"
              >
                Movie HOC
              </NavLink>
            </div>
          </div>
          <div className="col">
            <Switch>
              <Route path="/hoc/movie-hoc" component={MovieHoc}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default HocContainer;
