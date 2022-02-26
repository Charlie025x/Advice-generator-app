const adviceId = document.getElementById('advice-id')
const quote = document.getElementById('quote')
const diceBtn = document.getElementById('dice-btn')

// Get Quote from API
async function getNewQuote() {
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

// get new quote on page load
getNewQuote();

// get new quote when clicking dice
diceBtn.addEventListener('click', getNewQuote);