//create you curried function here with name pizzaPricing.

function pizzaPricing(size) {
  const basePrice = {
    small: 8.0,
    medium: 10.0,
    large: 12.0,
  };

  return function (selectedToppings) {
    return function (quantity) {
      const toppingsCost = selectedToppings.length * 1.5;
      const totalPrice = basePrice[size] + toppingsCost;
      return (totalPrice * quantity).toFixed(2);
    };
  };
}

const smallPizzaPrice = pizzaPricing("large")(["bacon", "cheese"])(1);
console.log(smallPizzaPrice);
