// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

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
        string semester;
        string bigData;
        string disasterManagement;
        uint256 classId;
        uint256 studentId;
    }

    mapping(uint256 => classInfo) classes;

    mapping(uint256 => studentInfo) studentInfos;

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
        string memory semester,
        string memory bigData,
        string memory disasterManagement,
        uint256 studentId,
        uint256 classId
    ) public {
        allStudents.push(studentId);
        studentInfos[studentCount] = studentInfo(
            name,
            batch,
            rollno,
            semester,
            bigData,
            disasterManagement,
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
