require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea glimpse flame traffic black deliver remind million give kitchen surge gesture'; 
let testAccounts = [
"0xece432bd1aac776b3e1dde68fc1fe008867d3b4b34b744aac13797403d46808b",
"0x3f90f711d14d5818cb636b7738b9c74eaa8b9783d2ed2845763c01a135ad3ea5",
"0xcf81e36af1e3117832f2837bdd24625a02f328ec50af5a62ec4acef6ca81cc9f",
"0xdcf5904350897d66de1c8888ad94825fb02d12874cab7007555894aaa560b2f4",
"0x0812ff6388f134bf8285ba6b8078d4903cc5fd67f8c6ae28c1a2d55ea176a7b5",
"0x892ea69244e8db8e448b65c0b9f5de9433e22c46335a83d17265c93880fd2740",
"0x489f5dc29ae1888caf188f37d02430970a7480f0c92cd95dffe3e5f7246d7bb7",
"0xeabfb368c3893c5519d59dac04129983a09439af40f9b0a73ecad804653edc50",
"0xb28748e0ef26fafea86bc5097a11e4a788f34a0f0aa8447633b0322e15d914c4",
"0x74afd8a9c84fe33ec3b4f2f3374c95b48222c6a1cc03e50f4a146bb1ae524a09"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

