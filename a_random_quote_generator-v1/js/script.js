/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

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

	},

];


/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
	let randomNumber = Math.floor(Math.random() * arr.length);
  	return arr[randomNumber];
}

/***
 * `printQuote` function
***/

function printQuote(arr) {
	let quoteToPrint = getRandomQuote(quotes);
	let htmlString = `<p class="quote"> ${quoteToPrint.quote} </p>
					  <p class="source"> ${quoteToPrint.source}`;
	if ( typeof quoteToPrint.citation != "undefined" ) {
		htmlString += `<span class="citation"> ${quoteToPrint.citation} </span>`
	} else if (typeof quoteToPrint.year != "undefined" ) {
		htmlString += `<span class="year"> ${quoteToPrint.year} </span>`
	}
	htmlString += "</p>"
	document.getElementById('quote-box').innerHTML = htmlString; 
	return quoteToPrint;
}

console.log(printQuote());
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);