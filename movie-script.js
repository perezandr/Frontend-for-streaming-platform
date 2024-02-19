import { httpGet } from "./modules/http.js";

const createCustomEl = (type, className) => {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  return element;
};

const movieData = await httpGet("/movie/popular");

const queryParameters = new URLSearchParams(window.location.search);
const movieId = queryParameters.get("id");
const parsedMovieId = parseInt(movieId);
//faccio il parseInt poiché il get precedente mi da un valore in stringa e non numerico

const selectMovie = movieData.results.find(
  (movie) => movie.id === parsedMovieId
);

const moviePageGenerator = () => {
  const section = createCustomEl("section", "movie-page-container");
  const overlay = createCustomEl("div", "gradient-overlay");
  const imageEl = createCustomEl("img", "movie-page-image");
  const homeButton = createCustomEl("button", "home-button");
  const textWrapper = createCustomEl("div", "text-wrapper");
  const movieTitle = createCustomEl("h1", "movie-title");
  const starWrapper = createCustomEl("div", "Stars");
  const movieButtonsWrapper = createCustomEl("div", "movie-buttons-wrapper");
  const playButton = createCustomEl("button", "play");
  const addButton = createCustomEl("button", "add");

  const movieDescription = createCustomEl("p", "movie-description");

  imageEl.src = `https://image.tmdb.org/t/p/w1280${selectMovie.backdrop_path}`;
  starWrapper.setAttribute("style", `--rating: ${selectMovie.vote_average}`);
  homeButton.textContent = "X";
  playButton.textContent = "Watch now";
  addButton.textContent = "+";
  movieTitle.textContent = selectMovie.title;
  movieDescription.textContent = `Description: ${selectMovie.overview}`;

  homeButton.addEventListener("click", () => {
    window.location.href = "http://127.0.0.1:5500/12-29-CodingWeek/index.html";
  });

  movieButtonsWrapper.append(playButton, addButton);
  textWrapper.append(
    movieTitle,
    starWrapper,
    movieButtonsWrapper,
    movieDescription
  );
  section.append(homeButton, imageEl, overlay, textWrapper);

  return section;
};

document.body.appendChild(moviePageGenerator());
