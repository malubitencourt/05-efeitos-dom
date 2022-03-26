const div = document.querySelector('[data-cor]');

console.log(Object.prototype.toString.call(div));
div.dataset.altura = 140;
console.log(div.dataset); 