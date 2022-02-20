var Web3 = require("web3");
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

const initContract = () => {
  return new web3.eth.Contract(abi, address);
};

exports.viewData = (req, res) => {
  let crud = initContract();

  let finalResult;

  crud.methods
    .hello()
    .call()
    .then((result) => {
      console.log("HELLO 2 = ", result);
      finalResult = result;
      res.render("index", { data: finalResult });
    });
};

exports.admin = (req, res) => {
  res.render("admin");
};
