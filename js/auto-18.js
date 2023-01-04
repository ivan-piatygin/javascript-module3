// Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту. Функція шукає об'єкт продукту з таким ім'ям (властивість name) в масиві products і повертає його ціну (властивість price). Якщо продукт з такою назвою не знайдений, функція повинна повертати null.

const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function getProductPrice(productName) {
    // Change code below this line
  let ticket = 0;  
  
    for (let product of products) {
        if (productName === product.name) {
            ticket += product.price * product.quantity;
        }
      return ticket;
    }
   

    // Change code above this line
  }
  
  console.log(getProductPrice("Radar"));
  console.log(getProductPrice("Grip"));
  console.log(getProductPrice("Scanner"));
  console.log(getProductPrice("Droid"));
  console.log(getProductPrice("Engine"));