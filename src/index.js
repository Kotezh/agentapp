import {
  tariffs,
  distanceInput,
  ageInput,
  weightInput,
  listPlane,
  listTrain,
  noResults,
  form
} from "./constants.js";
import Element from "./Element.js";
import Tariff from "./Tariff.js";

form.addEventListener("submit", submitForm);

function submitForm(evt) {
  evt.preventDefault();

  noResults.classList.add("visually-hidden");

  const distance = distanceInput.value;
  const age = ageInput.value;
  const weight = weightInput.value || 0;

  Array.from(listPlane.children).forEach((e) => listPlane.removeChild(e));
  Array.from(listTrain.children).forEach((e) => listTrain.removeChild(e));

  let hasNoResult = true;
  tariffs.forEach((tariff) => {
    const resultTariff = new Tariff(distance, age, weight, tariff);
    const priceString = resultTariff.getPriceString();

    if (priceString) {
      hasNoResult = false;
      const element = new Element("#new-element", priceString);
      const item = element.generateElement();
      if (tariff.transport === "plane") {
        listPlane.append(item);
      } else if (tariff.transport === "train") {
        listTrain.append(item);
      }
    }
  });

  if (hasNoResult) {
    noResults.classList.remove("visually-hidden");
  }
}
