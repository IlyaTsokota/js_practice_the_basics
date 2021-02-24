"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1"), personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
},
	lastWatchedFilmFirst = prompt("Один из последних просмотренных фильмов?", "Logan"),
	lastWatchedFilmRatingFirst = +prompt("На сколько оцените его?", "8.5"),
	lastWatchedFilmSecond = prompt("Один из последних просмотренных фильмов?", "Helsing"),
	lastWatchedFilmRatingSecond = +prompt("На сколько оцените его?", "8.5");

personalMovieDB.movies[lastWatchedFilmFirst] = lastWatchedFilmRatingFirst;
personalMovieDB.movies[lastWatchedFilmSecond] = lastWatchedFilmRatingSecond;

console.log(personalMovieDB);

