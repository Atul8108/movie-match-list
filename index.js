let movieNameRef = document.getElementById("movie-name")
let searchBtn = document.getElementById("search-btn")
let result = document.getElementById("result")

//function to fetch the data from API
let getMovie = () => {
    let movieName = movieNameRef.value
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`

    //If input field is empty
    if (movieName.length <= 0) {
        result.innerHTML = `<h3 class="msg">Please Enter the Movie Name </h3>`
    }

    //If input field is not empty

    else {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                // console.log(data.Poster)
                // console.log(data.Title)
                // console.log(data.imdbRating)
                // console.log(data.Rated)
                // console.log(data.Year)
                // console.log(data.Runtime)
                // console.log(data.Genre)
                // console.log(data.Plot)
                // console.log(data.Actors)
                //if movie exist in DB 
                if (data.Response == "True") {

                    result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class ="rating">
                                <img src ="star.svg" >
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class= "details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Actors:</h3>
                    <p>${data.Actors}</p>
                `

                }

                else {
                    result.innerHTML = `<h3 class="msg">Movie Not Found</h3>`
                }
            })
            .catch((err) => {
                result.innerHTML = `<h3 class="msg">Can not find the movie </h3>`
            })

        return true
    }
}
searchBtn.addEventListener('click', getMovie)

window.addEventListener("load", getMovie)