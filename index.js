"use strict";


let numberOfFilms;

start();

function start() {

	do {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "1");
	} while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms));
}

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log("Просмотрено довольно мало фильмов");
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log("Вы классический зритель");
	} else if (personalMovieDB.count >= 30) {
		console.log("Вы киноман");
	} else {
		console.log("Произошла ошибка");
	}
}

detectPersonalLevel();

function showMyDB(isPrivate) {
	if (!isPrivate) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(arr, count) {
	for (let i = 0; i < count; i++) {
		arr[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
	}
}

writeYourGenres(personalMovieDB.genres, 3);
showMyDB(personalMovieDB.privat);
