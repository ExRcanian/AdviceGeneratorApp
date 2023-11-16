async function generateQuote() {
    let quoteCall = await fetch(`https://api.adviceslip.com/advice`);
    let quoteData = await quoteCall.json();

    document.querySelector('.quote').innerHTML = '"' + quoteData.slip.advice + '"';
    document.querySelector('.quoteID').innerHTML = 'Advice #' + quoteData.slip.id;
}

generateQuote()

let dice = document.querySelector('.dicebox');
dice.addEventListener('click', () => {
    generateQuote();
})