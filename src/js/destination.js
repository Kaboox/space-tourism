const planets = document.querySelectorAll('.planet');
const planetImg = document.querySelector('.planet-image');
const planetName = document.querySelector('.planet-name');
const planetDesc = document.querySelector('.planet-desc');
const travelDist = document.querySelector('.dist-amount');
const travelTime = document.querySelector('.time-amount');

const moon = {
    imgPath : '../../dist/img/destination/image-moon.webp',
    name : 'Moon',
    desc : `See our planet as you’ve never seen it before. A perfect relaxing trip away to help 
    regain perspective and come back refreshed. While you’re there, take in some history 
    by visiting the Luna 2 and Apollo 11 landing sites.`,
    distance : `384,400 km`,
    time : '3 days'
}

const mars = {
    imgPath : '../../dist/img/destination/image-mars.webp',
    name : 'Mars',
    desc : `Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!`,
    distance : `225 mil. km`,
    time : '9 months'
}

const europa = {
    imgPath : '../../dist/img/destination/image-europa.webp',
    name : 'Europa',
    desc : `The smallest of the four Galilean moons orbiting Jupiter, Europa is a 
    winter lover’s dream. With an icy surface, it’s perfect for a bit of 
    ice skating, curling, hockey, or simple relaxation in your snug 
    wintery cabin.`,
    distance : `628 mil. km`,
    time : '3 years'
}

const titan = {
    imgPath : '../../dist/img/destination/image-titan.webp',
    name : 'Titan',
    desc : `The only moon known to have a dense atmosphere other than Earth, Titan 
    is a home away from home (just a few hundred degrees colder!). As a 
    bonus, you get striking views of the Rings of Saturn.`,
    distance : `1.6 bil. km`,
    time : '7 years'
}

const changeElements = (planet) => {
    planetImg.setAttribute('src', planet.imgPath)
    planetName.textContent = planet.name;
    planetDesc.textContent = planet.desc;
    travelDist.textContent = planet.distance;
    travelTime.textContent = planet.time;
}

planets.forEach(function(item) {
    item.addEventListener('click', e => {
        planets.forEach(function(item) {
            let line = item.querySelector('.planet-line')
            line.classList.remove('planet-line--active')
        })
        let line = e.target.querySelector('.planet-line')
        line.classList.add('planet-line--active')

        if (e.target.classList.contains('planet-moon')) {
            changeElements(moon)  
        } else if (e.target.classList.contains('planet-mars')) {
            changeElements(mars)
        } else if (e.target.classList.contains('planet-europa')) {
            changeElements(europa)
        } else if (e.target.classList.contains('planet-titan')) {
            changeElements(titan)
        }
    })
})