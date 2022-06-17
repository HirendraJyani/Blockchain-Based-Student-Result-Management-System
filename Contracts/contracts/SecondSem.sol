// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract SecondSem {

    uint256[] public secondSem;

    uint256 secondSemCount = 0;

    struct secondSemInfo {
        string mathemetics;
        string physics;
        string communication;
        string mechanical;
        string electrical;
        string physicsLab;
        string languageLab;
        string manufacturing;
        string electricalLab;
        string caeg;
        string sodeca;
        uint256 studentId;
    }

    mapping(uint256 => secondSemInfo) secondSemMap;

    function addSecondSemesterInfo(
        string memory mathemetics,
        string memory physics,
        string memory communication,
        string memory mechanical,
        string memory electrical,
        string memory physicsLab,
        string memory languageLab,
        string memory manufacturing,
        string memory electricalLab,
        string memory caeg,
        string memory sodeca,
        uint256 studentId
    ) public {
        secondSem.push(studentId);
        secondSemMap[secondSemCount] = secondSemInfo(
        mathemetics,
        physics,
        communication,
        mechanical,
        electrical,
        physicsLab,
        languageLab,
        manufacturing,
        electricalLab,
        caeg,
        sodeca,
        studentId
        );
        secondSemCount++;
    }

    function getSecondSemester() public view returns (secondSemInfo[] memory) {
         secondSemInfo[] memory id = new secondSemInfo[](secondSemCount);
        for (uint256 i = 0; i < secondSemCount; i++) {
            secondSemInfo storage sem = secondSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
