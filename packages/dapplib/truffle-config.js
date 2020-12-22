require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom glide fresh tragic name repeat sad protect just process metal gesture'; 
let testAccounts = [
"0x8bb991be4e37ce7d4e1d4b59488cd8dfc99c623449cdb20fcaa1dabe415e4ccd",
"0x9db3b1ea8348ba18816bdb10548592f6e8e094c38e1a5c741a8cdd66bd441086",
"0x8b600eac28f56b85898447f1edbf77568375b75db232c41346c2ae4de09bf6a6",
"0x7c2b1e0f5acdfd7465f76eeef7ac90f3efe61c812fe166c0f2fa1f7c7a6e4997",
"0xb74dbe141b0dc1a682ac0e9afb6a5b228d21f2f4def66985f304e30756acbc42",
"0x09e544d3eb65ef92ca56d20598233b4877ef7494c5138648f2f28f99482938a8",
"0xbbc8bedf9f65def9c3bd952224b7df0db1c0d6dce6a0fff4a075cf47c881b851",
"0xb930c80eafcfeac67803c9dcf94437708c240aab3b4b64675b9c6a9b7c1c5772",
"0x2c4a0dc95d718251f3bf805b36810b5059bd536784c268cff6537865276a7e02",
"0xa08caf30407f6ccec942d9a4ffcb5fe94715b08bc86fd121577c948a056a17ca"
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
            version: '^0.5.11'
        }
    }
};
