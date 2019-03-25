let request = new XMLHttpRequest();
request.open('GET', 'https://swapi.co/api/films/', true);

request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success!
        let resp = JSON.parse(request.responseText)

        let filmsList = document.querySelector('.star-wars-group__films ol')

        for (let counter = 0; counter < resp.results.length; counter++) {
            let films = resp.results[counter].title

            filmsList.appendChild(getFilms(films))
        }
    }
};

request.onerror = function() {
// There was a connection error of some sort
};

request.send();

let getFilms = function (film) {
    let li = document.createElement('li')
    let title = document.createTextNode(film)

    li.appendChild(title)

    return li
}