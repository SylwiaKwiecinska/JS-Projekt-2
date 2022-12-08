let value = 0;

const getCurrencyValue = (currency) => {
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}`)
    .then((response) => response.json())
    .then((data) => value = data.rates[0].mid);
};

getCurrencyValue('eur');

const inputValue = document.querySelector("#inputValue");
const selectCurrency = document.querySelector("#selectCurrency");
const btn = document.querySelector("#convert");

btn.addEventListener(("click"), () => {
    spanValue.innerText = Number(inputValue.value * value).toFixed(2);
});

selectCurrency.addEventListener("change", (event) => getCurrencyValue(event.target.value));

inputValue.addEventListener("keypress", (event) => {
    if(!((event.charCode >= 48 && event.charCode <= 57) || (event.charCode == 44 && inputValue.value))) {
       event.preventDefault(); 
    } 
});
