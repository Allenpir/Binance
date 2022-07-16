let wsbnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
let bnbElemebent = document.getElementById('api-list-bnb-price');


wsbnb.onmessage = (event) =>{
    let bnbObject = JSON.parse(event.data);
    let price = parseFloat(bnbObject.p).toFixed(1)
    bnbElemebent.innerText = '$ '+ price;
};

let wsbtc = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
let btcElemebent = document.getElementById('api-list-btc-price');


wsbtc.onmessage = (event) =>{
    let btcObject = JSON.parse(event.data);
    let price = parseFloat(btcObject.p).toFixed(0)
    btcElemebent.innerText = '$ '+ price;
};


let wseth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let ethElemebent = document.getElementById('api-list-eth-price');


wseth.onmessage = (event) =>{
    let ethObject = JSON.parse(event.data);
    let price = parseFloat(ethObject.p).toFixed(0)
    ethElemebent.innerText = '$ '+ price;
};

let wsgal = new WebSocket('wss://stream.binance.com:9443/ws/galusdt@trade');
let galElemebent = document.getElementById('api-list-gal-price');


wsgal.onmessage = (event) =>{
    let galObject = JSON.parse(event.data);
    let price = parseFloat(galObject.p).toFixed(2)
    galElemebent.innerText = '$ '+ price;
};

let wsgmt = new WebSocket('wss://stream.binance.com:9443/ws/gmtusdt@trade');
let gmtElemebent = document.getElementById('api-list-gmt-price');


wsgmt.onmessage = (event) =>{
    let gmtObject = JSON.parse(event.data);
    let price = parseFloat(gmtObject.p).toFixed(2)
    gmtElemebent.innerText = '$ '+ price;
};
