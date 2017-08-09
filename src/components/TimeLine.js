import React from 'react';
import classNames from 'classnames';

const TimeLine = (props) => (
  <ul id="time-table">
    {
      props.dateList.map((date, index) => {
        return (
          <li
            className={
              classNames({
                rest: date.isRestDay,
                today: props.currentDateIndex === index
              })
            }
            key={index}
            onClick={props.showGamesOfTheDate.bind(this, date, index)}
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
