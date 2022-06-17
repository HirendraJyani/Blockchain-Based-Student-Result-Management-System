// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract SeventhSem {
    uint256[] public seventhSem;

    uint256 seventhSemCount = 0;

    struct seventhSemInfo {
        string iot;
        string eedm;
        string iotLab;
        string aLab;
        string sodeca;
        uint256 studentId;
    }

    mapping(uint256 => seventhSemInfo) seventhSemMap;

    function addSevenSemesterInfo(
        string memory iot,
        string memory eedm,
        string memory iotLab,
        string memory aLab,
        string memory sodeca,
        uint256 studentId
    ) public {
        seventhSem.push(studentId);
        seventhSemMap[seventhSemCount] = seventhSemInfo(
        iot,
        eedm,
        iotLab,
        aLab,
        sodeca,
        studentId
        );
        seventhSemCount++;
    }

    function getSevenSemester() public view returns (seventhSemInfo[] memory) {
        seventhSemInfo[] memory id = new seventhSemInfo[](seventhSemCount);
        for (uint256 i = 0; i < seventhSemCount; i++) {
            seventhSemInfo storage sem = seventhSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
