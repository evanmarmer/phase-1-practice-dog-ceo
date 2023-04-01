document.addEventListener("DOMContentLoaded", function(){

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

let dogImgContainer = document.querySelector('#dog-image-container')

function getImages(){
fetch(imgUrl)
.then(res => res.json())
.then(data => displayImages(data.message))
}
getImages()

function displayImages(dogImages){
// console.log(dogImages)
    dogImages.forEach(dogImage => {
    const image = document.createElement('img')
      image.src = dogImage  
      dogImgContainer.append(image)
    })
}
})

// const breed = document.createElement('li')

document.addEventListener("DOMContentLoaded", function(){

    const breedUrl = "https://dog.ceo/api/breeds/list/all";

    let dogBreedContainer = document.querySelector('#dog-breeds')
    let breeds 

    function getBreeds(){
       fetch(breedUrl)
       .then(res => res.json())
       .then(data => {
        breeds = Object.keys(data.message)
        displayBreeds(Object.keys(data.message))
    })
    }
    getBreeds()

    function displayBreeds(dogBreeds){
        // console.log(dogBreeds)
        dogBreeds.forEach(dogBreed => {
            const breed = document.createElement('li')
            breed.textContent = dogBreed
            breed.id = dogBreed
            dogBreedContainer.append(breed)
            // console.log(breed)
            breed.addEventListener("click", function onClick(event) {
                // document.body.style.color = "red"
                // this makes everything red, not just one
                event.target.style.color = "red"
            })
        })
    }
    const dropdown = document.querySelector('select')

    dropdown.addEventListener('change', filterBreeds)

function filterBreeds(event){
    let filteredBreeds = breeds.filter (breed => breed.charAt(0) === event.target.value) 
    // console.log(filteredBreeds)
    dogBreedContainer.innerHTML = ""
    displayBreeds(filteredBreeds)
}
})




