const cards = [
	{
		image: "gambar1",
		isFlipped: false,
		correct: false,
		id: 1,
	},
	{
		image: "gambar2",
		isFlipped: false,
		correct: false,
		id: 2,
	},
	{
		image: "gambar3",
		isFlipped: false,
		correct: false,
		id: 3,
	},
	{
		image: "gambar4",
		isFlipped: false,
		correct: false,
		id: 4,
	},
	{
		image: "gambar5",
		isFlipped: false,
		correct: false,
		id: 5,
	},
	{
		image: "gambar6",
		isFlipped: false,
		correct: false,
		id: 6,
	},
	{
		image: "gambar1",
		isFlipped: false,
		correct: false,
		id: 7,
	},
	{
		image: "gambar2",
		isFlipped: false,
		correct: false,
		id: 8,
	},
	{
		image: "gambar3",
		isFlipped: false,
		correct: false,
		id: 9,
	},
	{
		image: "gambar4",
		isFlipped: false,
		correct: false,
		id: 10,
	},
	{
		image: "gambar5",
		isFlipped: false,
		correct: false,
		id: 11,
	},
	{
		image: "gambar6",
		isFlipped: false,
		correct: false,
		id: 12,
	},
];

const main = document.getElementById("main");

function flippedCards() {
	return cards.filter((value) => value.isFlipped && !value.correct);
}

function show() {
	const card = document.getElementById("main");
	card.innerHTML = "";
	cards.forEach((value) => {
		const cardContainer = document.createElement("div");
		const card = document.createElement("div");
		cardContainer.classList.add("card-container");
		card.innerHTML = `
			<div class="card-front">
				<img src="assets/${value.image}.jpg" alt="">
			</div>
			<div class="card-back">G</div>
		`;
		card.classList.add("card");
		main.appendChild(cardContainer);
		cardContainer.appendChild(card);

		if (value.correct || value.isFlipped) {
			card.classList.add("flip");
		}

		if (value.isFlipped && !value.correct) {
			setTimeout(() => {
				card.classList.remove("flip");
				cards.map((value) => {
					if (value.isFlipped && !value.correct) {
						value.isFlipped = false;
					}
				});
			}, 500);
		}

		card.onclick = () => {
			if (!value.isFlipped && flippedCards().length < 2) {
				value.isFlipped = !value.isFlipped;
				if (value.isFlipped) {
					card.classList.toggle("flip");
				}

				setTimeout(() => {
					if (flippedCards().length === 2) {
						if (flippedCards()[0].image == flippedCards()[1].image) {
							cards.map((card) => {
								if (flippedCards()[0].image == card.image) {
									card.correct = true;
									card.isFlipped = true;
									show();
								}
							});
						}
						if (flippedCards()[0].image != flippedCards()[1].image) {
							cards.map((card) => {
								if (flippedCards()[0].id == card.id) {
									card.isFlipped = true;
									card.correct = false;
								}
								show();
							});
							flippedCards().slice(0, flippedCards().length);
						}
					}
				}, 800);
			}
		};
	});
}

show();
