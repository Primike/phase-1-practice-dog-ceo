

document.addEventListener("DOMContentLoaded", () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            addImages(json.message)
        })
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(function(response) {
            return response.json();
        })
        .then(function(json){
            addBreeds(json.message)
        })

    let options = document.getElementById("breed-dropdown")
    options.addEventListener('change', (e) => {changeDogs(e)})

});

function changeDogs(event) {
    let x = document.getElementsByTagName("li")
    for (const i in x) {
        console.log(i)
    }
}

function addImages(array) {
    for (const i of array) {
        let image = document.createElement("img")
        image.src = `${i}`
        let width = screen.width;
        image.height = width/10
        image.width = width/10

        let imageDiv = document.getElementById("dog-image-container")
        imageDiv.appendChild(image)
    }
}

function addBreeds(object) {
    for (const i in object) {
        let listDiv = document.getElementById("dog-breeds")
        let breed = document.createElement("li")
        breed.innerHTML = `${i}`
        breed.addEventListener("click", (x) => {
            breed.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
        })

        let breedList = document.getElementById("dog-breeds")
        breedList.appendChild(breed)
    }
}

