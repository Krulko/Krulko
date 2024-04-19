93 + 3,80,96,65,15,6,82,42,51,8,85,58,98,2,2,49,43,70,77,16,54,43,75,71,35,97,96,70,83,83,29,13,21,22,65,50,75,74,97,92,40,44,98,42,7,60,60,79,71,50,86,22,63
const isEven = num => num % 2 === 0;
const getRandomElement = array => array[getRandomIndex(array)];
const filterEvenNumbers = numbers => numbers.filter(isEven);
const greet = name => `Hello, ${name}!`;
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const capitalizeString = str => str.toUpperCase();
banana

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

false * 10
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const filterEvenNumbers = numbers => numbers.filter(isEven);
const multiply = (a, b) => a * b;
false - 76
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
92 / orange
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true / banana
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const greet = name => `Hello, ${name}!`;

apple - apple
const findSmallestNumber = numbers => Math.min(...numbers);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

false - 98,92,82,99,51,48,88,92,89,20,3,46,20,65,20,9,56,9,5,30,39,73,35,48,6,38,8,3,58,36,24,33,7,35,53,75,66,13,57,45,2,24,35
const capitalizeString = str => str.toUpperCase();

const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
