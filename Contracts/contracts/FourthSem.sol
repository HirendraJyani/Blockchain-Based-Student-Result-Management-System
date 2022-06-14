// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract FourthSem {
    
    uint256[] public fourthSem;

    uint256 fourthSemCount = 0;

    struct fourthSemInfo {
        string mathemetics;
        string communication;
        string microprocessor;
        string dbms;
        string toc;
        string networks;
        string mpLab;
        string dbmsLab;
        string npLab;
        string linux;
        string javaLab;
        uint256 studentId;
    }

    mapping(uint256 => fourthSemInfo) fourthSemMap;

    function addFourthSemesterInfo(
        string memory mathemetics,
        string memory communication,
        string memory microprocessor,
        string memory dbms,
        string memory toc,
        string memory networks,
        string memory mpLab,
        string memory dbmsLab,
        string memory npLab,
        string memory linux,
        string memory javaLab,
        uint256 studentId
    ) public {
        fourthSem.push(studentId);
        fourthSemMap[fourthSemCount] = fourthSemInfo(
        mathemetics,
        communication,
        microprocessor,
        dbms,
        toc,
        networks,
        mpLab,
        dbmsLab,
        npLab,
        linux,
        javaLab,
        studentId
        );
        fourthSemCount++;
    }

    function getFourthSemester() public view returns (fourthSemInfo[] memory) {
        fourthSemInfo[] memory id = new fourthSemInfo[](fourthSemCount);
        for (uint256 i = 0; i < fourthSemCount; i++) {
            fourthSemInfo storage sem = fourthSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
