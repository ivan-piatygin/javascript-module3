const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];
  
  function calculateTotalPrice(productName) {
    // Change code below this line
      let totalPrice = 0;
    
    for (let product of products) {
  
      if (productName === product.name) {
         totalPrice = product.price * product.quantity;
        
      }
   
  
    // Change code above this line
  }
    return totalPrice;
  }
  console.log(calculateTotalPrice("Blaster"));
  console.log(calculateTotalPrice("Radar"));
  console.log(calculateTotalPrice("Droid"));
  console.log(calculateTotalPrice("Grip"));
  console.log(calculateTotalPrice("Scanner"));