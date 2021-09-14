export const tariffs = [
  {
    transport: "plane",
    tariff: "econom",
    name: "Эконом",
    pricePerKm: 4,
    freeWeight: 5,
    pricePerWeight: 4000,
    maxWeight: 20,
    discountAge: 0,
    discount: 0,
  },
  {
    transport: "plane",
    tariff: "advance",
    name: "Продвинутый",
    pricePerKm: 8,
    freeWeight: 20,
    pricePerWeight: 5000,
    maxWeight: 50,
    discountAge: 7,
    discount: 0.3,
  },
  {
    transport: "plane",
    tariff: "lux",
    name: "Люкс",
    pricePerKm: 15,
    freeWeight: 0,
    pricePerWeight: 0,
    maxWeight: 50,
    discountAge: 16,
    discount: 0.3,
  },
  {
    transport: "train",
    tariff: "econom",
    name: "Эконом",
    pricePerKm: 0.5,
    freeWeight: 15,
    pricePerWeight: 50,
    maxWeight: 50,
    discountAge: 5,
    discount: 0.5,
  },
  {
    transport: "train",
    tariff: "advance",
    name: "Продвинутый",
    pricePerKm: 2,
    freeWeight: 20,
    pricePerWeight: 50,
    maxWeight: 60,
    discountAge: 8,
    discount: 0.3,
  },
  {
    transport: "train",
    tariff: "lux",
    name: "Люкс",
    pricePerKm: 4,
    freeWeight: 0,
    pricePerWeight: 0,
    maxWeight: 60,
    discountAge: 16,
    discount: 0.2,
  },
];

export const distanceInput = document.querySelector("input[name=distance]");
export const ageInput = document.querySelector("input[name=age]");
export const weightInput = document.querySelector("input[name=weight]");
export const listPlane = document.querySelector("#list-plane");
export const listTrain = document.querySelector("#list-train");
export const noResults = document.querySelector(".results__no-available");
export const form = document.querySelector(".form");
