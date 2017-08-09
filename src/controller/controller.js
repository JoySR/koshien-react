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

const getTwoDigits = number => number < 10 ? "0" + number : number;

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

export const getTodaysIndexInTimeLine = () => {
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
