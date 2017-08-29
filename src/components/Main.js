import React, { Component } from 'react';
import TimeLine from "./TimeLine";
import config from '../config/config';
import Card from "./Card";
import Games from "./Games";
import GameFile from '../assets/data/game.json';
import {
  getInitialTodaysIndexInTimeLine, getTodaysIndexInGames,
  isBeforeStartDate, isAfterEndDate, getTodaysIndexInTimeLine
} from "../controller/controller";

import $ from 'jquery';

const REST_DAY_MESSAGE = '今日は休養日，明日の試合は：';

export default class Main extends Component {
  state = {
    message: '',
    currentDateIndex: getInitialTodaysIndexInTimeLine(),
    gameList: GameFile.schedule[getTodaysIndexInGames()].games,
    isCurrentDateToday: true,
    gameId: "3-1" // TODO: 存在 localStorage
  };

  componentWillMount = () => {
    if (isBeforeStartDate() || isAfterEndDate()) {
      this.setState({
        isCurrentDateToday: false,
      });
    }
  };

  componentDidMount = () => {
    setTimeout(() => {
      $("html,body").animate({scrollTop: ($("#g" + this.state.gameId).offset().top-60)}, 200);
    }, 5000)
  };

  showGameOfTheDate = (date, index) => {
    if (date.isRestDay) {
      this.setState({
        message: REST_DAY_MESSAGE,
        currentDateIndex: index,
        gameList: GameFile.schedule[index].games,
      });
    } else if (date.isAfterRestDay) {
      this.setState({
        message: '',
        currentDateIndex: index,
        gameList: GameFile.schedule[index - 1].games,
        isCurrentDateToday: getTodaysIndexInTimeLine() === index,
      });
    } else {
      this.setState({
        message: '',
        currentDateIndex: index,
        gameList: GameFile.schedule[index].games,
        isCurrentDateToday: getTodaysIndexInTimeLine() === index,
      });
    }
  };

  render() {
    return (
      <div className="main">
        <div className="section" id="game">
          <h2><i className="fa fa-calendar" />日程</h2>
          <TimeLine
            dateList={config.dateList}
            currentDateIndex={this.state.currentDateIndex}
            showGamesOfTheDate={this.showGameOfTheDate}
          />
          <div className="message" id="message">
            <h3>{this.state.message}</h3>
          </div>
          <Games
            isCurrentDateToday={this.state.isCurrentDateToday}
            gameList={this.state.gameList}
          />
          <Card/>
        </div>
      </div>
    );
  }
}
