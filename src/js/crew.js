const crewImg = document.querySelector('.crew-img')
const job = document.querySelector('.job-title')
const Name = document.querySelector('.full-name')
const Desc = document.querySelector('.person-desc')

const dots = document.querySelectorAll('.person')
const circles = document.querySelectorAll('.circle')


const firstPerson = {
    imgPath: 'dist/img/crew/image-douglas-hurley.webp',
    jobTitle: 'Commander',
    fullName: 'Douglas Hurley',
    personDesc: `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
    and former NASA astronaut. He launched into space for the third time as 
    commander of Crew Dragon Demo-2.`
}
const secondPerson = {
    imgPath: 'dist/img/crew/image-victor-glover.webp',
    jobTitle: 'Pilot',
    fullName: 'Victor Glover',
    personDesc: `Pilot on the first operational flight of the SpaceX Crew Dragon to the 
    International Space Station. Glover is a commander in the U.S. Navy where 
    he pilots an F/A-18.He was a crew member of Expedition 64, and served as a 
    station systems flight engineer. `
}
const thirdPerson = {
    imgPath: 'dist/img/crew/image-mark-shuttleworth.webp',
    jobTitle: 'Mission Specialist',
    fullName: 'Mark Shuttleworth',
    personDesc: `Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
    the Linux-based Ubuntu operating system. Shuttleworth became the first South 
    African to travel to space as a space tourist.`
}

const fourthPerson = {
    imgPath: 'dist/img/crew/image-anousheh-ansari.webp',
    jobTitle: 'Flight Engineer',
    fullName: 'Anousheh Ansari',
    personDesc: `Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
    Ansari was the fourth self-funded space tourist, the first self-funded woman to 
    fly to the ISS, and the first Iranian in space.`
}


const changeElements = person => {
    crewImg.setAttribute('src', person.imgPath);
    job.textContent = person.jobTitle;
    Name.textContent = person.fullName;
    Desc.textContent = person.personDesc;
}


dots.forEach(function(item) {
    item.addEventListener('click', e => {
        let circle = item.querySelector('.circle')


        // clears all active states
        circles.forEach(function(item) {
            item.classList.remove('circle--active')
        })
        
        // adds active state to the clicked dot
        circle.classList.add('circle--active')

        if (e.target.classList.contains('person-first')) {
            changeElements(firstPerson)
        } else if (e.target.classList.contains('person-second')) {
            changeElements(secondPerson)
        } else if (e.target.classList.contains('person-third')) {
            changeElements(thirdPerson)
        } else if (e.target.classList.contains('person-fourth')) {
            changeElements(fourthPerson)
        }
    })
})


