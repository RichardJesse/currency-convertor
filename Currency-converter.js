document.addEventListener('DOMContentLoaded', function () {
    let convertBtn = document.querySelector('.btn');

    convertBtn.addEventListener('click', function () {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')

            .then(response => { return response.json()})
            .then(data => {
                let currency = document.querySelector('#currency').value.toUpperCase();
                // console.log(currency);  
                let rate = data.rates[currency];
                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = '1 USD is equal to' + rate + currency;
                } else {
                    document.querySelector('#result').innerHTML = "invalid currency";
                }

                return false;




            });
    })
})