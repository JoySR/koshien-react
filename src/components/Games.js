import React from 'react';
import Game from "./Game";

/*
  <Games
    gameList=[{
      round: 1,
      time: "10:30",
      first: {
        name: "北海",
        scores: [1, 2, "X"]
      },
      third: {
        name: "北海",
        scores: [1, 2, "X"]
      },
      newsLink: "",
      videoLink: ""
    }]
  />
 */

const Games = (props) => (
  <div className="today" id="game-list">
    {
      props.gameList.map(game => (
        <Game
          key={game.id}
          round={game.round}
          time={game.time}
          first={game.first}
          third={game.third}
          newsLink={game.news}
          videoLink={game.video}
        />
      ))
    }
  </div>
);

export default Games;
