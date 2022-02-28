// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const container = document.getElementById('dog-image-container')
let breedArray = []

// on page load, fetches image from URL
fetch(imgUrl) //make fetch request
.then(resp => resp.json()) //turn it into json
.then(images => { // receives back the resp data and executes on it (append to DOM)
    const imgs = images.message 
    //take the array of images
    //turn it into image elemets
    let imgsArray = imgs.map((img => { //map will go in and modify each element and return a new array
        let i = `<img src=${img}>` // interpolating each img in the array 
        return i
    }))
    //append each image element to the DOM
    imgsArray.forEach(element => {
        container.innerHTML += element
    });
}) 

//Challenge 2  
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ulContainer = document.getElementById("dog-breeds")

function getBreeds() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(breeds => {
        breedArray = Object.keys(breeds.message) // taking our breeds obj and making it an array bu using object.keys method
        let breedList = createLiElements(breedArray)
        appendBreeds(breedList)
    })
}

function createLiElements(breedArray) {
    return breedArray.map((breed) => {
        let li = `<li>${breed}</li>`
        console.log(li)
        return li
    })
}

function appendBreeds(breedList) {
    breedList.forEach(element => {
        ulContainer.innerHTML += element
    })
}

getBreeds();

// challenge 3
//when the user clicks on any one of the `<li>`s, the font color of that `<li>` changes.
// 1. grab the element 
// 2. add an event listener 
// 3. change color on click with function

ulContainer.addEventListener('click', handleClick)

function handleClick(e) {
    event.target.style.color = 'blue'
}

//challenge 4

const dropDown = document.getElementById('breed-dropdown')
dropDown.addEventListener('change', handleChange)

function handleChange(e) {
    const letter = event.target.value
    //filter out breeds that start with the letter
    let breedChange = breedArray.filter(breed => breed.startsWith(letter)) // returns new array
    //create Li and the append to DOM
    const filteredList = createLiElements(breedChange) // reuses function from challenge 3 - passes in new array
    //clear out ones we don't want listed
    ulContainer.innerHTML = ''
    //append to DOM with function from challenge 3
    appendBreeds(filteredList)
}
