/* вывод задач на день */
let count_id = 0;    // ID начиная с 0
function _(id){
     return document.getElementById(id)
 }

 function getRs(){
    let txt = _("txt").value;
    // появление кнопки
    if(document.getElementById("del").style.display != 'inline'){
        document.getElementById("del").style.display = 'inline';
    }
    // вывод
    _("rs").innerHTML += `<div class="card">
    <input type="checkbox" class=”custom-checkbox” id=${count_id}>
    <label>${txt}<label>
    </div>`
    count_id += 1;
 }


/* фон */

// let theme_id = 0;
// if(theme_id == 0){
//     document.body.style.backgroundImage = 'url("../theme/img/cat.png")';
// }
function first(obj){
    let theme_id = obj.id;
    if(theme_id=='11'){
        document.body.style.backgroundImage = 'url("../theme/img/8bitd.png")';
    }
    else if(theme_id=='22'){
        document.body.style.backgroundImage = 'url("../theme/img/austro.jpg")';
    }
    else if(theme_id=='33'){
        document.body.style.backgroundImage = 'url("../theme/img/pix11.jpg")';
    }
}

/* статьи */
let mass_games = ['https://www.igromania.ru/news/', 'https://dtf.ru/games', 'https://cyber.sports.ru/games/news/'];
let mass_films = ['https://dtf.ru/cinema', 'https://www.film.ru/news', 'https://www.kinopoisk.ru/media/news/']
let mass_science =['https://dtf.ru/science', 'https://naked-science.ru/']

function rand_game(){
    let rand = Math.floor(Math.random()*mass_games.length);
    let game_link = mass_games[rand];
    link = document.getElementById("games");
    link.href = game_link;
}

function rand_film(){
    let rand = Math.floor(Math.random()*mass_films.length);
    let film_link = mass_films[rand];
    link = document.getElementById("cinema");
    link.href = film_link;
}

function rand_science(){
    let rand = Math.floor(Math.random()*mass_science.length);
    let science_link = mass_science[rand];
    link = document.getElementById("science");
    link.href = science_link;
}

