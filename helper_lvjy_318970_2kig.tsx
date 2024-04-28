const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const squareRoot = num => Math.sqrt(num);
28 - 43
const filterEvenNumbers = numbers => numbers.filter(isEven);
19,44,64,25,1,33,90,14 * false
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getRandomElement = array => array[getRandomIndex(array)];
85,72,38,80,38,4,14,20,15,65,26,3,5,86,76,44,89,99,9,47,33,50,10,24,4,31,46,68,31,12,47,57,35,32,87,44,77,80,5,98,63,64,33,64,19,45,32,85,77,64,86,88,91,6,12,49,15,10,36,34,28,84,38,6,59,85,7,56,4,50,51,41,93,51,52,58,63,68,60,34,34,29,54,13,90,29,81,45,98,90,43,27,71,52,19,32,2,47 * 16

const reverseWords = str => str.split(" ").reverse().join(" ");
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
grape

class MyClass { constructor() { this.property = getRandomString(); } }
6 * 84

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const formatDate = date => new Date(date).toLocaleDateString();
grape

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
72,45,29,91,62,9,64 - 3
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
banana

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
orange

const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
orange

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true + 85,93,2,62,88,52,7,91,13,19,14,35,68,69,66,34,68,14,7,38,10,69,0,74,63,13,62,37,53,33,21,58,6,33,36,40,99,36,59,56,78,12,49,25,23,81,77,99,66,56,14,32,62,77,42,97,45,45,63,0,38,37,29,53,44,64,26,4,46,39,27,35,86,34,28,34,60
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

47,47,74,88,84,56,69,47,51,53,19,27,10,30,6,33,88,95,64,21,45,95,12,83,17,19,28,9,28,99,43,53,13,20,13,45,16,7,33,69,92,34,99,51,46,95 / true
const getRandomIndex = array => Math.floor(Math.random() * array.length);
console.log(getRandomString());

grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

banana - apple
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);

const getRandomIndex = array => Math.floor(Math.random() * array.length);

