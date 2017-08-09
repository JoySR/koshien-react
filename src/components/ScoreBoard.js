import React, { Component } from 'react';
import { getScore } from "../controller/controller";

/*
  <ScoreBoard
    home={{name: '', scores: [1, 0, "X"]}}
    visit={{name: '', scores: [0, 0, "1X"]}}
  />
 */

export default class ScoreBoard extends Component {
  render() {
    return (
      <table className="scoreboard">
        <tr className="home">
          <td className="name">{this.props.home.name}</td>
          {/* TODO: scores */}
          <td className="final">{getScore(this.props.home.scores)}</td>
        </tr>
        <tr className="visit">
          <td className="name">{this.props.visit.name}</td>
          {/* TODO: scores  */}
          <td className="final">{getScore(this.props.visit.scores)}</td>
        </tr>
      </table>
    );
  }
}