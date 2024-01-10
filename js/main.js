// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей

let сalculator = {
  read() {
    this.firstNumber = Number.parseFloat(prompt('Введіть перше число', 0));
    this.secondNumber = Number.parseFloat(prompt('Введіть друге число', 0));
  },

  sum() {
    return this.firstNumber + this.secondNumber;
  },

  mul() {
    return this.firstNumber * this.secondNumber;
  }
}

сalculator.read();

console.log(`First number - ${сalculator.firstNumber}`);
console.log(`Second number - ${сalculator.secondNumber}`);

console.log(`sum() = ${сalculator.sum()}`); 
alert('sum() - ' + сalculator.sum());

console.log(`mul() = ${сalculator.mul()}`);
alert('mul() - ' + сalculator.mul());
