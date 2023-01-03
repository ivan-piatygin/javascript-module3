function countProps(object) {
  let propCount = 0;
  // Change code below this line
  // let properties = [];
  
for (let prop in object) {
  if (object.hasOwnProperty(prop)){
    const properties = Object.keys(object);
    // properties.push(prop);
    propCount = properties.length;
  }
  
}
  // Change code above this line
  return propCount;
}

console.log(countProps({}));
console.log(countProps({ name: "Mango", age: 2 }));
console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));