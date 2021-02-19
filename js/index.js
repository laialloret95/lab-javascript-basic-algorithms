// Iteration 1: Names and Input
const hacker1 ="Mortadelo" //drivers
const hacker2 ="Filemon" //navigator

console.log("The driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals
function longestName(name1,name2) {
	if(hacker1.length > hacker2.length) {
		console.log("The driver has the longest name, it has " + hacker1.length + " characters")
	} else if (hacker2.length > hacker1.length) {
		console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
	} else {
		console.log("Wow, you both have equally long names, XX characters!")
	}
}

console.log(longestName(hacker1,hacker2));

// ITERATION 3 - LOOPS

// characters of driver's name, separated by space and in capitals
function uppercaseWithSpace(name) {
	let uppercaseName = '';
	for(i = 0; i < name.length; i++){
		uppercaseName+= name[i].toUpperCase() + ' ';
	}
	return uppercaseName
}

console.log(uppercaseWithSpace(hacker1));

// characters of navigators name, in reverse order
function reverseOrder(name) {
	let reversedName = ''; 
	for(i = name.length - 1; i >= 0; i--){
		reversedName += name[i];
	}
	return reversedName
}

console.log(reverseOrder(hacker2));

// lexicographic order
function lexicographicOrder(name1,name2) {
	if (name1 < name2) {
		console.log("The driver's name goes first");
	} else if (name1 > name2) {
		console.log("Yo, the navigator goes first definitely.");
	} else {
		console.log("What?! You both have the same name?");
	}
}
console.log(lexicographicOrder(hacker1,hacker2));

// BONUS 1

// count # of words in the string.
function WordCount(text) {
    let totalWords = 0;
    for (let i = 0; i < text.length; i++)
      if (text[i] === " ") { // space found
        totalWords += 1; // add 1 to totalWords
        }
    totalWords += 1; // add 1 to totalWords to account for first word
  
      return totalWords
  }
  
  console.log(WordCount(text));

  //count # times the Latin word "et" appears.