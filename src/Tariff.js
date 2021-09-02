export default class Tariff {
  constructor(distance, age, weight, tariff) {
    this.distance = distance;
    this.age = age;
    this.weight = weight;
    this.tariff = tariff;
  }

  getPriceString() {
    const price = this._getPrice();
    if (price) {
      return `${this.tariff.name}: ${price} ₽`;
    }
    return;
  }

  _getPrice() {
    const {
      freeWeight,
      discountAge,
      pricePerKm,
      pricePerWeight,
      discount,
      maxWeight,
      name,
      transport,
    } = this.tariff;

    if (this.weight > maxWeight) {
      console.log(
        `${transport}, тариф ${name}: Превышен максимально допустимый вес багажа`
      );
      return;
    } else {
      const distancePrice = this.distance * pricePerKm;
      const laggagePrice =
        freeWeight !== 0
          ? this.weight <= freeWeight
            ? 0
            : this.weight * pricePerWeight
          : 0;
      const finalPrice =
        discountAge &&
        (this.age < discountAge
          ? distancePrice * (1 - discount)
          : distancePrice) + laggagePrice;
      return Math.round(finalPrice);
    }
  }
}
