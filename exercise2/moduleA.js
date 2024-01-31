import { topMovies } from "./moduleB.js";

function checkMovie(movieName) {
  return topMovies.includes(movieName);
}

export { checkMovie };
