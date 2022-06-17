// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract EigthSem {
    uint256[] public eighthSem;

    uint256 eighthSemCount = 0;

    struct eighthSemInfo {
        string bda;
        string dm;
        string stvLab;
        string bdaLab;
        string training;
        uint256 studentId;
    }

    mapping(uint256 => eighthSemInfo) eighthSemMap;

    function addEightSemesterInfo(
        string memory bda,
        string memory dm,
        string memory stvLab,
        string memory bdaLab,
        string memory training,
        uint256 studentId
    ) public {
        eighthSem.push(studentId);
        eighthSemMap[eighthSemCount] = eighthSemInfo(
        bda,
        dm,
        stvLab,
        bdaLab,
        training,
        studentId
        );
        eighthSemCount++;
    }

    function getEightSemester() public view returns (eighthSemInfo[] memory) {
        eighthSemInfo[] memory id = new eighthSemInfo[](eighthSemCount);
        for (uint256 i = 0; i < eighthSemCount; i++) {
            eighthSemInfo storage sem = eighthSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
