import React, { Component } from "react";
import WithTooltip from "./WithTooltip";

class MovieHoc extends Component {
  render() {
    return (
      <div>
        Movie HOC
        {this.props.showToolTip && <div>Somme tooltip</div>}
      </div>
    );
  }
}

export default WithTooltip(MovieHoc);
