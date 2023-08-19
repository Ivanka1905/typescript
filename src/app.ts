let age: number;
let name1: string;
let toggle: boolean;
let empty: null;
let notInitialize: undefined;
function callback(a: number): number {
  return 100 + a;
}

age = 50;
name1 = "Max";
toggle = true;
empty = null;
notInitialize = undefined;
callback(10);
// ---2
let anything: any;
anything = -20;
anything = 'Text';
anything = {};
// ---3
let some:unknown;
some = 'Text';

let str: string;
if (typeof some === "string") {
  str = some;
}
// ---4
let person: [string, number]
person = ['Max', 21];
// ---5
enum Task { LOADING, READY };
const page = {
  load: Task.READY
}
if (page.load === Task.LOADING) {
  console.log("Сторінка завантажується")
}
if (page.load === Task.READY) {
  console.log("Сторінка завантажена")
}
// ---6
let union: string | number;
let literal: 'enable' | 'disable';

// ---7
function showMessage(message: string): void {
  console.log(message);
};
function calc(num1: number, num2: number): number {
  return num1 + num2;
};

function customError(): never {
  throw new Error('Error');
};
// ---8
type Page = {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: Date,
    updateAt: Date,
  }
}
const page1: Page = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: Page = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}