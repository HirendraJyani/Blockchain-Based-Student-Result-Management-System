export const contract_address = '0xAD1f779276F4cB731BE044eD862fE38f7d3bffFb';
export const first_sem_contract_address = '0xEC377874620B0954B65a16edFCeE5A53a669E3B5';
export const second_sem_contract_address = '0x6D38B67727036BAB5a8CBc0BC2e853CB5521651C';
export const third_sem_contract_address = '0xd8D82ed531805A8f692b0c7Ce519013433267bFD';
export const fourth_sem_contract_address = '0xD08A0D74b6bf8cC893469e305b6fa361D3090E2d';
export const fifth_sem_contract_address = '0x934fc6E039De5Bced4A740B878c68b9eDCcf87d0';
export const sixth_sem_contract_address = '0x5D8b416dBdfBB9F4Ccb6CC8A73dD9c36f2152DcA';
export const seventh_sem_contract_address = '0xA3Cbf49Fc14942063B6E051Ca08acd992A76Ea52';
export const eigth_sem_contract_address = '0x8176dd4e13b7dbfED2d50cD67aDe1738edd7E1A8';

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

export const first_sem_abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "firstSem",
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
    "inputs": [
      {
        "internalType": "string",
        "name": "mathemetics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "chemistry",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "humanValues",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "programming",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "civil",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "chemistryLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "humanValueActivities",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cpLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "civilLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "camd",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sodeca",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addFirstSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFirstSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "mathemetics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "chemistry",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "humanValues",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "programming",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "civil",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "chemistryLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "humanValueActivities",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "cpLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "civilLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "camd",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sodeca",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct FirstSem.firstSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const second_sem_abi =  [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "secondSem",
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
        "internalType": "string",
        "name": "mathemetics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "physics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "communication",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "mechanical",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "electrical",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "physicsLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "languageLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "manufacturing",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "electricalLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "caeg",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sodeca",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addSecondSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSecondSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "mathemetics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "physics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "communication",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mechanical",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "electrical",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "physicsLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "languageLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "manufacturing",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "electricalLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "caeg",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sodeca",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct SecondSem.secondSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const third_sem_abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "thirdSem",
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
        "internalType": "string",
        "name": "mathemetics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "economics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "electronics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dsa",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "oop",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "software",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dsaLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "oopLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "softwareLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "electronicsLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "training",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addThirdSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getThirdSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "mathemetics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "economics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "electronics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dsa",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "oop",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "software",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dsaLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "oopLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "softwareLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "electronicsLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "training",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct ThirdSem.thirdSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const fourth_sem_abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "fourthSem",
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
        "internalType": "string",
        "name": "mathemetics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "communication",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "microprocessor",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dbms",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "toc",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "networks",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "mpLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dbmsLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "npLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "linux",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "javaLab",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addFourthSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFourthSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "mathemetics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "communication",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "microprocessor",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dbms",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "toc",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "networks",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "mpLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dbmsLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "npLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "linux",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "javaLab",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct FourthSem.fourthSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const fifth_sem_abi =  [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "fifthSem",
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
        "internalType": "string",
        "name": "itc",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "compiler",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "operating",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "graphics",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "algo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "hci",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "graphicsLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "compilerLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "algoLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "javaLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "training",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addFiveSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getFiveSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "itc",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "compiler",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "operating",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "graphics",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "algo",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "hci",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "graphicsLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "compilerLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "algoLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "javaLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "training",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct FifthSem.fifthSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const sixth_sem_abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "sixthSem",
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
        "internalType": "string",
        "name": "image",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "machine",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "security",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cao",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "ai",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "cloud",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "distributed",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "imageLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "machineLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "pythonLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "aapLab",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addSixSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSixSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "image",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "machine",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "security",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "cao",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "ai",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "cloud",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "distributed",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "imageLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "machineLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "pythonLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "aapLab",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct SixthSem.sixthSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const sevent_sem_abi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "seventhSem",
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
        "internalType": "string",
        "name": "iot",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "eedm",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "iotLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "aLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "sodeca",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addSevenSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getSevenSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "iot",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "eedm",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "iotLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "aLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "sodeca",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct SeventhSem.seventhSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]
export const eigth_sem_abi =  [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "eighthSem",
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
        "internalType": "string",
        "name": "bda",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "dm",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "stvLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "bdaLab",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "training",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "studentId",
        "type": "uint256"
      }
    ],
    "name": "addEightSemesterInfo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEightSemester",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "bda",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "dm",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "stvLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "bdaLab",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "training",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "studentId",
            "type": "uint256"
          }
        ],
        "internalType": "struct EigthSem.eighthSemInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function",
    "constant": true
  }
]