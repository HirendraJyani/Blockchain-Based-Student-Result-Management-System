import { Component, OnInit } from "@angular/core";
import { ContractService } from "src/app/services/contract/contract.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  ContractName = "";
  direction: any;

  constructor(private contracts: ContractService) {}

  ngOnInit(): void {
    this.connectAccount();
  }

  getName(): void {
    this.contracts.getName().then((res: any) => {
      console.log("RES = ", res);
      this.ContractName = res;
    });
  }

  connectAccount(): void {
    this.contracts
      .connectAccount()
      .then((value: any) => {
        console.log("Accounts 3= ");
        this.direction = value;
      })
      .catch((error: any) => {
        console.log("Accounts 4= ");
        console.log(error);
        this.contracts.failure(
          "Could't get the account data, please check if metamask is running correctly and refresh the page"
        );
      });
  }
}
