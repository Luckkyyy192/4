let myImage = document.querySelector('img');
let catImages = [
    '123.jpg',
    '234.jpg',
    '33.jpg',
];
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
myImage.onclick = function() {
    let randomCatImage = getRandomElement(catImages); 
    myImage.setAttribute('src', 'images/' + randomCatImage); 
}
