const byteSize = (str) => {
	function byteSize(str) {
  // Create a Blob object from the input string
  const blob = new Blob([str]);

  // Get the size of the Blob in bytes
  return blob.size;
}

// Test cases
console.log(byteSize('hello world'));     // Output: 11
console.log(byteSize('안녕하세요'));      // Output: 15
console.log(byteSize(''));                // Output: 0

  // write your code here
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
