const title = document.querySelector(".step-title");
const desc = document.querySelector(".step-desc");
const img = document.querySelector(".technology-pic");

const steps = document.querySelectorAll(".step");
const circles = document.querySelectorAll(".step-circle");


const firstStep = {
	ImgPath: "dist/img/technology/image-launch-vehicle-portrait.jpg",
	altImg: "Rocket launching",
	mobileImgPath: "dist/img/technology/image-launch-vehicle-landscape.jpg",
	stepTitle: "Launch vehicle",
	stepDesc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`,
};

const secondStep = {
	ImgPath: "dist/img/technology/image-space-capsule-portrait.jpg",
	altImg: "open space capsule in the space",
	mobileImgPath: "dist/img/technology/image-space-capsule-landscape.jpg",
	stepTitle: "Space capsule",
	stepDesc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`,
};

const thirdStep = {
	ImgPath: "dist/img/technology/image-spaceport-portrait.jpg",
	altImg: "spaceport with rocket in it",
	mobileImgPath: "dist/img/technology/image-spaceport-landscape.jpg",
	stepTitle: "Spaceport",
	stepDesc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.`,
};

const changeValues = (step) => {
	if (window.innerWidth > 1024) {
		img.setAttribute('src', step.ImgPath)
	} else {
		img.setAttribute("src", step.mobileImgPath);
	}
	img.setAttribute('alt', step.altImg)
	title.textContent = step.stepTitle;
	desc.textContent = step.stepDesc;
};

steps.forEach(function (item) {
	item.addEventListener("click", (e) => {
		circles.forEach(function (item) {
			item.classList.remove("step-circle--active");
		});

		let circle = e.target.querySelector(".step-circle");
		circle.classList.add("step-circle--active");

		if (e.target.classList.contains("step-one")) {
			changeValues(firstStep);
		} else if (e.target.classList.contains("step-two")) {
			changeValues(secondStep);
		} else if (e.target.classList.contains("step-three")) {
			changeValues(thirdStep);
		}
	});
});


document.addEventListener('DOMContentLoaded', () => {
	if (window.innerWidth > 1200) {
		img.setAttribute('src', firstStep.ImgPath)
	}
})