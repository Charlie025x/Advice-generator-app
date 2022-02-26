const adviceId = document.getElementById('advice-id')
const quote = document.getElementById('quote')

let apiQuote = [];
// Get Quote from API
async function getQuote() {
  const apiUrl = 'https://api.adviceslip.com/advice';
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();

    // add fetched api quote to page
    adviceId.innerText =  "Advice # " + apiQuote.slip.id ;
    quote.innerText = '"' + apiQuote.slip.advice + '"';

  } catch (error) {
    // Catch error here
  }
}


// On Load
getQuote();