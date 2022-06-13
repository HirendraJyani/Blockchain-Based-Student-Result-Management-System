import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ContractService } from "src/app/services/contract/contract.service";
import { UiDataService } from "../ui-data.service";

@Component({
  selector: "app-semester-form",
  templateUrl: "./semester-form.component.html",
  styleUrls: ["./semester-form.component.scss"],
})
export class SemesterFormComponent implements OnInit {
  studentArray = [];
  semester: any;
  studentId: any;
  studentObj = {
    name: "",
    rollNo: "",
    branch: "",
    father: "",
    mother: "",
    college: "",
  };
  constructor(
    public uiDataService: UiDataService,
    private fb: FormBuilder,
    private contractService: ContractService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.semester = this.route.snapshot.params["sem"];
    this.studentId = this.route.snapshot.params["studentId"];
    console.log("student ID = ", this.studentId);
    console.log("SEM = ", this.semester);
    this.connectAccount();
    this.initForm();
  }

  initForm(): void {
    let formObj;
    if (this.semester == 1) {
      console.log("SEM = ", this.semester);
      formObj = {
        mathemetics: [""],
        chemistry: [""],
        humanValues: [""],
        programming: [""],
        civil: [""],
        chemistryLab: [""],
        humanValueActivities: [""],
        cpLab: [""],
        civilLab: [""],
        camd: [""],
        sodeca: [""],
      };
    }
    if (this.semester == 2) {
      formObj = {
        mathemetics: [""],
        physics: [""],
        communication: [""],
        mechanical: [""],
        electrical: [""],
        physicsLab: [""],
        languageLab: [""],
        manufacturing: [""],
        electricalLab: [""],
        caeg: [""],
        sodeca: [""],
      };
    }
    if (this.semester == 3) {
      formObj = {
        mathemetics: [""],
        economics: [""],
        electronics: [""],
        dsa: [""],
        oop: [""],
        software: [""],
        dsaLab: [""],
        oopLab: [""],
        softwareLab: [""],
        electronicsLab: [""],
        training: [""],
        sodeca: [""],
      };
    }
    if (this.semester == 4) {
      formObj = {
        mathemetics: [""],
        communication: [""],
        microprocessor: [""],
        dbms: [""],
        toc: [""],
        networks: [""],
        mpLab: [""],
        dbmsLab: [""],
        npLab: [""],
        linux: [""],
        javaLab: [""],
        social: [""],
      };
    }
    if (this.semester == 5) {
      formObj = {
        itc: [""],
        compiler: [""],
        operating: [""],
        graphics: [""],
        algo: [""],
        hci: [""],
        graphicsLab: [""],
        compilerLab: [""],
        algoLab: [""],
        javaLab: [""],
        training: [""],
        sodeca: [""],
      };
    }
    if (this.semester == 6) {
      formObj = {
        image: [""],
        machine: [""],
        security: [""],
        cao: [""],
        ai: [""],
        cloud: [""],
        distributed: [""],
        imageLab: [""],
        machineLab: [""],
        pythonLab: [""],
        aapLab: [""],
        sodeca: [""],
      };
    }
    if (this.semester == 7) {
      formObj = {
        iot: [""],
        eedm: [""],
        iotLab: [""],
        aLab: [""],
        sodeca: [""],
      };
    }
    if (this.semester == 8) {
      formObj = {
        bda: [""],
        dm: [""],
        stvLab: [""],
        bdaLab: [""],
        training: [""],
      };
    }
    this.getStudent();
    this.uiDataService.semesterFormGroup = this.fb.group(formObj);
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

  saveSemesterData(): void {
    const name = this.uiDataService.studentFormGroup.value.studentName;
    const batch = this.uiDataService.studentFormGroup.value.batch;
    const rollno = this.uiDataService.studentFormGroup.value.rollNo;
    const email = this.uiDataService.studentFormGroup.value.email;
    const father = this.uiDataService.studentFormGroup.value.father;
    const mother = this.uiDataService.studentFormGroup.value.mother;
    const admission = this.uiDataService.studentFormGroup.value.admission;
    const college = this.uiDataService.studentFormGroup.value.college;
    const classId = this.route.snapshot.params["classId"];
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
        classId,
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
        this.studentArray = res2.filter((d) => d.studentId == this.studentId);
        console.log("student = ", this.studentArray);
      })
      .catch((err) => {
        console.log("get student error - ", err);
      });
  }
}
