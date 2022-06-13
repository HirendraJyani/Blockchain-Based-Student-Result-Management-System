import { Inject, Injectable } from "@angular/core";
import { WEB3 } from "../../core/web3";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Observable, Subject } from "rxjs";

import {
  contract_address,
  contract_abi,
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
      .addStudent(name, batch, rollno, email, father, mother, admission, college, classId, studentId)
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

  failure(message: string): void {
    const snackbarRef = this.snackbar.open(message);
    snackbarRef.dismiss();
  }

  success(): void {
    const snackbarRef = this.snackbar.open("Transaction complete successfully");
    snackbarRef.dismiss();
  }
}
