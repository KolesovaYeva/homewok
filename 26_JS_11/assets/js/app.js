const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=bec8911d';
let movieType = 'movie';

function createMovieList(list){
    list.forEach(element => {
        const ul = document.getElementById('list');
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.setAttribute('src', element.Poster);
        li.textContent = element.Title;

        ul.append(img);
        ul.append(li);
    });
}

function findAFilm(){
    const query = document.getElementById('search').value;
    console.log(query);

    axios(URL + `&t=${query}&type=${movieType}`)
        .then(response =>{
                createMovieList([response.data]);
        })
        .catch(err =>{
                console.log(err);
        });
}

function changeType(e){
    movieType = e.target.value;
}

// const URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=bec8911d';

// axios(URL + '&t=Star')
//     .then(response => {
//         createMovieList([response.data]);
//     })
//     .catch(err => {
//         console.log(err)
//     });

// function createMovieList(list){

//     console.log(list);
//     list.forEach(element => {
//         const ul = document.getElementById('list');
//         const li = document.createElement('li');
//         li.textContent = element.Title;

//         ul.append(li);
//     });
// }