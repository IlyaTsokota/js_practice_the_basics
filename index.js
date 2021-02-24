"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		do {
			this.count = +prompt("Сколько фильмов вы уже посмотрели?", "1");
		} while (this.count == '' || this.count == null || isNaN(this.count));
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?', ''),
				b = prompt('На сколько оцените его?', '');

			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				this.movies[a] = b;
				console.log('done');
			} else {
				console.log('error');
				i--;
			}
		}
	},
	detectPersonalLevel: function () {
		if (this.count < 10) {
			console.log("Просмотрено довольно мало фильмов");
		} else if (this.count >= 10 && this.count < 30) {
			console.log("Вы классический зритель");
		} else if (this.count >= 30) {
			console.log("Вы киноман");
		} else {
			console.log("Произошла ошибка");
		}
	},
	showMyDB: function () {
		if (!this.privat) {
			console.log(this);
		}
	},
	writeYourGenres: function (count) {
		for (let i = 0; i < count; i++) {
			do {
				this.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
			} while (this.genres[i] == null || this.genres[i] == '');
		}
	},
	printMyFavoriteGenres: function () {
		this.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i} - это ${item}`);
		});
	},
	toggleVisibleMyDB: function () { this.privat = !this.privat; },
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres(3);
personalMovieDB.printMyFavoriteGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
