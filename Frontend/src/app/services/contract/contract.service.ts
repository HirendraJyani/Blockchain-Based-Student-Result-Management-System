import { Inject, Injectable } from "@angular/core";
import { WEB3 } from "../../core/web3";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, Subject } from "rxjs";

import {
  contract_address,
  contract_abi,
  first_sem_contract_address,
  second_sem_contract_address,
  third_sem_contract_address,
  fourth_sem_contract_address,
  fifth_sem_contract_address,
  sixth_sem_contract_address,
  seventh_sem_contract_address,
  eigth_sem_contract_address,
  first_sem_abi,
  second_sem_abi,
  third_sem_abi,
  fourth_sem_abi,
  fifth_sem_abi,
  sixth_sem_abi,
  sevent_sem_abi,
  eigth_sem_abi
} from "../../../assets/connectContract.js";

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

declare let require: any;
const tokenAbi = require("../../../../../Contracts/build/contracts/StudentResult.json");
declare let window: any;

@Injectable({
  providedIn: "root",
})
export class ContractService {
  public accountsObservable = new Subject<string[]>();
  public compatible: boolean;
  web3Modal;
  web3js;
  provider;
  accounts;
  balance;

  constructor(@Inject(WEB3) private web3: Web3, private snackbar: MatSnackBar) {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
        },
      },
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)",
      },
    });
  }

  async connectAccount(): Promise<any> {
    console.log("Accounts 2= ");
    this.provider = await this.web3Modal.connect(); // set provider
    this.web3js = new Web3(this.provider); // create web3 instance
    this.accounts = await this.web3js.eth.getAccounts();
    console.log("Accounts = ", this.accounts);
    return this.accounts;
  }

  async accountInfo(accounts): Promise<any> {
    const initialvalue = await this.web3js.eth.getBalance(accounts[0]);
    this.balance = this.web3js.utils.fromWei(initialvalue, "ether");
    return this.balance;
  }

  // trasnferEther(originAccount, destinyAccount, amount) {
  //   const that = this;

  //   return new Promise((resolve, reject) => {
  //     var contract = require("@truffle/contract"); // acceso a nueva version de libreria
  //     const paymentContract = contract(tokenAbi);
  //     paymentContract.setProvider(this.provider);
  //     paymentContract
  //       .deployed()
  //       .then((instance) => {
  //         let finalAmount = this.web3.utils.toBN(amount);
  //         console.log(finalAmount);
  //         return instance.nuevaTransaccion(destinyAccount, {
  //           from: originAccount[0],
  //           value: this.web3.utils.toWei(finalAmount, "ether"),
  //         });
  //       })
  //       .then((status) => {
  //         if (status) {
  //           return resolve({ status: true });
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);

  //         return reject("Error transfering Ether");
  //       });
  //   });
  // }

  async getName(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      contract_abi,
      contract_address
    );
    const contractName = await connectContract.methods
      .contractName()
      .call({ from: this.accounts[0] });
    console.log("contractName = ", contractName);
    return contractName;
  }

  async postClassName(name: string): Promise<any> {
    const uniqueId = new Date().getTime();
    const connectContract = new this.web3js.eth.Contract(
      contract_abi,
      contract_address
    );

    return await connectContract.methods
      .addClass(name, uniqueId)
      .send({ from: this.accounts[0] });
  }

  async getClasses(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      contract_abi,
      contract_address
    );
    const classesList = await connectContract.methods
      .getAllClasses()
      .call({ from: this.accounts[0] });
    console.log("classesList = ", classesList);
    return classesList;
  }

  async postStudentInfo(
    name: string,
    batch: string,
    rollno: string,
    email: string,
    father: string,
    mother: string,
    admission: string,
    college: string,
    classId: any,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      contract_abi,
      contract_address
    );

    return await connectContract.methods
      .addStudent(
        name,
        batch,
        rollno,
        email,
        father,
        mother,
        admission,
        college,
        studentId,
        classId
      )
      .send({ from: this.accounts[0] });
  }

  async getStudentInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      contract_abi,
      contract_address
    );
    const studentInfo = await connectContract.methods
      .getAllStudent()
      .call({ from: this.accounts[0] });
    console.log("getStudentInfo = ", studentInfo);
    return studentInfo;
  }


  async postFirstSemesterInfo(
    mathemetics: string,
    chemistry: string,
    humanValues: string,
    programming: string,
    civil: string,
    chemistryLab: string,
    humanValueActivities: string,
    cpLab: string,
    civilLab: string,
    camd: string,
    sodeca: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      first_sem_abi,
      first_sem_contract_address
    );

    return await connectContract.methods
      .addFirstSemesterInfo(
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
      )
      .send({ from: this.accounts[0] });
  }

  async postSecondSemesterInfo(
    mathemetics: string,
    physics: string,
    communication: string,
    mechanical: string,
    electrical: string,
    physicsLab: string,
    languageLab: string,
    manufacturing: string,
    electricalLab: string,
    caeg: string,
    sodeca: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      second_sem_abi,
      second_sem_contract_address
    );

    return await connectContract.methods
      .addSecondSemesterInfo(
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
      )
      .send({ from: this.accounts[0] });
  }

  async postThirdSemesterInfo(
    mathemetics: string,
    economics: string,
    electronics: string,
    dsa: string,
    oop: string,
    software: string,
    dsaLab: string,
    oopLab: string,
    softwareLab: string,
    electronicsLab: string,
    training: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      third_sem_abi,
      third_sem_contract_address
    );

    return await connectContract.methods
      .addThirdSemesterInfo(
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
      )
      .send({ from: this.accounts[0] });
  }

  async postFourthSemesterInfo(
    mathemetics: string,
    communication: string,
    microprocessor: string,
    dbms: string,
    toc: string,
    networks: string,
    mpLab: string,
    dbmsLab: string,
    npLab: string,
    linux: string,
    javaLab: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      fourth_sem_abi,
      fourth_sem_contract_address
    );

    return await connectContract.methods
      .addFourthSemesterInfo(
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
      )
      .send({ from: this.accounts[0] });
  }

  async postFiveSemesterInfo(
    itc: string,
    compiler: string,
    operating: string,
    graphics: string,
    algo: string,
    hci: string,
    graphicsLab: string,
    compilerLab: string,
    algoLab: string,
    javaLab: string,
    training: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      fifth_sem_abi,
      fifth_sem_contract_address
    );

    return await connectContract.methods
      .addFiveSemesterInfo(
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
      )
      .send({ from: this.accounts[0] });
  }

  async postSixSemesterInfo(
    image: string,
    machine: string,
    security: string,
    cao: string,
    ai: string,
    cloud: string,
    distributed: string,
    imageLab: string,
    machineLab: string,
    pythonLab: string,
    aapLab: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      sixth_sem_abi,
      sixth_sem_contract_address
    );

    return await connectContract.methods
      .addSixSemesterInfo(
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
      )
      .send({ from: this.accounts[0] });
  }

  async postSevenSemesterInfo(
    iot: string,
    eedm: string,
    iotLab: string,
    aLab: string,
    sodeca: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      sevent_sem_abi,
      seventh_sem_contract_address
    );

    return await connectContract.methods
      .addSevenSemesterInfo(
        iot,
        eedm,
        iotLab,
        aLab,
        sodeca,
        studentId
      )
      .send({ from: this.accounts[0] });
  }

  async postEightSemesterInfo(
    bda: string,
    dm: string,
    stvLab: string,
    bdaLab: string,
    training: string,
    studentId: any
  ): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      eigth_sem_abi,
      eigth_sem_contract_address
    );

    return await connectContract.methods
      .addEightSemesterInfo(
        bda,
        dm,
        stvLab,
        bdaLab,
        training,
        studentId
      )
      .send({ from: this.accounts[0] });
  }

  async getFirstSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      first_sem_abi,
      first_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getFirstSemester()
      .call({ from: this.accounts[0] });
    console.log("getFirstSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getSecondSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      second_sem_abi,
      second_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getSecondSemester()
      .call({ from: this.accounts[0] });
    console.log("getSecondSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getThirdSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      third_sem_abi,
      third_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getThirdSemester()
      .call({ from: this.accounts[0] });
    console.log("getThirdSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getFourthSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      fourth_sem_abi,
      fourth_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getFourthSemester()
      .call({ from: this.accounts[0] });
    console.log("getFourthSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getFifthSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      fifth_sem_abi,
      fifth_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getFiveSemester()
      .call({ from: this.accounts[0] });
    console.log("getFiveSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getSixthSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      sixth_sem_abi,
      sixth_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getSixSemester()
      .call({ from: this.accounts[0] });
    console.log("getSixSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getSeventhSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      sevent_sem_abi,
      seventh_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getSevenSemester()
      .call({ from: this.accounts[0] });
    console.log("getSevenSemester = ", semesterInfo);
    return semesterInfo;
  }

  async getEigthSemesterInfo(): Promise<any> {
    const connectContract = new this.web3js.eth.Contract(
      eigth_sem_abi,
      eigth_sem_contract_address
    );
    const semesterInfo = await connectContract.methods
      .getEigthSemester()
      .call({ from: this.accounts[0] });
    console.log("getEigthSemester = ", semesterInfo);
    return semesterInfo;
  }

  failure(message: string): void {
    const snackbarRef = this.snackbar.open(message);
    snackbarRef.dismiss();
  }

  success(): void {
    const snackbarRef = this.snackbar.open("Transaction complete successfully");
    snackbarRef.dismiss();
  }
}
