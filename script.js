const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const copyTextBtn = document.getElementById('copy-text')
const loader = document.getElementById('loader');






// let apiQuotes = [];

// Show Loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

// Show New Quote
function newQuote() {
    loading();
    // Pick a random quote from apiQuotes array
    const quote = listaProverbe[Math.floor(Math.random() * listaProverbe.length)];
    // Check Quote length to determine styling
    if (quote.text.length > 120) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    // Set Quote, Hide Loader
    quoteText.textContent = quote.text;
    complete();
}

// Get Quotes from API

// async function getQuotes() {
//     loading();
//     // const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         newQuote();
//     } catch (error) {
//         // Catch Error Here
//     }
// }

// Tweet Quote
function tweetQuote() {
    const facebookUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}`;
    window.open(facebookUrl, '_blank');
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
facebookBtn.addEventListener('click', tweetQuote);
copyTextBtn.addEventListener('click', copyToClipboard)

// Copy to clipboard function



function copyToClipboard() {
    var copyText = document.getElementById("quote");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("Copy");
    textArea.remove();
}

// On Load
// getQuotes();
newQuote();
console.log(listaProverbe[1].text);





// const api_url ="https://zenquotes.io/api/quotes/";

// async function getapi(url)
// {
//   const response = await fetch(url);
//   var data = await response.json();
//   console.log(data);
// }

// getapi(api_url);