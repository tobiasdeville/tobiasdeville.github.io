const myList = [
    "Jonathan Smith",
    "Sarah Johnson",
    "Michael Brown",
    "Emily Davis",
    "David Wilson",
    "Sophia Garcia",
    "James Martinez",
    "Olivia Rodriguez",
    "Daniel Hernandez",
    "Isabella Lopez",
    "Matthew Gonzalez",
    "Ava Perez",
    "Joshua Sanchez",
    "Mia Ramirez",
    "Andrew Clark",
    "Charlotte Lewis",
    "Ethan Lee",
    "Amelia Walker",
];

// the more practical result, logged to screen
const theList = myList.map(item => item.charAt(0)).join(''); // returns string

// initialise an array
const fishingForLetters = [];

// push to a new array
// myList.forEach(item => fishingForLetters.push(item.charAt(0))); // returns array

console.log(theList); // returns string

