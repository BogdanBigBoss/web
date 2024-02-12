setTimeout(() => {
  console.log(1);
}, 0);
let p = new Promise((resolve, reject) => {
  console.log(2);
  resolve();
});
p.then(function () {
  console.log(3);
});
console.log(4);

alert("Hello!");
