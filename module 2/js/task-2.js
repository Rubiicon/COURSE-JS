const calculateEngravingPrice = function (message, pricePerWord) {
  let array = message.split(" ");
  console.log(array.length * pricePerWord);
};

calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10);
calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40);
calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20);