const Title = document.querySelector(".step-title");
const Desc = document.querySelector(".step-desc");
const Img = document.querySelector(".technology-pic");

const steps = document.querySelectorAll(".step");
const circles = document.querySelectorAll(".step-circle");

console.log(steps);

const firstStep = {
	imgPath: "../../dist/img/technology/image-launch-vehicle-portrait.jpg",
	mobileImgPath: "dist/img/technology/image-launch-vehicle-landscape.jpg",
	stepTitle: "Launch vehicle",
	stepDesc: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a 
    payload from Earth's surface to space, usually to Earth orbit or beyond. Our 
    WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, 
    it's quite an awe-inspiring sight on the launch pad!`,
};

const secondStep = {
	imgPath: "../../dist/img/technology/image-space-capsule-portrait.jpg",
	mobileImgPath: "dist/img/technology/image-space-capsule-landscape.jpg",
	stepTitle: "Space capsule",
	stepDesc: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry 
    capsule to reenter the Earth's atmosphere without wings. Our capsule is where 
    you'll spend your time during the flight. It includes a space gym, cinema, 
    and plenty of other activities to keep you entertained.`,
};

const thirdStep = {
	imgPath: "../../dist/img/technology/image-spaceport-portrait.jpg",
	mobileImgPath: "dist/img/technology/image-spaceport-landscape.jpg",
	stepTitle: "Spaceport",
	stepDesc: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, 
    by analogy to the seaport for ships or airport for aircraft. Based in the 
    famous Cape Canaveral, our spaceport is ideally situated to take advantage 
    of the Earth’s rotation for launch.`,
};

const changeValues = (step) => {
	if (window.screen.width > 1024) {
		Img.style.content = `url(${step.imgPath})`;
	} else {
		Img.setAttribute("src", step.mobileImgPath);
	}
	Title.textContent = step.stepTitle;
	Desc.textContent = step.stepDesc;
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
