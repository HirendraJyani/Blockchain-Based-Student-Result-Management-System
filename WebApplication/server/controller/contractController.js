var Web3 = require("web3");
var provider = "http://127.0.0.1:7545";
var web3Provider = new Web3.providers.HttpProvider(provider);
var web3 = new Web3(web3Provider);
web3.eth.getBlockNumber().then((result) => {
  console.log("Latest Ethereum Block is ", result);
});

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allClasses",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allStudents",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
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
  {
    inputs: [
      {
        internalType: "string",
        name: "className",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
    ],
    name: "addClass",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "batch",
        type: "string",
      },
      {
        internalType: "string",
        name: "rollno",
        type: "string",
      },
      {
        internalType: "string",
        name: "semester",
        type: "string",
      },
      {
        internalType: "string",
        name: "bigData",
        type: "string",
      },
      {
        internalType: "string",
        name: "disasterManagement",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "studentId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "classId",
        type: "uint256",
      },
    ],
    name: "addStudent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getClass",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getAllClasses",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getStudent",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
  {
    inputs: [],
    name: "getAllStudent",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
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

const address = "0xe7e36E1ed4c77d1Ad5e14ef90a3AE46cCbA3964e";

let classId = 6;

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

exports.classData = (req, res) => {
  res.render("class-data");
};

exports.addClass = (req, res) => {
  getAddClass(req, res);
};

async function getAddClass(req, res) {
  console.log("classData = ", req.body.className);
  res.render("admin");
  const classData = [];
  let crud = initContract();
  const otherAccounts = await web3.eth.getAccounts();
  console.log("otherAcc = ", otherAccounts);
  crud.methods
    .addClass(req.body.className, classId)
    .send({ from: otherAccounts[0] })
    .then(
      () => {
        crud.methods
          .getAllClasses()
          .call()
          .then(
            (result) => {
              console.log("ClassID= ", result);
              crud.methods
                .getClass(result[0])
                .call()
                .then((d) => {
                  console.log("classData = ", d);
                });
            },
            (err) => {
              console.log("ERROR1 = ", err);
              res.render("admin");
            }
          );
        console.log("SUCCESS ");
        res.render("admin");
      },
      (err) => {
        console.log("ERROR2 = ", err);
        res.render("admin");
      }
    );
  classId++;
}
