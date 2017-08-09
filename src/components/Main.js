import React, { Component } from 'react';
import TimeLine from "./TimeLine";
import config from '../config/config';
import Card from "./Card";
import Games from "./Games";
import GameFile from '../assets/data/game.json';

console.log(GameFile);

export default class Main extends Component {

  state = {
    message: '',
    gameList: GameFile.schedule[0].games,
  };

  showGameOfTheDate = date => {
    if (date.isRestDay) {
      // TODO: 休息日的处理
    } else {

    }
  };

  render() {
    return (
      <div className="main">
        <div className="section" id="game">
          <h2><i className="fa fa-calendar" />日程</h2>
          <TimeLine
            dateList={config.dateList}
            showGamesOfTheDate={this.showGameOfTheDate}
          />
          <div className="message" id="message">
            {this.state.message}
          </div>
          <Games
            gameList={this.state.gameList}
          />
          <Card/>
        </div>
      </div>
    );
  }
}
