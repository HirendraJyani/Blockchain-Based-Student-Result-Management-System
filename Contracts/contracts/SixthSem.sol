// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract SixthSem {
    uint256[] public sixthSem;

    uint256 sixthSemCount = 0;

    struct sixthSemInfo {
        string image;
        string machine;
        string security;
        string cao;
        string ai;
        string cloud;
        string distributed;
        string imageLab;
        string machineLab;
        string pythonLab;
        string aapLab;
        uint256 studentId;
    }

    mapping(uint256 => sixthSemInfo) sixthSemMap;

    function addSixSemesterInfo(
        string memory image,
        string memory machine,
        string memory security,
        string memory cao,
        string memory ai,
        string memory cloud,
        string memory distributed,
        string memory imageLab,
        string memory machineLab,
        string memory pythonLab,
        string memory aapLab,
        uint256 studentId
    ) public {
        sixthSem.push(studentId);
        sixthSemMap[sixthSemCount] = sixthSemInfo(
        image,
        machine,
        security,
        cao,
        ai,
        cloud,
        distributed,
        imageLab,
        machineLab,
        pythonLab,
        aapLab,
        studentId
        );
        sixthSemCount++;
    }

    function getSixSemester() public view returns (sixthSemInfo[] memory) {
        sixthSemInfo[] memory id = new sixthSemInfo[](sixthSemCount);
        for (uint256 i = 0; i < sixthSemCount; i++) {
            sixthSemInfo storage sem = sixthSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
