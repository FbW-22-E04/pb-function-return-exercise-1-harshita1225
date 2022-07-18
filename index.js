//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  const capStr = words.join(" ");
  return capStr;
}

console.log(uppercase("the quick brown fox"));

// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(countryname) {
  longestWord = [];
  for (let i = 0; i < countryname.length; i++) {
    if (countryname[i].length >= longestWord.length) {
      longestWord = countryname[i];
    }
  }
  return longestWord;
}

console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
