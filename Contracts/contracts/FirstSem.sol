// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract FirstSem {

    uint256[] public firstSem;

    uint256 firstSemCount = 0;

    struct firstSemInfo {
        string mathemetics;
        string chemistry;
        string humanValues;
        string programming;
        string civil;
        string chemistryLab;
        string humanValueActivities;
        string cpLab;
        string civilLab;
        string camd;
        string sodeca;
        uint256 studentId;
    }

    mapping(uint256 => firstSemInfo) firstSemMap;

    constructor() {
    }

    function contractName() public pure returns (string memory) {
        return "FirstSem";
    }

    function addFirstSemesterInfo(
        string memory mathemetics,
        string memory chemistry,
        string memory humanValues,
        string memory programming,
        string memory civil,
        string memory chemistryLab,
        string memory humanValueActivities,
        string memory cpLab,
        string memory civilLab,
        string memory camd,
        string memory sodeca,
        uint256 studentId
    ) public {
        firstSem.push(studentId);
        firstSemMap[firstSemCount] = firstSemInfo(
        mathemetics,
        chemistry,
        humanValues,
        programming,
        civil,
        chemistryLab,
        humanValueActivities,
        cpLab,
        civilLab,
        camd,
        sodeca,
        studentId
        );
        firstSemCount++;
    }

    function getFirstSemester() public view returns (firstSemInfo[] memory) {
        firstSemInfo[] memory id = new firstSemInfo[](firstSemCount);
        for (uint256 i = 0; i < firstSemCount; i++) {
            firstSemInfo storage sem = firstSemMap[i];
            id[i] = sem;
        }
        return id;
    }

}
