/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// quotes array holding 5 quotes

let quotes = [
	{
		quote: "I'm going to make him an offer he can't refuse.",
		source: "Don Corleone",
		year: "1972",
	},
		{
		quote: "Toto, I've got a feeling we're not in Kansas anymore.",
		source: "Dorothy",
		citation: "The Wizard of Oz",
	},
	{
		quote: "Louis, I think this is the beginning of a beautiful friendship.",
		source: "Rick",
		tags: "romance (genre)",
	},
	{
		quote: "As God is my witness, I'll never be hungry again.",
		source: "Scarlett",
		citation: "Gone with the wind",
	},
	{
		quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
		source: "Robin Williams",
		year: "1989",
		tags: "drama (genre)",

	},

];


// The getRandomQuote function returns a random quote

function getRandomQuote(arr) {
	let randomNumber = Math.floor(Math.random() * arr.length);
  	return arr[randomNumber];
}

/*** 
* The printQuote function calls the getRandomQuote function, 
* creates an HTML string with conditional statements and 
* then prints the HTML string to the page
* calls getRandomColor function & prints color to page
***/

function printQuote() {
	let quoteToPrint = getRandomQuote(quotes);
	let htmlString = `<p class="quote"> ${quoteToPrint.quote} </p>
					  <p class="source"> ${quoteToPrint.source}`;
	if ( typeof quoteToPrint.citation != "undefined" ) {
		htmlString += `<span class="citation"> ${quoteToPrint.citation} </span>`
	} else if (typeof quoteToPrint.year != "undefined" ) {
		htmlString += `<span class="year"> ${quoteToPrint.year} </span>`
	} else if (typeof quoteToPrint.tags != "undefined" ) {
		htmlString += `<span class="tags"> ${quoteToPrint.tags} </span>`
	}

	htmlString += "</p>"
	document.getElementById('quote-box').innerHTML = htmlString;
	document.body.style.backgroundColor = getRandomColor() 
	return quoteToPrint;
}

printQuote();

/***
 * function that randomizes the BG color
 * code source: https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj
***/

function getRandomColor() {
	let randomColor = '#'+ Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// function that auto refreshes the quotes ever 10 seconds


function autoRefresh () {
	let = setInterval(printQuote, 10000)
}

autoRefresh();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);