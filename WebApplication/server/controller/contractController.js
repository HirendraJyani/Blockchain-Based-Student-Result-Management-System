var uuidv4 = require("uuid");
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
    inputs: [],
    name: "getAllClasses",
    outputs: [
      {
        components: [
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
        internalType: "struct StudentResult.classInfo[]",
        name: "",
        type: "tuple[]",
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
        components: [
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
            name: "classId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "studentId",
            type: "uint256",
          },
        ],
        internalType: "struct StudentResult.studentInfo[]",
        name: "",
        type: "tuple[]",
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

const address = "0x894d4C4c9D9ce5d0b227AC2Eae36FA9D6dF38a31";

let classId = 1;

let studentId = 1;

let classNameArray = [];

let studentArray = [];

let queryClassID = null;

const initContract = () => {
  return new web3.eth.Contract(abi, address);
};

exports.viewData = (req, res) => {
  getAllAddedClasses().then(() => res.render("index", { classNameArray }));
};

exports.studentResult = (req, res) => {
  queryClassID = parseInt(req.params.classID);
  console.log("pARma = ", req.params.classID);
  refreshStudentData().then(() =>
    res.render("show-result", { studentArray, queryClassID })
  );
};

exports.admin = (req, res) => {
  classNameArray = [];
  getAllAddedClasses().then(() => res.render("admin", { classNameArray }));
  // res.render("admin", { classNameArray });
};

exports.classData = (req, res) => {
  queryClassID = parseInt(req.params.classID);
  console.log("pARma = ", req.params.classID);
  // res.render("class-data", { studentArray, queryClassID });

  refreshStudentData().then(() =>
    res.render("class-data", { studentArray, queryClassID })
  );
};

exports.addStudentData = (req, res) => {
  queryClassID = parseInt(req.params.classID);
  console.log("pARma = ", req.params.classID);
  console.log("length = ", req.body.name.trim().length);
  console.log("length2 = ", req.body);
  if (req.body.name.trim().length > 0) {
    getStudentData(req, res);
    // res.render("class-data", { studentArray, queryClassID });
  }
};

async function getStudentData(req, res) {
  studentId = new Date().getTime();
  const uniqueName = studentArray.findIndex(
    (e) => e.rollno === req.body.rollno
  );

  console.log("uniqueName = ", uniqueName);
  console.log("params classID = ", queryClassID);

  if (uniqueName === -1) {
    // res.render("class-data", { studentArray, queryClassID });
    const classData = [];
    let crud = initContract();
    const otherAccounts = await web3.eth.getAccounts();
    console.log("otherAcc = ", otherAccounts);
    crud.methods
      .addStudent(
        req.body.name,
        req.body.batch,
        req.body.rollno,
        req.body.semester,
        req.body.bigData,
        req.body.disasterManagement,
        studentId,
        queryClassID
      )
      .send({ from: otherAccounts[1], gas: 3000000 })
      .then(
        () => {
          refreshStudentData().then(() =>
            res.render("class-data", { studentArray, queryClassID })
          );
        },
        (err) => {
          console.log("ERROR2 = ", err);
        }
      );
    // studentId++;
  }
}

exports.addClass = (req, res) => {
  console.log("length = ", req.body.className.trim().length);
  console.log("length2 = ", req.body);
  if (req.body.className.trim().length > 0) {
    getAddClass(req, res);
    // res.render("admin", { classNameArray });
  }
};

async function getAddClass(req, res) {
  classId = new Date().getTime();
  const uniqueName = classNameArray.findIndex(
    (e) => e.className === req.body.className
  );

  console.log("uniqueName = ", uniqueName);

  if (uniqueName === -1) {
    console.log("classData = ", req.body.className);
    // res.render("admin", { classNameArray });
    const classData = [];
    let crud = initContract();
    const otherAccounts = await web3.eth.getAccounts();
    console.log("otherAcc = ", otherAccounts);
    crud.methods
      .addClass(req.body.className, classId)
      .send({ from: otherAccounts[0], gas: 3000000 })
      .then(
        () => {
          classNameArray = [];
          getAllAddedClasses().then(() =>
            res.render("admin", { classNameArray })
          );
        },
        (err) => {
          console.log("ERROR2 = ", err);
        }
      );
    // classId++;
  }
}

function getAllAddedClasses() {
  let crud = initContract();

  return new Promise((resolve, reject) => {
    crud.methods
      .getAllClasses()
      .call()
      .then(
        (result) => {
          console.log("ClassID= ", result);
          classNameArray = result;
          resolve();
        },
        (err) => {
          console.log("ERROR1 = ", err);
          reject();
        }
      );
    console.log("SUCCESS ");
  });
}

const refreshStudentData = () => {
  let crud = initContract();
  return new Promise((resolve) => {
    crud.methods
      .getAllStudent()
      .call()
      .then(
        (result) => {
          studentArray = [];
          console.log("studentArray= ", result);
          studentArray = result.filter((e) => {
            console.log("studentArray 2 = ");
            return e.classId == queryClassID;
          });
          console.log("filter studentArray = ", studentArray);
          resolve();
        },
        (err) => {
          console.log("ERROR1 = ", err);
          res.render("class-data", { studentArray, queryClassID });
        }
      );
    console.log("SUCCESS ");
  });
};
