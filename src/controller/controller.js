import GameFile from '../assets/data/game.json';

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
