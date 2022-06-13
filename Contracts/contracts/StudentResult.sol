// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract StudentResult {
    uint256[] public allClasses;

    uint256[] public allStudents;

    uint256 studentCount = 0;

    uint256 classCount = 0;

    struct classInfo {
        string className;
        uint256 classId;
    }

    struct studentInfo {
        string name;
        string batch;
        string rollno;
        string email;
        string father;
        string mother;
        string admission;
        string college;
        uint256 classId;
        uint256 studentId;
    }

    mapping(uint256 => classInfo) classes;

    mapping(uint256 => studentInfo) studentInfos;

    address origenTransferencia;
    address payable destinoTransferencia;
    uint256 montoTransferencia;

    constructor() {
        origenTransferencia = msg.sender;
    }

    event TransferirMonto(
        address payable _destinoTransferencia,
        address _origenTransferencia,
        uint256 montoTransferencia
    );

    function nuevaTransaccion(address payable _destinoTransferencia)
        public
        payable
        returns (bool)
    {
        destinoTransferencia = _destinoTransferencia;
        destinoTransferencia.transfer(msg.value);
        emit TransferirMonto(
            destinoTransferencia,
            origenTransferencia,
            msg.value
        );
        return true;
    }

    function verBalanceCuenta() public payable returns (uint256) {
        return origenTransferencia.balance;
    }

    function contractName() public pure returns (string memory) {
        return "Hirendra";
    }

    function hello() public pure returns (string memory) {
        return "Hello Students";
    }

    function addClass(string memory className, uint256 classId) public {
        classes[classCount] = classInfo(className, classId);
        allClasses.push(classId);
        classCount++;
    }

    function addStudent(
        string memory name,
        string memory batch,
        string memory rollno,
        string memory email,
        string memory father,
        string memory mother,
        string memory admission,
        string memory college,
        uint256 studentId,
        uint256 classId
    ) public {
        allStudents.push(studentId);
        studentInfos[studentCount] = studentInfo(
            name,
            batch,
            rollno,
            email,
            father,
            mother,
            admission,
            college,
            classId,
            studentId
        );
        studentCount++;
    }

    function getAllClasses() public view returns (classInfo[] memory) {
        classInfo[] memory id = new classInfo[](classCount);
        for (uint256 i = 0; i < classCount; i++) {
            classInfo storage class = classes[i];
            id[i] = class;
        }
        return id;
    }

    function getAllStudent() public view returns (studentInfo[] memory) {
        studentInfo[] memory id = new studentInfo[](studentCount);
        for (uint256 i = 0; i < studentCount; i++) {
            studentInfo storage student = studentInfos[i];
            id[i] = student;
        }
        return id;
    }
}
