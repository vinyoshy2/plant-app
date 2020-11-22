import React, {Component} from "react";
import ReactHover, {Hover, Trigger} from "react-hover";

import "./Profile.css"

class BadgeSingle extends Component {
  static defaultProps = {
    color: "gray"
  }

  render() {
    // Options for hover
    const optionsCursorTrueWithMargin = {
      followCursor: true,
      shiftX: 20,
      shiftY: 0
    };

    return(
      <ReactHover
        options={optionsCursorTrueWithMargin}>
        <Trigger type='trigger'>
          <img className={'badge-image-' + this.props.color}
               src={this.props.imglink}
               alt={'badge'}/>
        </Trigger>
        <Hover type='hover'>
          <p className={'hover-' + this.props.color}> {this.props.description} </p>
        </Hover>
      </ReactHover>
    );
  }
}

export default BadgeSingle;