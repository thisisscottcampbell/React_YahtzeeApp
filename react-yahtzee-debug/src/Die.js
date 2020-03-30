import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ['one', 'two', 'three', 'four', 'five', 'six' ]
  }

  handleDieClick = () => {
    this.props.handleClick(this.props.idx)
  }
  render() {
    // this.props.numberWords[this.props.val - 1]
    let classes = `Die fas fa-dice-${this.props.numberWords[this.props.val - 1]} fa-5x `;
    if (this.props.locked) classes += 'Die-locked';
    return (
      <button
        className={classes}
        onClick={this.handleDieClick}
      >
      </button>
    );
  }
}

export default Die;
