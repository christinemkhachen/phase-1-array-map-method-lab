const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];
//the array above has 9 elements, which are strings. aka "blah"

let titleCased = (input) => {
  return tutorials.map((line) => {
    //the .split(a seperator string belongs here yo) method takes a string and seprates it into an array. It breaks the string into idividiaj elements
    //example "what does the this keyword mean?.split()will return ["what, "does", etc...]
    let words = line.split(" ");
    let capitalizedWords = words.map(
      //We can use bracket notation to grab the first letter
      (word) => word[0].toUpperCase() + word.slice(1)
    );

    let result = capitalizedWords.join(" ");
    return result;
  });
};
