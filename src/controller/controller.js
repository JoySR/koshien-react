import GameFile from '../assets/data/game.json';
import config from '../config/config';

export const getImageUrl = (imageObject) => {
  for (let key in imageObject) {
    return imageObject[key];
  }
};

export const getScore = scoreList => {
  return scoreList.reduce((sum, score) => {
    const numberScore = parseInt(score, 10);
    if (!isNaN(numberScore)) {
      return sum + numberScore;
    } else {
      return sum;
    }
  }, 0);
};

export const getPrefecture = name => {
  const school = GameFile.schools.filter(function(school) {
    return school.name === name;
  });
  if (school[0]) {
    return school[0].prefecture;
  } else {
    return '';
  }
};

const getTwoDigits = number => number < 10 ? "0" + number : "" + number;

export const getDateToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = getTwoDigits(now.getMonth() + 1);
  const date = getTwoDigits(now.getDate());
  return year + "年" + month + "月" + date + "日";
};

export const isBeforeStartDate = () => {
  const startDate = GameFile.schedule[0].date;
  return getDateToday() < startDate;
};

export const isAfterEndDate = () => {
  const length = GameFile.schedule.length;
  const endDate = GameFile.schedule[length - 1].date;
  return getDateToday() > endDate;
};

export const isRestDay = (index) => {
  const dateList = config.dateList;
  const length = dateList.length;
  for (let i = 0; i < length; i++) {
    if (i === index && dateList[i].isRestDay) {
      return true;
    }
  }
  return false;
};

export const isAfterRestDay = (index) => {
  const dateList = config.dateList;
  const length = dateList.length;
  let restDayIndex;
  for (let i = 0; i < length; i++) {
    if (dateList[i].isRestDay) {
      restDayIndex = i;
    }
  }
  return index > restDayIndex;
};

export const getTodaysIndexInTimeLine = () => {
  const dateList = config.dateList;
  const length = dateList.length;

  const today = getTwoDigits(new Date().getDate());
  for (let i = 0; i < length; i++) {
    if (dateList[i].date === today) {
      return i;
    }
  }
};

export const getInitialTodaysIndexInTimeLine = () => {
  const dateList = config.dateList;
  const length = dateList.length;
  if (isBeforeStartDate()) { return 0; }
  if (isAfterEndDate()) { return length - 1; }

  const today = getTwoDigits(new Date().getDate());
  for (let i = 0; i < length; i++) {
    if (dateList[i].date === today) {
      return i;
    }
  }
};

export const getTodaysIndexInGames = () => {
  const todaysIndex = getInitialTodaysIndexInTimeLine();
  let gameIndex;
  if (isRestDay(todaysIndex)) {
    gameIndex = todaysIndex + 1;
  } else if (isAfterRestDay(todaysIndex)) {
    gameIndex = todaysIndex - 1;
  } else {
    gameIndex = todaysIndex;
  }
  return gameIndex;
};

export const getTimeNow = () => {
  const now = new Date();
  const hour = now.getUTCHours();
  //获取北京时间
  const beijingHour = getTwoDigits(hour + 9);
  const minute = getTwoDigits(now.getMinutes());
  return beijingHour + ":" + minute;
};

const getOffsetTime = (time) => {
  const hour = parseInt(time.split(':')[0], 10);
  const minute = parseInt(time.split(':')[1], 10);
  return hour * 60 + minute;
};

export const shouldHighlightCurrentTime = (isCurrentDateToday, time) => {
  if (isBeforeStartDate() || isAfterEndDate() || isRestDay(getInitialTodaysIndexInTimeLine()) || !isCurrentDateToday) {
    return false;
  }

  const timeNow = getTimeNow();
  const offsetTimeNow = getOffsetTime(timeNow);
  const offsetToHighlightTime = getOffsetTime(time);

  if ( // first game of the day
    offsetToHighlightTime === 480 || // 08:00
    offsetToHighlightTime === 570 || // 09:30
    offsetToHighlightTime === 660    // 11:00
  ) {
    return offsetTimeNow <= offsetToHighlightTime || offsetTimeNow - offsetToHighlightTime < 150;
  } else if ( // last game of the day
    offsetToHighlightTime === 810 || // 13:30
    offsetToHighlightTime === 870 || // 14:30
    offsetToHighlightTime === 930    // 15:30
  ) {
    console.log(offsetTimeNow);
    console.log(offsetToHighlightTime);
    return offsetTimeNow >= offsetToHighlightTime;
  } else {
    return offsetTimeNow >= offsetToHighlightTime && offsetTimeNow - offsetToHighlightTime < 150;
  }

};
