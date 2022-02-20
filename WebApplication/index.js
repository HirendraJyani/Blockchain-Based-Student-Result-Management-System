var Web3 = require("web3");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');


// require('dotenv').config();

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());

app.use(express.static('public'));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

var provider = "http://127.0.0.1:7545";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});

const abi = [
  {
    inputs: [],
    name: "hello",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
    constant: true,
  },
];

const address = "0x2B3522cDEcE616e18fc8f49e581081748d378476";
// console,log(web3.eth.)

const initContract = () => {
  //   const deploymentKey = Object.keys(Crud.networks)[0];
  return new web3.eth.Contract(abi, address);
};

let crud = initContract();

crud.methods
  .hello()
  .call()
  .then((result) => {
    console.log("HELLO = ", result);
  });


  const routes = require('./server/routes/contractRoute');
  app.use('/',routes);

app.listen(port,() => console.log(`Listening on port ${port}`));