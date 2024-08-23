/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};


const imgs = document.querySelectorAll('.promo__adv img');
const genre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');
const films = document.querySelector('.promo__interactive-list');

imgs.forEach(img => {
    img.remove()
});

genre.textContent = "Драма"

bg.style.backgroundImage = 'url(img/bg.jpg)'

movieDB.movies.sort().forEach((movie, index) => {
    films.innerHTML += `
        <li class="promo__interactive-item">
            ${index + 1}.
            ${movie}
            <div class="delete"></div>
        </li>
    `;
},);