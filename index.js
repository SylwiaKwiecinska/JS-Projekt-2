//Aktualnie obowiązujący kurs waluty {code} z tabeli kursów typu {table}
//http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/

//Aktualnie obowiązujący kurs średni waluty CHF
//http://api.nbp.pl/api/exchangerates/rates/a/chf/

//Notowanie kursu kupna i sprzedaży USD opublikowana w dniu dzisiejszym
//Jeśli dzisiejsza tabela nie została jeszcze opublikowana zwracany jest kod błędu 404
//http://api.nbp.pl/api/exchangerates/rates/c/usd/today/

let value = 0;

const getCurrencyValue = (currency) => {
    fetch(`http://api.nbp.pl/api/exchangerates/rates/a/${currency}`)
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
