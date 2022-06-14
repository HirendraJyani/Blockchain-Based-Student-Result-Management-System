import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ContractService } from "src/app/services/contract/contract.service";
import { UiDataService } from "../ui-data.service";

@Component({
  selector: "app-student-form",
  templateUrl: "./student-form.component.html",
  styleUrls: ["./student-form.component.scss"],
})
export class StudentFormComponent implements OnInit {
  studentArray = [];
  classId: any;

  constructor(
    public uiDataService: UiDataService,
    private fb: FormBuilder,
    private contractService: ContractService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.classId = this.route.snapshot.params["classId"];
    this.connectAccount();
    this.initForm();
  }

  initForm(): void {
    const formObj = {
      studentName: [""],
      rollNo: [""],
      batch: [""],
      email: [""],
      father: [""],
      mother: [""],
      admission: [""],
      college: [""],
    };
    this.uiDataService.studentFormGroup = this.fb.group(formObj);
  }

  connectAccount(): void {
    this.contractService
      .connectAccount()
      .then((value: any) => {
        console.log("Accounts = ", value);
        this.getStudent();
      })
      .catch((error: any) => {
        console.log(error);
        this.contractService.failure(
          "Could't get the account data, please check if metamask is running correctly and refresh the page"
        );
      });
  }

  saveStudentData(): void {
    const name = this.uiDataService.studentFormGroup.value.studentName;
    const batch = this.uiDataService.studentFormGroup.value.batch;
    const rollno = this.uiDataService.studentFormGroup.value.rollNo;
    const email = this.uiDataService.studentFormGroup.value.email;
    const father = this.uiDataService.studentFormGroup.value.father;
    const mother = this.uiDataService.studentFormGroup.value.mother;
    const admission = this.uiDataService.studentFormGroup.value.admission;
    const college = this.uiDataService.studentFormGroup.value.college;
    const studentId = new Date().getTime();
    this.contractService
      .postStudentInfo(
        name,
        batch,
        rollno,
        email,
        father,
        mother,
        admission,
        college,
        this.classId,
        studentId
      )
      .then((res: any) => {
        console.log("res = ", res);
        this.getStudent();
      })
      .catch((err) => {
        console.log("post error - ", err);
      });
  }

  getStudent(): void {
    this.contractService
      .getStudentInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2.filter((d) => d.classId === this.classId);
      })
      .catch((err) => {
        console.log("get student error - ", err);
      });
  }
}
