// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract StudentResult {
    uint256[] public allClasses;

    uint256[] public allStudents;

    // uint256[] public firstSem;

    // uint256[] public secondSem;
    
    // uint256[] public thirdSem;
    
    // uint256[] public fourthSem;
    
    // uint256[] public fifthSem;
    
    // uint256[] public sixthSem;
    
    // uint256[] public seventhSem;
    
    // uint256[] public eighthSem;

    uint256 studentCount = 0;

    uint256 classCount = 0;

    // uint256 firstSemCount = 0;

    // uint256 secondSemCount = 0;

    // uint256 thirdSemCount = 0;

    // uint256 fourthSemCount = 0;

    // uint256 fifthSemCount = 0;

    // uint256 sixthSemCount = 0;

    // uint256 seventhSemCount = 0;

    // uint256 eighthSemCount = 0;

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

    // struct firstSemInfo {
    //     string mathemetics;
    //     string chemistry;
    //     string humanValues;
    //     string programming;
    //     string civil;
    //     string chemistryLab;
    //     string humanValueActivities;
    //     string cpLab;
    //     string civilLab;
    //     string camd;
    //     string sodeca;
    //     uint256 studentId;
    // }

    // struct secondSemInfo {
    //     string mathemetics;
    //     string physics;
    //     string communication;
    //     string mechanical;
    //     string electrical;
    //     string physicsLab;
    //     string languageLab;
    //     string manufacturing;
    //     string electricalLab;
    //     string caeg;
    //     string sodeca;
    //     uint256 studentId;
    // }

    // struct thirdSemInfo {
    //     string mathemetics;
    //     string economics;
    //     string electronics;
    //     string dsa;
    //     string oop;
    //     string software;
    //     string dsaLab;
    //     string oopLab;
    //     string softwareLab;
    //     string electronicsLab;
    //     string training;
    //     uint256 studentId;
    // }

    // struct fourthSemInfo {
    //     string mathemetics;
    //     string communication;
    //     string microprocessor;
    //     string dbms;
    //     string toc;
    //     string networks;
    //     string mpLab;
    //     string dbmsLab;
    //     string npLab;
    //     string linux;
    //     string javaLab;
    //     uint256 studentId;
    // }

    // struct fifthSemInfo {
    //     string itc;
    //     string compiler;
    //     string operating;
    //     string graphics;
    //     string algo;
    //     string hci;
    //     string graphicsLab;
    //     string compilerLab;
    //     string algoLab;
    //     string javaLab;
    //     string training;
    //     uint256 studentId;
    // }

    // struct sixthSemInfo {
    //     string image;
    //     string machine;
    //     string security;
    //     string cao;
    //     string ai;
    //     string cloud;
    //     string distributed;
    //     string imageLab;
    //     string machineLab;
    //     string pythonLab;
    //     string aapLab;
    //     uint256 studentId;
    // }

    // struct seventhSemInfo {
    //     string iot;
    //     string eedm;
    //     string iotLab;
    //     string aLab;
    //     string sodeca;
    //     uint256 studentId;
    // }

    // struct eighthSemInfo {
    //     string bda;
    //     string dm;
    //     string stvLab;
    //     string bdaLab;
    //     string training;
    //     uint256 studentId;
    // }

    mapping(uint256 => classInfo) classes;

    mapping(uint256 => studentInfo) studentInfos;

    // mapping(uint256 => firstSemInfo) firstSemMap;

    // mapping(uint256 => secondSemInfo) secondSemMap;

    // mapping(uint256 => thirdSemInfo) thirdSemMap;

    // mapping(uint256 => fourthSemInfo) fourthSemMap;

    // mapping(uint256 => fifthSemInfo) fifthSemMap;

    // mapping(uint256 => sixthSemInfo) sixthSemMap;

    // mapping(uint256 => seventhSemInfo) seventhSemMap;

    // mapping(uint256 => eighthSemInfo) eighthSemMap;

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

    // function addFirstSemesterInfo(
    //     string memory mathemetics,
    //     string memory chemistry,
    //     string memory humanValues,
    //     string memory programming,
    //     string memory civil,
    //     string memory chemistryLab,
    //     string memory humanValueActivities,
    //     string memory cpLab,
    //     string memory civilLab,
    //     string memory camd,
    //     string memory sodeca,
    //     uint256 studentId
    // ) public {
    //     firstSem.push(studentId);
    //     firstSemMap[firstSemCount] = firstSemInfo(
    //     mathemetics,
    //     chemistry,
    //     humanValues,
    //     programming,
    //     civil,
    //     chemistryLab,
    //     humanValueActivities,
    //     cpLab,
    //     civilLab,
    //     camd,
    //     sodeca,
    //     studentId
    //     );
    //     firstSemCount++;
    // }

    // function addSecondSemesterInfo(
    //     string memory mathemetics,
    //     string memory physics,
    //     string memory communication,
    //     string memory mechanical,
    //     string memory electrical,
    //     string memory physicsLab,
    //     string memory languageLab,
    //     string memory manufacturing,
    //     string memory electricalLab,
    //     string memory caeg,
    //     string memory sodeca,
    //     uint256 studentId
    // ) public {
    //     secondSem.push(studentId);
    //     secondSemMap[secondSemCount] = secondSemInfo(
    //     mathemetics,
    //     physics,
    //     communication,
    //     mechanical,
    //     electrical,
    //     physicsLab,
    //     languageLab,
    //     manufacturing,
    //     electricalLab,
    //     caeg,
    //     sodeca,
    //     studentId
    //     );
    //     secondSemCount++;
    // }

    // function addThirdSemesterInfo(
    //     string memory mathemetics,
    //     string memory economics,
    //     string memory electronics,
    //     string memory dsa,
    //     string memory oop,
    //     string memory software,
    //     string memory dsaLab,
    //     string memory oopLab,
    //     string memory softwareLab,
    //     string memory electronicsLab,
    //     string memory training,
    //     uint256 studentId
    // ) public {
    //     thirdSem.push(studentId);
    //     thirdSemMap[thirdSemCount] = thirdSemInfo(
    //     mathemetics,
    //     economics,
    //     electronics,
    //     dsa,
    //     oop,
    //     software,
    //     dsaLab,
    //     oopLab,
    //     softwareLab,
    //     electronicsLab,
    //     training,
    //     studentId
    //     );
    //     thirdSemCount++;
    // }

    // function addFourthSemesterInfo(
    //     string memory mathemetics,
    //     string memory communication,
    //     string memory microprocessor,
    //     string memory dbms,
    //     string memory toc,
    //     string memory networks,
    //     string memory mpLab,
    //     string memory dbmsLab,
    //     string memory npLab,
    //     string memory linux,
    //     string memory javaLab,
    //     uint256 studentId
    // ) public {
    //     fourthSem.push(studentId);
    //     fourthSemMap[fourthSemCount] = fourthSemInfo(
    //     mathemetics,
    //     communication,
    //     microprocessor,
    //     dbms,
    //     toc,
    //     networks,
    //     mpLab,
    //     dbmsLab,
    //     npLab,
    //     linux,
    //     javaLab,
    //     studentId
    //     );
    //     fourthSemCount++;
    // }

    // function addFiveSemesterInfo(
    //     string memory itc,
    //     string memory compiler,
    //     string memory operating,
    //     string memory graphics,
    //     string memory algo,
    //     string memory hci,
    //     string memory graphicsLab,
    //     string memory compilerLab,
    //     string memory algoLab,
    //     string memory javaLab,
    //     string memory training,
    //     uint256 studentId
    // ) public {
    //     fifthSem.push(studentId);
    //     fifthSemMap[fifthSemCount] = fifthSemInfo(
    //     itc,
    //     compiler,
    //     operating,
    //     graphics,
    //     algo,
    //     hci,
    //     graphicsLab,
    //     compilerLab,
    //     algoLab,
    //     javaLab,
    //     training,
    //     studentId
    //     );
    //     fifthSemCount++;
    // }

    // function addSixSemesterInfo(
    //     string memory image,
    //     string memory machine,
    //     string memory security,
    //     string memory cao,
    //     string memory ai,
    //     string memory cloud,
    //     string memory distributed,
    //     string memory imageLab,
    //     string memory machineLab,
    //     string memory pythonLab,
    //     string memory aapLab,
    //     uint256 studentId
    // ) public {
    //     sixthSem.push(studentId);
    //     sixthSemMap[sixthSemCount] = sixthSemInfo(
    //     image,
    //     machine,
    //     security,
    //     cao,
    //     ai,
    //     cloud,
    //     distributed,
    //     imageLab,
    //     machineLab,
    //     pythonLab,
    //     aapLab,
    //     studentId
    //     );
    //     sixthSemCount++;
    // }

    // function addSevenSemesterInfo(
    //     string memory iot,
    //     string memory eedm,
    //     string memory iotLab,
    //     string memory aLab,
    //     string memory sodeca,
    //     uint256 studentId
    // ) public {
    //     seventhSem.push(studentId);
    //     seventhSemMap[seventhSemCount] = seventhSemInfo(
    //     iot,
    //     eedm,
    //     iotLab,
    //     aLab,
    //     sodeca,
    //     studentId
    //     );
    //     seventhSemCount++;
    // }

    // function addEightSemesterInfo(
    //     string memory bda,
    //     string memory dm,
    //     string memory stvLab,
    //     string memory bdaLab,
    //     string memory training,
    //     uint256 studentId
    // ) public {
    //     eighthSem.push(studentId);
    //     eighthSemMap[eighthSemCount] = eighthSemInfo(
    //     bda,
    //     dm,
    //     stvLab,
    //     bdaLab,
    //     training,
    //     studentId
    //     );
    //     eighthSemCount++;
    // }

    // function getFirstSemester() public view returns (firstSemInfo[] memory) {
    //     firstSemInfo[] memory id = new firstSemInfo[](firstSemCount);
    //     for (uint256 i = 0; i < firstSemCount; i++) {
    //         firstSemInfo storage sem = firstSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getSecondSemester() public view returns (secondSemInfo[] memory) {
    //      secondSemInfo[] memory id = new secondSemInfo[](secondSemCount);
    //     for (uint256 i = 0; i < secondSemCount; i++) {
    //         secondSemInfo storage sem = secondSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getThirdSemester() public view returns (thirdSemInfo[] memory) {
    //     thirdSemInfo[] memory id = new thirdSemInfo[](thirdSemCount);
    //     for (uint256 i = 0; i < thirdSemCount; i++) {
    //         thirdSemInfo storage sem = thirdSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getFourthSemester() public view returns (fourthSemInfo[] memory) {
    //     fourthSemInfo[] memory id = new fourthSemInfo[](fourthSemCount);
    //     for (uint256 i = 0; i < fourthSemCount; i++) {
    //         fourthSemInfo storage sem = fourthSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getFiveSemester() public view returns (fifthSemInfo[] memory) {
    //     fifthSemInfo[] memory id = new fifthSemInfo[](fifthSemCount);
    //     for (uint256 i = 0; i < fifthSemCount; i++) {
    //         fifthSemInfo storage sem = fifthSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getSixSemester() public view returns (sixthSemInfo[] memory) {
    //     sixthSemInfo[] memory id = new sixthSemInfo[](sixthSemCount);
    //     for (uint256 i = 0; i < sixthSemCount; i++) {
    //         sixthSemInfo storage sem = sixthSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getSevenSemester() public view returns (seventhSemInfo[] memory) {
    //     seventhSemInfo[] memory id = new seventhSemInfo[](seventhSemCount);
    //     for (uint256 i = 0; i < seventhSemCount; i++) {
    //         seventhSemInfo storage sem = seventhSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }

    // function getEightSemester() public view returns (eighthSemInfo[] memory) {
    //     eighthSemInfo[] memory id = new eighthSemInfo[](eighthSemCount);
    //     for (uint256 i = 0; i < eighthSemCount; i++) {
    //         eighthSemInfo storage sem = eighthSemMap[i];
    //         id[i] = sem;
    //     }
    //     return id;
    // }
}
