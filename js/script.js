/*
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту*/

'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
    const addForm = document.querySelector('form.add')
    const addInput = addForm.querySelector('.adding__input')
    const addCheckbox = addForm.querySelector('[type="checkbox"]')
    addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let newFilm = addInput.value.trim()
        const isFavourite = addCheckbox.checked
        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`
            }

            if (isFavourite) {
                console.log('Добавляем любимый фильм')
            }
            movieDB.movies.push(newFilm)
            createMoviesList(movieDB.movies, films)
            e.target.reset()
        }
    })

    imgs.forEach(img => {
        img.remove()
    });

    genre.textContent = "Драма"
    bg.style.backgroundImage = 'url(img/bg.jpg)'
    
    createMoviesList(movieDB.movies, films)

    function createMoviesList(moviesArr, parent) {
        parent.innerHTML = ''
        moviesArr.sort().forEach((movie, index) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">
                    ${index + 1}.
                    ${movie}
                    <div class="delete"></div>
                </li>
            `;
        });
    
        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                moviesArr.splice(i, 1);
                createMoviesList(moviesArr, parent);
            });
        });
    };
})
