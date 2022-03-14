// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract StudentResult {
    uint256[] public allClasses;

    uint256[] public allStudents;

    struct classInfo {
        string className;
    }

    struct studentInfo {
        string name;
        string batch;
        string rollno;
        string semester;
        string bigData;
        string disasterManagement;
        uint256 classId;
    }

    mapping(uint256 => classInfo) classes;

    mapping(uint256 => studentInfo) students;

    function hello() public pure returns (string memory) {
        return "Hello Students";
    }

    function addClass(
        string memory className,
        uint256 classId
    ) public {
        classInfo storage newClass = classes[classId];
        newClass.className = className;
        allClasses.push(classId);
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
        studentInfo storage newStudents = students[studentId];
        newStudents.name = name;
        newStudents.batch = batch;
        newStudents.rollno = rollno;
        newStudents.semester = semester;
        newStudents.bigData = bigData;
        newStudents.disasterManagement = disasterManagement;
        newStudents.classId = classId;
        
        allStudents.push(studentId);
    }

    function getClass(uint256 id) public view returns (string memory){
        classInfo storage c = classes[id];
        return c.className;
    }

    function getAllClasses() public view returns (uint256[] memory){
        return allClasses;
    }

    function getStudent(uint256 id) public view returns (string memory, string memory, string memory, string memory, string memory, string memory){
        studentInfo storage s = students[id];
        return (s.name, s.batch, s.rollno, s.semester, s.bigData, s.disasterManagement);
    }

    function getAllStudent() public view returns (uint256[] memory){
        return allStudents;
    }
}
