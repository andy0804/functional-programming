// Immutability: In the functional world, once data is created, it remains unchanged. This not only
// simplifies reasoning but also plays well with parallel processing. Here's a taste of immutability:

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];

// In this example,
//  we're creating a new array newArray by spreading the elements
//   of the originalArray and adding a new element 4. The originalArray remains unchanged.