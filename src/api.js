const base_url = "https://api.rawg.io/api";

// Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth();
  return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  return day < 10 ? `0${day}` : day;
};

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

export const api_key = process.env.REACT_APP_RAWG_API_KEY;

// Popular games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page-size=10&key=${api_key}`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page-size=10&key=${api_key}`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page-size=10&key=${api_key}`;

export const popularGamesURL = () => {
  return `${base_url}/${popular_games}`;
};

export const upcomingGamesURL = () => {
  return `${base_url}/${upcoming_games}`;
};

export const newGamesURL = () => {
  return `${base_url}/${new_games}`;
};

export const gameDetailsURL = (id) => {
  return `${base_url}/games/${id}?key=${api_key}`;
};

export const gameScreenshotURL = (id) => {
  return `${base_url}/games/${id}/screenshots?key=${api_key}`;
};

// Searched Game
export const searchGameURL = (game_name) => {
  return `${base_url}/games?search=${game_name}&page_size=12&key=${api_key}`;
};
