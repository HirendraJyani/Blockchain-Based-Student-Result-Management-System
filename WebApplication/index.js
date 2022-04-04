var Web3 = require("web3");
const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');


// require('dotenv').config();

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(__dirname + '/public'));

var provider = "http://127.0.0.1:7545";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});

const abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allClasses",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "allStudents",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "hello",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "className",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "classId",
        "type": "uint256"
      }
    ],
    "name": "addClass",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "batch",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "rollno",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "semester",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bigData",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "disasterManagement",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "classId",
        "type": "uint256"
      }
    ],
    "name": "addStudent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getClass",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllClasses",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "getStudent",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  },
  {
    "inputs": [],
    "name": "getAllStudent",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
];

// const abi = [
//   {
//     inputs: [],
//     name: "hello",
//     outputs: [
//       {
//         internalType: "string",
//         name: "",
//         type: "string",
//       },
//     ],
//     stateMutability: "pure",
//     type: "function",
//     constant: true,
//   },
// ];

const address = "0x894d4C4c9D9ce5d0b227AC2Eae36FA9D6dF38a31";
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