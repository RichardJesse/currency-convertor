document.addEventListener('DOMContentLoaded', function () {
    let convertBtn = document.querySelector('.btn');
    let amountToConvert = document.querySelector('#amount');

    convertBtn.addEventListener('click', function () {
        fetch('https://api.exchangerate-api.com/v4/latest/USD')

            .then(response => { return response.json()})
            .then(data => {
                var selectElement = document.getElementById('inputGroupSelect01');
                var selectedOption = selectElement.options[selectElement.selectedIndex];
                var currency = selectedOption.text.toUpperCase();
                
                
                let rate = data.rates[currency];
                let amount =amountToConvert.value;
                let exchange = rate*amount;

                 
                console.log(rate);
                if (rate !== undefined) {
                    document.querySelector('#result').innerHTML = `${amount} dollars is equal to ` + exchange + currency;
                } else {
                    document.querySelector('#result').innerHTML = "invalid currency";
                }

                return false;




            });
    })
})