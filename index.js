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

document.querySelector('.bdev a').addEventListener('mouseover', () => {
    const chevronGauche = document.querySelector('.chevron_gauche');
    const chevronDroite = document.querySelector('.chevron_droite');

    chevronGauche.style.marginRight = '5px';
    chevronDroite.style.marginLeft = '5px';
})
document.querySelector('.bdev a').addEventListener('mouseout', () => {
    const chevronGauche = document.querySelector('.chevron_gauche');
    const chevronDroite = document.querySelector('.chevron_droite');

    chevronGauche.style.marginRight = '0px';
    chevronDroite.style.marginLeft = '0px';
})