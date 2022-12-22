const input_currency = document.querySelector('#input_currency');
const output_currency = document.querySelector('#output_currency');
const input_amount = document.querySelector('#input_amount');
const output_amount = document.querySelector('#output_amount');
const exchange = document.querySelector('#exchange');
const rate = document.querySelector('#rate');
const favicon = document.querySelector('#favicon');

input_currency.addEventListener('change', compute);
output_currency.addEventListener('change', compute);
input_amount.addEventListener('input', compute);
output_amount.addEventListener('input', compute);

exchange.addEventListener('click', () => {
    const temp = input_currency.value;
    input_currency.value = output_currency.value;
    output_currency.value = temp;
    compute();
});

function compute() {
    const input_currency1 = input_currency.value;
    const output_currency1 = output_currency.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${input_currency1}`)
        .then(res => res.json())
        .then(res => {
            const new_rate = res.rates[output_currency1];
            rate.innerText = `1 ${input_currency1} = ${new_rate} ${output_currency1}`
            output_amount.value = (input_amount.value * new_rate).toFixed(2);
        })
        //if value of input_currency is EUR then change favicon to euro.png
    switch (input_currency.value) {
        case 'EUR':
            favicon.href = 'https://img.icons8.com/ios/2x/exchange-euro.png';
            break;
        case 'USD':
            favicon.href = 'https://img.icons8.com/ios/2x/us-dollar-circled.png';
            break;
        case 'GBP':
            favicon.href = 'https://img.icons8.com/ios/2x/british-pound.png';
            break;
        case 'JPY':
            favicon.href = 'https://img.icons8.com/cotton/2x/japanese-yen.png';
            break;
        case 'AUD':
            favicon.href = 'https://img.icons8.com/ios/2x/us-dollar-circled.png';
            break;
        case 'CAD':
            favicon.href = 'https://img.icons8.com/ios/2x/us-dollar-circled.png';
            break;
        case 'CHF':
            favicon.href = 'https://img.icons8.com/ios/2x/swiss-franc.png';
            break;
        case 'CNY':
            favicon.href = 'https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/external-yuan-china-icongeek26-outline-icongeek26.png';
            break;
        case 'HKD':
            favicon.href = 'https://img.icons8.com/ios/2x/us-dollar-circled.png';
            break;
        case 'NZD':
            favicon.href = 'https://img.icons8.com/ios/2x/us-dollar-circled.png';
            break;
        case 'SEK':
            favicon.href = 'https://img.icons8.com/ios/2x/swedish-krona.png';
            break;
        case 'SGD':
            favicon.href = 'https://img.icons8.com/ios/2x/us-dollar-circled.png';
            break;
        case 'NOK':
            favicon.href = 'https://img.icons8.com/ios/2x/swedish-krona.png';
            break;
        case 'MXN':
            favicon.href = 'https://img.icons8.com/ios/2x/peso-symbol.png';
            break;
        case 'ILS':
            favicon.href = 'https://img.icons8.com/ios/2x/shekel.png';
            break;
        case 'KRW':
            favicon.href = 'https://img.icons8.com/ios/2x/won.png';
            break;
        case 'MYR':
            favicon.href = 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/2x/external-ringgit-currency-vitaliy-gorbachev-lineal-vitaly-gorbachev.png';
            break;
        case 'PHP':
            favicon.href = 'https://img.icons8.com/ios/2x/peso-symbol.png';
            break;
        case 'PLN':
            favicon.href = 'https://img.icons8.com/ios/2x/zloty.png';
            break;
        case 'THB':
            favicon.href = 'https://img.icons8.com/ios/2x/thai-baht.png';
            break;
        case 'TRY':
            favicon.href = 'https://img.icons8.com/ios/2x/turkish-lira.png';
            break;
        case 'ZAR':
            favicon.href = 'https://img.icons8.com/external-icongeek26-outline-icongeek26/2x/external-Rand-currency-icongeek26-outline-icongeek26-2.png';
            break;
        case 'RUB':
            favicon.href = 'https://img.icons8.com/ios/2x/ruble.png';
            break;
        default:
            favicon.href = 'https://img.icons8.com/emoji/2x/currency-exchange-emoji.png';
            break;
    }

}
compute();