import React, { Component } from 'react';
import ScoreBoard from "./ScoreBoard";
import { getPrefecture, getScore } from "../controller/controller";

export default class Game extends Component {
  state = {
    shouldShowScoreBoard: false,
  };

  toggleScoreBoard = () => {
    const shouldShowScoreBoard = this.state.shouldShowScoreBoard;
    this.setState({
      shouldShowScoreBoard: !shouldShowScoreBoard
    });
  };

  render() {
    return (
      <div className="single-game">
        <div className="school-school">
          <div className="info clearfix">
            <div className="round-wrap">
              <i className="fa fa-bullhorn" />
              <span className="round">{this.props.round}</span>
            </div>
            <div className="time-wrap">
              <i className="fa fa-clock-o" />
              <span className="time">{this.props.time}</span>
            </div>
          </div>
          <p className="first">
            <span className="prefecture">({getPrefecture(this.props.first.name)})</span>
            <span className="name">{this.props.first.name}</span>
            <span className="final-score">{getScore(this.props.first.scores)}</span>
          </p>
          <span className="vs">-</span>
          <p className="first">
            <span className="final-score">{getScore(this.props.third.scores)}</span>
            <span className="name">{this.props.third.name}</span>
            <span className="prefecture">({getPrefecture(this.props.third.name)})</span>
          </p>
        </div>
        {
          this.state.shouldShowScoreBoard ?
            <ScoreBoard
              home={this.props.isThirdHome ? this.props.third : this.props.first}
              visit={this.props.isThirdHome ? this.props.first : this.props.third}
            /> :
            null
        }
        {
          this.state.shouldShowScoreBoard ?
            <div className="after-game">
              <a href={this.props.news} className="news"><i className="fa fa-link" />速報</a>
              <a href={this.props.video} className="video"><i className="fa fa-video-camera" />ビデオ</a>
            </div> :
            null
        }
        <div onClick={this.toggleScoreBoard} className="show-more">詳細<span className={this.state.shouldShowScoreBoard ? "triangle-to-top" : "triangle-to-bottom"} /></div>
      </div>
    );
  }
}
