const url = 'https://blockchain.info/ticker';
let bitcoin = document.querySelector('#bitcoin');
let bitcoinUSD = document.querySelector('#bitcoinUSD');

const printBitcoin = async function () {
    fetch(url)
    .then(res => {
        if(res.ok){
            res.json().then(data => {
                bitcoin.textContent = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(data.EUR.last);
                bitcoinUSD.textContent = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'EUR' }).format(data.USD.last);
            })
        } else {
            console.log('ERREUR : Aucune réponse du serveur');
        }
    })
}

setInterval(printBitcoin, 3000);