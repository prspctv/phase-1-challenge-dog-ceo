console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", function(){
    dogImages()
    dogBreeds()
    })
    function dogImages() {
        return fetch(imgUrl)
    .then(res => res.json())
    .then(result => {
        result.message.forEach(image => addImage(image))
    })
}
function addImage(breedUrl) {
    const container = document.getElementById("dog-image-container")
    const newImage = document.createElement('img')
    newImage.src = breedUrl
    newImage.alt = "dog"
    container.appendChild(newImage)
    
}  
  function dogBreeds() {
    return fetch(breedUrl)
      .then(resp => resp.json())
      .then(result => {
        const breeds = Object.keys(result.message)
        addBreeds(breeds)
    })
}
  function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds")
    breeds.forEach(breed => {
      const li = document.createElement("li")
      li.innerText = breed
      ul.appendChild(li)
    
      li.addEventListener("click", function(event) {
        event.target.style.color = "green"
      })
    })
}
  
