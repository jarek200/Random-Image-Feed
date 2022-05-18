const container = document.querySelector('.container')
const unspalshURL = 'https://source.unsplash.com/random/'
const rows =10

for(let i = 0; i < rows * 3; i++) {
    const img = document.createElement('img')
    img.src = `${unspalshURL}${getRandomSize()}`
    container.appendChild(img)
}

function getRandomSize() {
    return `${getRandomNr()}x${getRandomNr()}`
}

function getRandomNr() {
    return Math.floor(Math.random() * 10) +300
}