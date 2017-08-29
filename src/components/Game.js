import React, { Component } from 'react';
import ScoreBoard from "./ScoreBoard";
import {getPrefecture, getScore, shouldHighlightCurrentTime} from "../controller/controller";
import classNames from 'classnames';

export default class Game extends Component {
  state = {
    shouldShowScoreBoard: shouldHighlightCurrentTime(this.props.isCurrentDateToday, this.props.time)
  };

  toggleScoreBoard = () => {
    const shouldShowScoreBoard = this.state.shouldShowScoreBoard;
    this.setState({
      shouldShowScoreBoard: !shouldShowScoreBoard
    });
  };

  render() {
    return (
      <div className="single-game" id={'g' + this.props.id}>
        <div className="school-school">
          <div className="info clearfix">
            <div className="round-wrap">
              <i className="fa fa-bullhorn" />
              <span className="round">{this.props.round}</span>
            </div>
            <div className="time-wrap">
              <i className="fa fa-clock-o" />
              <span className={
                classNames({
                  time: true,
                  highlight: shouldHighlightCurrentTime(this.props.isCurrentDateToday, this.props.time)
                })
              }>{this.props.time}</span>
            </div>
          </div>
          {
            this.props.first.name !== '' ?
              <p className="first">
                <span className="prefecture">({getPrefecture(this.props.first.name)})</span>
                <span className="name">{this.props.first.name}</span>
                {
                  this.props.first.scores[8] !== "-" && this.props.third.scores[8] !== "-" ?
                    <span className="final-score">
                      {getScore(this.props.first.scores)}
                    </span> : null
                }
              </p> : null
          }
          <span className="vs">
            {
              this.props.first.name === '' ?
                '対戦カード未定' :
                '-'
            }
          </span>
          {
            this.props.third.name !== '' ?
              <p className="third">
                {
                  this.props.first.scores[8] !== "-" && this.props.third.scores[8] !== "-" ?
                    <span className="final-score">
                      {getScore(this.props.third.scores)}
                    </span> : null
                }
                <span className="name">{this.props.third.name}</span>
                <span className="prefecture">({getPrefecture(this.props.third.name)})</span>
              </p> : null
          }
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
        {
          shouldHighlightCurrentTime(this.props.isCurrentDateToday, this.props.time) || this.props.first.scores[0] !== "-" || this.props.third.scores[0] !== "-" ?
            <div onClick={this.toggleScoreBoard} className="show-more">
              詳細
              <span className={this.state.shouldShowScoreBoard ? "triangle-to-top" : "triangle-to-bottom"} />
            </div> : null
        }
      </div>
    );
  }
}
