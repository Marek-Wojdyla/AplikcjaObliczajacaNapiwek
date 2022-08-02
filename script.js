//pobieram odpowiednie elementy

const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const submitButton = document.querySelector(".count");
const pError = document.querySelector(".error");
const pCostInfo = document.querySelector(".cost-info");
const pCost = document.querySelector(".cost");

const validate = () => {
	if (price.value == "" || people.value == "" || tip.value == 0) {
		pError.textContent = "Uzupełnij wszystkie pola";
		pCostInfo.style.display = "none";
	} else {
		pError.textContent = "";
		checkBill();
	}
};

const checkBill = () => {
	const newPrice = parseFloat(price.value);
	const newPeople = parseInt(people.value);
	const newTip = parseFloat(tip.value);

	const finallBill = (newPrice + newPrice * newTip) / newPeople;
	pCostInfo.style.display = "block";
	pCost.textContent = finallBill.toFixed(3);
};

submitButton.addEventListener("click", validate);
