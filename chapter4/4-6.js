console.log(Boolean(undefined));  // false;
console.log(Boolean("false"));    // true; null是false NAN是true 
console.log(Boolean(new Object())); // true 空对象也是true