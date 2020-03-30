import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  render() {
    //const {score, name, doScore} = this.props
      //means
        // score = this.props.score
        // doScore = this.props.doScore
        // name = this.props.name 
        // description = this.props.description
    //Could refactor using this var: const disabled = score != undefined ...

    return (
      <tr className= {`RuleRow RuleRow-${this.props.score === undefined ? 'active' : 'disabled'}`}
        onClick={this.props.score === undefined ? this.props.doScore : null}>
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score === undefined ? this.props.description : this.props.score }</td>
      </tr>
    )
  }
}

export default RuleRow;