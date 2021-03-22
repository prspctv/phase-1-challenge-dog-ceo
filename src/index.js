console.log('%c HI', 'color: firebrick')

let onpageload = document.querySelector("onpage")

document.addEventListener('DOMContentLoaded',function (){
    dogimages();
    dogbreeds();
})

function dogimages(){
const imgURL = "https://dog.ceo/api/breeds/image/random/4" 
fetch(imgURL)
.then(res => res.json())
.then(function(dogimages) {
console.log (dogimages)
});
}

function dogbreeds(){
const breedURL = 'https://dog.ceo/api/breeds/list/all'
fetch(breedURL)
.then(res => res.json())
.then(function(dogbreeds) {
    console.log (dogbreeds)
});
}