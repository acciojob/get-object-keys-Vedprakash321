//your JS code here. If required.
// Create an object called student with a property called name
const student = {
  name: "YourName" // Replace with the desired name
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Now you can use the getKeys method on the student object
const keysArray = student.getKeys();
console.log(keysArray); // Output: ["name"]
