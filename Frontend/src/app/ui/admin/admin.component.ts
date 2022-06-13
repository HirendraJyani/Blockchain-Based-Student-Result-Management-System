import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ContractService } from "src/app/services/contract/contract.service";
import { UiDataService } from "../ui-data.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  classArray = [];
  constructor(
    public uiDataService: UiDataService,
    private fb: FormBuilder,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.connectAccount();
    this.initForm();
  }

  initForm(): void {
    const formObj = {
      name: ["", Validators.required],
    };
    this.uiDataService.classFormGroup = this.fb.group(formObj);
  }

  saveClass(): void {
    const name = this.uiDataService.classFormGroup.value.name;
    console.log("name - ", name);
    this.contractService
      .postClassName(name)
      .then((res: any) => {
        console.log("RES = ", res);
        this.getClasses();
      })
      .catch((err) => {
        console.log("post class error - ", err);
      });
  }

  getClasses(): void {
    this.contractService
      .getClasses()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.classArray = res2;
      })
      .catch((err) => {
        console.log("get class error - ", err);
      });
  }

  connectAccount(): void {
    this.contractService
      .connectAccount()
      .then((value: any) => {
        console.log("Accounts = ", value);
        this.getClasses();
      })
      .catch((error: any) => {
        console.log(error);
        this.contractService.failure(
          "Could't get the account data, please check if metamask is running correctly and refresh the page"
        );
      });
  }
}
