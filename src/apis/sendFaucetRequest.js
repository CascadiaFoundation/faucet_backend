const Web3 = require("web3");
const config = require("../config");

const sendFaucetRequest = (address) => {
    const web3 = new Web3(config.rpcUrl);

    const tx = {
        from: sender,
        to: address,
        gas: 21000,
        value: config.faucetAmount
    };

    const signPromise = web3.eth.accounts.signTransaction(tx, config.faucetPK);
    
    const promise = new Promise((resolve, reject) => {        
        signPromise.then((signedTx) => {
            const sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
            sentTx.on("receipt", receipt => {
                console.log("Sent to", receipt);
                resolve(receipt);
            });
            sentTx.on("error", err => {
                console.log("Err:", err);
                reject(err);
            });
        })        
    })
    
    return promise;
};

module.exports = sendFaucetRequest;
