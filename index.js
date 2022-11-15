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
const chfUrl = `http://api.nbp.pl/api/exchangerates/rates/a/chf/`;
const dolarUrl = `http://api.nbp.pl/api/exchangerates/rates/a/usd/`;
const eurokUrl = `http://api.nbp.pl/api/exchangerates/rates/a/eur/`;



// btn.addEventListener(("click"), () => {

// spanValue.innerText = inputValue.value * selectCurrency;

// });


// function getEur() {
//     fetch(eurokUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

//selectCurrency.addEventListener("change", getEurRate);


// function getEurRate(rates) {
//     for(const rate in rates) {
//         euro.value = rate; 
//     };
// };





selectCurrency.addEventListener("change", () => {
    
    const chfUrl = `http://api.nbp.pl/api/exchangerates/rates/a/chf/`;
    fetch(chfUrl)
    .then((response) => response.json())
    .then((data) => console.log(data));
   //.catch((err) => console.error(err));
    
});

// selectCurrency.addEventListener("change",() => {
//     const dolarUrl = `http://api.nbp.pl/api/exchangerates/rates/a/usd/`;
//     fetch(dolarUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// });

// selectCurrency.addEventListener("change",() => {
//     const eurokUrl = `http://api.nbp.pl/api/exchangerates/rates/a/eur/`;
//     fetch(eurokUrl)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));

// });


