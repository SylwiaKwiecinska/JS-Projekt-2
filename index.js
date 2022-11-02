//Aktualnie obowiązujący kurs waluty {code} z tabeli kursów typu {table}
//http://api.nbp.pl/api/exchangerates/rates/{table}/{code}/

//Aktualnie obowiązujący kurs średni waluty CHF
//http://api.nbp.pl/api/exchangerates/rates/a/chf/

//Notowanie kursu kupna i sprzedaży USD opublikowana w dniu dzisiejszym
//Jeśli dzisiejsza tabela nie została jeszcze opublikowana zwracany jest kod błędu 404
//http://api.nbp.pl/api/exchangerates/rates/c/usd/today/



const inputValue = document.querySelector("#inputValue");
const selectCurrency = document.querySelector("#selectCurrency");
const euro = document.querySelector("#EUR");
const dolar = document.querySelector("#USD");
const frank = document.querySelector("#CHF");
const btn = document.querySelector("#convert");
const spanValue = document.querySelector("#spanValue");

btn.addEventListener(("click"), () => {

spanValue.innerText = inputValue.value * $(selectCurrency);

});

frank.addEventListener(("option"),() => {
    const frankUrl = "//http://api.nbp.pl/api/exchangerates/rates/a/chf/";
    fetch(frankUrl)
    .then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

});

dolar.addEventListener(("option"),() => {
    const dolarUrl = "//http://api.nbp.pl/api/exchangerates/rates/a/usd/";
    fetch(dolarUrl)
    .then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

});

euro.addEventListener(("option"),() => {
    const eurokUrl = "//http://api.nbp.pl/api/exchangerates/rates/a/eur/";
    fetch(eurokUrl)
    .then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

});
