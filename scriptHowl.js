let searchBtn = document.getElementById('search-btn');
let filmInp = document.getElementById('film-inp');
searchBtn.addEventListener('click', () => {
    // let filmName = filmInp.value;
    let finalURL = 'https://ghibliapi.herokuapp.com/films/cd3d059c-09f4-4ff3-8d63-bc765a5184fa';
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        console.log(data.original_title);
        console.log(data.director);
        console.log(data.image);
        console.log(data.release_date);
        console.log(data.description);
        result.innerHTML = `
        <img src='${data.image}'
        class='film-img'>
        <h2>${data.original_title}</h2>
        <h3>${data.director}</h3>
        <h3>${data.release_date}</h3>
        <h3>${data.description}</h3>
        `;
    });
});