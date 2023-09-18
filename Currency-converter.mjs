
// document.addEventListener('DOMContentLoaded', function () {
//     // let convertBtn = document.querySelector('.btn');
//     let amountToConvert = document.querySelector('#amount');
    
 
//     amountToConvert.addEventListener('input', function (event) {
//         fetch('https://api.exchangerate-api.com/v4/latest/USD')

//             .then(response => { return response.json()})
//             .then(data => {
//                 var selectElement = document.getElementById('inputGroupSelect01');
//                 var selectedOption = selectElement.options[selectElement.selectedIndex];
//                 var currency = selectedOption.getAttribute("value");
                
                
//                 let rate = data.rates[currency];
//                 let amount =amountToConvert.value;
//                 let exchange = rate*amount;
//                console.log(selectElement);
//                console.log(selectedOption);
//                console.log(currency);

                 
//                 console.log(rate);
//                 if (rate !== undefined) {
//                     document.querySelector('#convertedRate').value = exchange;
                    
//                 } else {
//                     document.querySelector('#convertedRate').value = "invalid currency";
//                 }


//                 return false;




//             });
//     })
// })
// allow for realtime conversion of the currencies as in the time a user inputs a value it is converted



// input.setCustomValidity("Select dfhbfhdfbhjn")
import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_feWykViIGhAvzc5Sg6E9UFIdV5pdnLtVsj1QKjgE');

freecurrencyapi.latest({
    base_currency: 'USD',
    currencies: 'EUR'
}).then(response => {
    console.log(response);
});