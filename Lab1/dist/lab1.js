// 2) Реализуйте стрелочную функцию, возвращающую строку,
//  составленную (см. конкатенация) из 2х чисел, передаваемых в качестве параметров. 
const func = (a, b) => "" + a + b;
console.log(func(1, 2));
// 3) Выполните создание объектов – констант (const) и переменных (let) 
// с указанием различных встроенных и специальных типов. Название переменной может быть любым.
// Количество объектов не более 8.
let a = 1;
let b = "1";
let c = [1, 'a'];
var Pet;
(function (Pet) {
    Pet[Pet["Dog"] = 0] = "Dog";
    Pet[Pet["Cat"] = 1] = "Cat";
})(Pet || (Pet = {}));
;
let d = Pet.Cat;
let e = true;
const f = [1, 2, 3, 4, 5];
let g = new Object();
const h = { first: 1, second: "" };
const data = {
    id: 1,
    name: "Василий",
};
console.log(JSON.stringify(data));
