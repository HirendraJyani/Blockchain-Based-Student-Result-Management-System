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
  disableBtn = false;
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
    console.log("student ID type = ", typeof this.studentId);
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
        sodeca: [""],
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
    if (this.semester == 1) {
      const mathemetics =
        this.uiDataService.semesterFormGroup.value.mathemetics;
      const chemistry = this.uiDataService.semesterFormGroup.value.chemistry;
      const humanValues =
        this.uiDataService.semesterFormGroup.value.humanValues;
      const programming =
        this.uiDataService.semesterFormGroup.value.programming;
      const civil = this.uiDataService.semesterFormGroup.value.civil;
      const chemistryLab =
        this.uiDataService.semesterFormGroup.value.chemistryLab;
      const humanValueActivities =
        this.uiDataService.semesterFormGroup.value.humanValueActivities;
      const cpLab = this.uiDataService.semesterFormGroup.value.cpLab;
      const civilLab = this.uiDataService.semesterFormGroup.value.civilLab;
      const camd = this.uiDataService.semesterFormGroup.value.camd;
      const sodeca = this.uiDataService.semesterFormGroup.value.sodeca;
      this.contractService
        .postFirstSemesterInfo(
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
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getFirstSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 2) {
      const mathemetics =
        this.uiDataService.semesterFormGroup.value.mathemetics;
      const physics = this.uiDataService.semesterFormGroup.value.physics;
      const communication =
        this.uiDataService.semesterFormGroup.value.communication;
      const mechanical = this.uiDataService.semesterFormGroup.value.mechanical;
      const electrical = this.uiDataService.semesterFormGroup.value.electrical;
      const physicsLab = this.uiDataService.semesterFormGroup.value.physicsLab;
      const languageLab =
        this.uiDataService.semesterFormGroup.value.languageLab;
      const manufacturing =
        this.uiDataService.semesterFormGroup.value.manufacturing;
      const electricalLab =
        this.uiDataService.semesterFormGroup.value.electricalLab;
      const caeg = this.uiDataService.semesterFormGroup.value.caeg;
      const sodeca = this.uiDataService.semesterFormGroup.value.sodeca;
      this.contractService
        .postSecondSemesterInfo(
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
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getSecondSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 3) {
      const mathemetics =
        this.uiDataService.semesterFormGroup.value.mathemetics;
      const economics = this.uiDataService.semesterFormGroup.value.economics;
      const electronics =
        this.uiDataService.semesterFormGroup.value.electronics;
      const dsa = this.uiDataService.semesterFormGroup.value.dsa;
      const oop = this.uiDataService.semesterFormGroup.value.oop;
      const software = this.uiDataService.semesterFormGroup.value.software;
      const dsaLab = this.uiDataService.semesterFormGroup.value.dsaLab;
      const oopLab = this.uiDataService.semesterFormGroup.value.oopLab;
      const softwareLab =
        this.uiDataService.semesterFormGroup.value.softwareLab;
      const electronicsLab =
        this.uiDataService.semesterFormGroup.value.electronicsLab;
      const training = this.uiDataService.semesterFormGroup.value.training;
      this.contractService
        .postThirdSemesterInfo(
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
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getThirdSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 4) {
      const mathemetics =
        this.uiDataService.semesterFormGroup.value.mathemetics;
      const communication =
        this.uiDataService.semesterFormGroup.value.communication;
      const microprocessor =
        this.uiDataService.semesterFormGroup.value.microprocessor;
      const dbms = this.uiDataService.semesterFormGroup.value.dbms;
      const toc = this.uiDataService.semesterFormGroup.value.toc;
      const networks = this.uiDataService.semesterFormGroup.value.networks;
      const mpLab = this.uiDataService.semesterFormGroup.value.mpLab;
      const dbmsLab = this.uiDataService.semesterFormGroup.value.dbmsLab;
      const npLab = this.uiDataService.semesterFormGroup.value.npLab;
      const linux = this.uiDataService.semesterFormGroup.value.linux;
      const javaLab = this.uiDataService.semesterFormGroup.value.javaLab;
      this.contractService
        .postFourthSemesterInfo(
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
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getFourthSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 5) {
      const itc = this.uiDataService.semesterFormGroup.value.itc;
      const compiler = this.uiDataService.semesterFormGroup.value.compiler;
      const operating = this.uiDataService.semesterFormGroup.value.operating;
      const graphics = this.uiDataService.semesterFormGroup.value.graphics;
      const algo = this.uiDataService.semesterFormGroup.value.algo;
      const hci = this.uiDataService.semesterFormGroup.value.hci;
      const graphicsLab =
        this.uiDataService.semesterFormGroup.value.graphicsLab;
      const compilerLab =
        this.uiDataService.semesterFormGroup.value.compilerLab;
      const algoLab = this.uiDataService.semesterFormGroup.value.algoLab;
      const javaLab = this.uiDataService.semesterFormGroup.value.javaLab;
      const training = this.uiDataService.semesterFormGroup.value.training;
      this.contractService
        .postFiveSemesterInfo(
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
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getFifthSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 6) {
      const image = this.uiDataService.semesterFormGroup.value.image;
      const machine = this.uiDataService.semesterFormGroup.value.machine;
      const security = this.uiDataService.semesterFormGroup.value.security;
      const cao = this.uiDataService.semesterFormGroup.value.cao;
      const ai = this.uiDataService.semesterFormGroup.value.ai;
      const cloud = this.uiDataService.semesterFormGroup.value.cloud;
      const distributed =
        this.uiDataService.semesterFormGroup.value.distributed;
      const imageLab = this.uiDataService.semesterFormGroup.value.imageLab;
      const machineLab = this.uiDataService.semesterFormGroup.value.machineLab;
      const pythonLab = this.uiDataService.semesterFormGroup.value.pythonLab;
      const aapLab = this.uiDataService.semesterFormGroup.value.aapLab;
      this.contractService
        .postSixSemesterInfo(
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
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getSixthSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 7) {
      const iot = this.uiDataService.semesterFormGroup.value.iot;
      const eedm = this.uiDataService.semesterFormGroup.value.eedm;
      const iotLab = this.uiDataService.semesterFormGroup.value.iotLab;
      const aLab = this.uiDataService.semesterFormGroup.value.aLab;
      const sodeca = this.uiDataService.semesterFormGroup.value.sodeca;
      this.contractService
        .postSevenSemesterInfo(iot, eedm, iotLab, aLab, sodeca, this.studentId)
        .then((res: any) => {
          console.log("res = ", res);
          this.getSeventhSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
    if (this.semester == 8) {
      const bda = this.uiDataService.semesterFormGroup.value.bda;
      const dm = this.uiDataService.semesterFormGroup.value.dm;
      const stvLab = this.uiDataService.semesterFormGroup.value.stvLab;
      const bdaLab = this.uiDataService.semesterFormGroup.value.bdaLab;
      const training = this.uiDataService.semesterFormGroup.value.training;
      this.contractService
        .postEightSemesterInfo(
          bda,
          dm,
          stvLab,
          bdaLab,
          training,
          this.studentId
        )
        .then((res: any) => {
          console.log("res = ", res);
          this.getEigthSemesterInfo();
        })
        .catch((err) => {
          console.log("post error - ", err);
        });
    }
  }

  getStudent(): void {
    this.contractService
      .getStudentInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2.filter((d) => {
          console.log("D = ", d);
          console.log("D studentId= ", d.studentId);
          return d.studentId === this.studentId;
        });
        // if (this.studentArray.length > 0) {
        //   this.disableBtn = true;
        // }
        console.log("student = ", this.studentArray);
        this.studentObj.name = this.studentArray[0].name;
        this.studentObj.branch = this.studentArray[0].batch;
        this.studentObj.rollNo = this.studentArray[0].rollno;
        this.studentObj.father = this.studentArray[0].father;
        this.studentObj.mother = this.studentArray[0].mother;
        this.studentObj.college = this.studentArray[0].college;
      })
      .catch((err) => {
        console.log("get student error - ", err);
      });
  }

  getFirstSemesterInfo(): void {
    this.contractService
      .getFirstSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getSecondSemesterInfo(): void {
    this.contractService
      .getSecondSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getThirdSemesterInfo(): void {
    this.contractService
      .getThirdSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getFourthSemesterInfo(): void {
    this.contractService
      .getFourthSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getFifthSemesterInfo(): void {
    this.contractService
      .getFifthSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getSixthSemesterInfo(): void {
    this.contractService
      .getSixthSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getSeventhSemesterInfo(): void {
    this.contractService
      .getSeventhSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  getEigthSemesterInfo(): void {
    this.contractService
      .getEigthSemesterInfo()
      .then((res2: any) => {
        console.log("RES2 = ", res2);
        this.studentArray = res2;
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }
}
