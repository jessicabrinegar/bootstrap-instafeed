const gridButton = document.querySelector('.grid-btn');
gridButton.addEventListener('click', createGrid);

// const scrollButton = document.querySelector('.scroll-btn');
// scrollButton.addEventListener('click', removeGrid);

var images = ["img/mountains.jpeg","img/horses.jpeg","img/teotihuacan.jpeg","img/volcano.jpeg","img/apoyo.jpeg","img/travel.jpeg"];

function createGrid(){
    const posts = document.querySelectorAll('.d-flex');
    for (let i = 0; i < images.length ; i++){
        posts[i].classList.remove('col-12');
        posts[i].classList.add('col-4');
        posts[i].innerHTML = 
        `<img src=${images[i]} class="grid-image">`;
    };
};