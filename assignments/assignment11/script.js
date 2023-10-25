const getMovies = async () => {
    const url = "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showMovies = async () => {
    const movies = await getMovies();
    const movieDiv = document.getElementById("movie-div");

    movies.forEach((movie) => {
        movieDiv.append(getMovieItem(movie));
    });
};

const getMovieItem = (movie) => {
    const div = document.createElement("div");

    const imgSection = document.createElement("section");
    div.append(imgSection);
    const contentSection = document.createElement("section");
    div.append(contentSection);

    const image = document.createElement("img");
    imgSection.append(image);
    image.src = `https://portiaportia.github.io/json/${movie.img}`;

    const h2 = document.createElement("h2");
    contentSection.append(h2);
    h2.innerHTML = movie.title;

    const directorP = document.createElement("p");
    contentSection.append(directorP);
    directorP.innerHTML = `<strong>Director</strong>: ${movie.director}`;

    contentSection.append(getActors(movie.actors));

    const yearP = document.createElement("p");
    contentSection.append(yearP);
    yearP.innerHTML = `<strong>Year Released</strong>: ${movie.year}`;

    contentSection.append(getGenres(movie.genres));

    const descriptionP = document.createElement("p");
    contentSection.append(descriptionP);
    descriptionP.innerHTML = movie.description;

    return div;
};

const getActors = (actors) => {
    const ul = document.createElement("ul");

    const first = document.createElement("li");
    ul.append(first);
    first.innerHTML = `<strong>Actors: </strong>`;

    actors.forEach((actor) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = actor;
    });

    return ul;
};

const getGenres = (genres) => {
    const ul = document.createElement("ul");

    const first = document.createElement("li");
    ul.append(first);
    first.innerHTML = `<strong>Genres: </strong>`;

    genres.forEach((genre) => {
        const li = document.createElement("li");
        ul.append(li);
        li.innerHTML = genre;
    });

    return ul;
};

window.onload = () => showMovies();