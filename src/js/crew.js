const crewImg = document.querySelector('.crew-img')
const jobTitle = document.querySelector('.job-title')
const fullName = document.querySelector('.full-name')
const personDesc = document.querySelector('.person-desc')

const dots = document.querySelectorAll('.person')

const firstPerson = {
    imgPath: '../../dist/img/crew/image-douglas-hurley.webp',
    jobTitle: 'Commander',
    fullName: 'Douglas Hurley',
    personDesc: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`
}
const secondPerson = {
    imgPath: '../../dist/img/crew/image-victor-glover.webp',
    jobTitle: 'Pilot',
    fullName: 'Victor Glover',
    personDesc: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer. `
}
const thirdPerson = {
    imgPath: '../../dist/img/crew/image-mark-shuttleworth.webp',
    jobTitle: 'Mission Specialist',
    fullName: 'Mark Shuttleworth',
    personDesc: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`
}

const fourthPerson = {
    imgPath: '../../dist/img/crew/image-anousheh-ansari.webp',
    jobTitle: 'Flight Engineer',
    fullName: 'Anousheh Ansari',
    personDesc: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`
}


dots.forEach(function(item) {
    item.addEventListener('click', e => {
        console.log(e.target);
    })
})


