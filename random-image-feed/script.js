const container = document.querySelector(".container");

const picsumURL = "https://picsum.photos/";

const rows = 10;

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement("img");
	img.src = `${picsumURL}${getRandomSize()}`;
	container.appendChild(img);
}

function getRandomSize() {
	return `${getRandomNumber()}/${getRandomNumber()}`;
}

function getRandomNumber() {
	return Math.floor(Math.random() * 10) + 300;
}
