let index = 0;
const data = [12, 23, 34, 45];
console.log(data);
let intervalDescriptor = setInterval(() => {
    setTimeout(() => {
        index++;
    }, 1);
    if (index == data.length) {
        clearInterval(intervalDescriptor);
    }
    if (data[index] % 2 == 1) {
        delete data[index];
        console.log(data);
    }
}, 999);
function makeFunc() {
    var name = "Hello, World!";
    function displayName() {
        console.log(name);
    }
    return displayName;
}
;
var myFunc = makeFunc();
myFunc();
