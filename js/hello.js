"use strict";
// function greeter(person: string) {
//     return "Hello, " + person;
// }
var _a;
// let a = 5;
// let b = 10;
// let c = a + b;
// // let user = "Jane User";
// document.body.textContent = c.toString();
// // document.body.textContent = greeter(user);
function Összeadás(a, b) {
    return a + b;
}
function Kivonás(a, b) {
    return a - b;
}
function Számolás() {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var plusz = document.getElementById("plusz").checked;
    var c;
    if (plusz === true) {
        c = Összeadás(a, b);
    }
    else {
        c = Kivonás(a, b);
    }
    document.getElementById("c").value = c.toString();
}
(_a = document.getElementById("számolás")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", Számolás);
