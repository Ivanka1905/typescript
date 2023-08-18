var age;
var name1;
var toggle;
var empty;
var notInitialize;
function callback(a) {
    return 100 + a;
}
age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback(10);
// ---2
var anything;
anything = -20;
anything = 'Text';
anything = {};
// ---3
var some;
some = 'Text';
var str;
if (typeof some === "string") {
    str = some;
}
// ---4
var person;
person = ['Max', 21];
// ---5
var Task;
(function (Task) {
    Task[Task["LOADING"] = 0] = "LOADING";
    Task[Task["READY"] = 1] = "READY";
})(Task || (Task = {}));
// ---6
var union;
var literal;
// ---7
function showMessage(message) {
    console.log(message);
}
;
function calc(num1, num2) {
    return num1 + num2;
}
;
function customError() {
    throw new Error('Error');
}
;
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
