// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract ThirdSem {
    
    uint256[] public thirdSem;

    uint256 thirdSemCount = 0;

    struct thirdSemInfo {
        string mathemetics;
        string economics;
        string electronics;
        string dsa;
        string oop;
        string software;
        string dsaLab;
        string oopLab;
        string softwareLab;
        string electronicsLab;
        string training;
        uint256 studentId;
    }

    mapping(uint256 => thirdSemInfo) thirdSemMap;

    function addThirdSemesterInfo(
        string memory mathemetics,
        string memory economics,
        string memory electronics,
        string memory dsa,
        string memory oop,
        string memory software,
        string memory dsaLab,
        string memory oopLab,
        string memory softwareLab,
        string memory electronicsLab,
        string memory training,
        uint256 studentId
    ) public {
        thirdSem.push(studentId);
        thirdSemMap[thirdSemCount] = thirdSemInfo(
        mathemetics,
        economics,
        electronics,
        dsa,
        oop,
        software,
        dsaLab,
        oopLab,
        softwareLab,
        electronicsLab,
        training,
        studentId
        );
        thirdSemCount++;
    }

    function getThirdSemester() public view returns (thirdSemInfo[] memory) {
        thirdSemInfo[] memory id = new thirdSemInfo[](thirdSemCount);
        for (uint256 i = 0; i < thirdSemCount; i++) {
            thirdSemInfo storage sem = thirdSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
