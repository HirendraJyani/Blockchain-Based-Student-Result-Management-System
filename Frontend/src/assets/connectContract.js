export const contract_address = '0xc854b2c0fB55fbD60f12B0920ACdb86653d75E0b';
export const contract_abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "_destinoTransferencia",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_origenTransferencia",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "montoTransferencia",
        "type": "uint256"
      }
    ],
    "name": "TransferirMonto",
    "type": "event"
  },
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
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_destinoTransferencia",
        "type": "address"
      }
    ],
    "name": "nuevaTransaccion",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "verBalanceCuenta",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function",
    "payable": true
  },
  {
    "inputs": [],
    "name": "contractName",
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
        "name": "email",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "father",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "mother",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "admission",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "college",
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
    "inputs": [],
    "name": "getAllClasses",
    "outputs": [
      {
        "components": [
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
        "internalType": "struct StudentResult.classInfo[]",
        "name": "",
        "type": "tuple[]"
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
        "components": [
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
            "name": "email",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "father",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mother",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "admission",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "college",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "classId",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct StudentResult.studentInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]