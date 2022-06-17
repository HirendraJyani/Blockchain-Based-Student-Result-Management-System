// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
pragma experimental ABIEncoderV2;

contract FifthSem {
    uint256[] public fifthSem;

    uint256 fifthSemCount = 0;

    struct fifthSemInfo {
        string itc;
        string compiler;
        string operating;
        string graphics;
        string algo;
        string hci;
        string graphicsLab;
        string compilerLab;
        string algoLab;
        string javaLab;
        string training;
        uint256 studentId;
    }

    mapping(uint256 => fifthSemInfo) fifthSemMap;

    function addFiveSemesterInfo(
        string memory itc,
        string memory compiler,
        string memory operating,
        string memory graphics,
        string memory algo,
        string memory hci,
        string memory graphicsLab,
        string memory compilerLab,
        string memory algoLab,
        string memory javaLab,
        string memory training,
        uint256 studentId
    ) public {
        fifthSem.push(studentId);
        fifthSemMap[fifthSemCount] = fifthSemInfo(
        itc,
        compiler,
        operating,
        graphics,
        algo,
        hci,
        graphicsLab,
        compilerLab,
        algoLab,
        javaLab,
        training,
        studentId
        );
        fifthSemCount++;
    }

    function getFiveSemester() public view returns (fifthSemInfo[] memory) {
        fifthSemInfo[] memory id = new fifthSemInfo[](fifthSemCount);
        for (uint256 i = 0; i < fifthSemCount; i++) {
            fifthSemInfo storage sem = fifthSemMap[i];
            id[i] = sem;
        }
        return id;
    }
}
