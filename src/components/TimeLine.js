import React from 'react';

const TimeLine = (props) => (
  <ul id="time-table">
    {
      props.dateList.map((date, index) => {
        return (
          <li
            className={date.isRestDay ? 'rest' : ''}
            key={index}
            onClick={props.showGamesOfTheDate.bind(this, date)}
          >
            <span className="date">
              {date.date}
            </span>
            <span className="day">
              {date.weekday}
            </span>
          </li>
        )
      })
    }
  </ul>
);

TimeLine.defaultProps = {
  dateList: []
};

export default TimeLine;
