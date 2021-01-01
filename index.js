const url = 'https://blockchain.info/ticker';
let bitcoin = document.querySelector('#bitcoin');
let bitcoinUSD = document.querySelector('#bitcoinUSD');

const printBitcoin = async function () {
    fetch(url)
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                bitcoin.textContent = data.EUR.last + ' €';
                bitcoinUSD.textContent = data.USD.last + ' $';
            })
        } else {
            console.log('ERREUR');
        }
    })
}

setInterval(printBitcoin, 3000);