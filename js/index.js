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
 const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sapien eros, 
            congue eu massa id, dignissim vestibulum mauris. Mauris mollis imperdiet euismod. 
            Maecenas quis dapibus arcu. Cras diam risus, vehicula vitae viverra id, vehicula quis metus. 
            Nulla facilisi. Cras eget felis id nisl sollicitudin rutrum. Nam ornare ipsum elit, 
            eget tempus eros tempor in. Integer dictum ex a laoreet pretium.

            Sed mattis vehicula mi, in feugiat leo ornare ut. Suspendisse pharetra aliquam leo eget semper. 
            Donec vestibulum risus quis pretium laoreet. Maecenas ut magna leo. Pellentesque aliquet, 
            ligula vitae condimentum gravida, erat justo sollicitudin ex, at lobortis nibh augue eu nulla. 
            Curabitur lobortis, velit ut mollis pulvinar, magna lacus luctus sem, quis porttitor felis urna a dolor. Sed sollicitudin, urna quis ullamcorper porta, odio purus ornare libero, non malesuada nisi nisl non tortor. Sed eget vehicula ipsum. Vivamus sit amet mauris convallis, accumsan quam ac, luctus sem. Nam ac ipsum efficitur, blandit augue eu, interdum ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis pretium arcu id ipsum suscipit, ut tincidunt nulla tempus. Aliquam feugiat id augue et maximus. Nulla at bibendum magna.
            
            Etiam non faucibus elit. Orci varius natoque penatibus et magnis dis parturient montes, 
            nascetur ridiculus mus. Mauris vitae erat sit amet eros iaculis condimentum non sed turpis. 
            Ut blandit metus quis ligula interdum, vel tempor diam consectetur. Mauris dictum laoreet justo, 
            ac molestie massa. Quisque at dui at nunc sollicitudin pulvinar. Phasellus vitae rhoncus lorem. 
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; 
            Aliquam massa lacus, commodo at suscipit ac, laoreet scelerisque nulla. Vivamus sit amet enim at 
            ipsum vestibulum efficitur. Nulla eleifend accumsan lorem, congue pharetra orci posuere sit amet. 
            Vestibulum porttitor, nisi id placerat dapibus, augue lectus cursus risus, nec suscipit justo odio 
            eget eros."

function countCharacter(text,character) {
	const strWithoutSpecialChar = text.replace(/[^a-zA-Z ]/g, "") // Regex to delete special characters such as commas
	const wordArray = strWithoutSpecialChar.split(" ") // Adding words in wordArray

	let count = 0;
	for (let i = 0; i < wordArray.length; i++) {
		let lowerCaseWord = wordArray[i].toLowerCase()
		if (lowerCaseWord === (character)) {
			count++;
		}
	}
	return count
}
console.log(countCharacter(text,'et'));

// BONUS 2 - Palindrom

const phraseToCheck = "A man, a plan, a canal, Panama!"


function formatString(phrase) {
	const lowerCase = phrase.toLocaleLowerCase()
	const withoutSpecialCharAndSpaces = lowerCase.replace(/[^A-Z0-9]/ig, "") //delete special characters and spaces
	return withoutSpecialCharAndSpaces
}

function reverseOrder(phrase) {
	const formattedPhrase = formatString(phrase);
	let reversedName = ''; 
	for(i = formattedPhrase.length - 1; i >= 0; i--){
		reversedName += formattedPhrase[i];
	}
	return reversedName
}

function palindrome(phrase) {
	if (reverseOrder(phrase) === formatString(phrase)) {
		console.log(`This phrase is a Palindrome!`);
	} else {
		console.log(`This phrase is not a Palindrome :(`)
	}
}

console.log(palindrome(phraseToCheck));