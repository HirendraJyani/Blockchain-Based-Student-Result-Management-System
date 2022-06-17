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
  semesterArray = [];
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

  firstSemGrade = {
    mathemetics: "",
    chemistry: "",
    humanValues: "",
    programming: "",
    civil: "",
    chemistryLab: "",
    humanValueActivities: "",
    cpLab: "",
    civilLab: "",
    camd: "",
    sodeca: "",
  };

  firstSemPoints = {
    mathemetics: 0,
    chemistry: 0,
    humanValues: 0,
    programming: 0,
    civil: 0,
    chemistryLab: 0,
    humanValueActivities: 0,
    cpLab: 0,
    civilLab: 0,
    camd: 0,
    sodeca: 0,
  };

  secondSemGrade = {
    mathemetics: "",
    physics: "",
    communication: "",
    mechanical: "",
    electrical: "",
    physicsLab: "",
    languageLab: "",
    manufacturing: "",
    electricalLab: "",
    caeg: "",
    sodeca: "",
  };
  secondSemPoints = {
    mathemetics: 0,
    physics: 0,
    communication: 0,
    mechanical: 0,
    electrical: 0,
    physicsLab: 0,
    languageLab: 0,
    manufacturing: 0,
    electricalLab: 0,
    caeg: 0,
    sodeca: 0,
  };
  thirdSemGrade = {
    mathemetics: "",
    economics: "",
    electronics: "",
    dsa: "",
    oop: "",
    software: "",
    dsaLab: "",
    oopLab: "",
    softwareLab: "",
    electronicsLab: "",
    training: "",
    sodeca: "",
  };
  thirdSemPoints = {
    mathemetics: 0,
    economics: 0,
    electronics: 0,
    dsa: 0,
    oop: 0,
    software: 0,
    dsaLab: 0,
    oopLab: 0,
    softwareLab: 0,
    electronicsLab: 0,
    training: 0,
    sodeca: 0,
  };
  fourthSemGrade = {
    mathemetics: "",
    communication: "",
    microprocessor: "",
    dbms: "",
    toc: "",
    networks: "",
    mpLab: "",
    dbmsLab: "",
    npLab: "",
    linux: "",
    javaLab: "",
    sodeca: "",
  };
  fourthSemPoints = {
    mathemetics: 0,
    communication: 0,
    microprocessor: 0,
    dbms: 0,
    toc: 0,
    networks: 0,
    mpLab: 0,
    dbmsLab: 0,
    npLab: 0,
    linux: 0,
    javaLab: 0,
    sodeca: 0,
  };
  fifthSemGrade = {
    itc: "",
    compiler: "",
    operating: "",
    graphics: "",
    algo: "",
    hci: "",
    graphicsLab: "",
    compilerLab: "",
    algoLab: "",
    javaLab: "",
    training: "",
    sodeca: "",
  };
  fifthSemPoints = {
    itc: 0,
    compiler: 0,
    operating: 0,
    graphics: 0,
    algo: 0,
    hci: 0,
    graphicsLab: 0,
    compilerLab: 0,
    algoLab: 0,
    javaLab: 0,
    training: 0,
    sodeca: 0,
  };
  sixthSemGrade = {
    image: "",
    machine: "",
    security: "",
    cao: "",
    ai: "",
    cloud: "",
    distributed: "",
    imageLab: "",
    machineLab: "",
    pythonLab: "",
    aapLab: "",
    sodeca: "",
  };
  sixthSemPoints = {
    image: 0,
    machine: 0,
    security: 0,
    cao: 0,
    ai: 0,
    cloud: 0,
    distributed: 0,
    imageLab: 0,
    machineLab: 0,
    pythonLab: 0,
    aapLab: 0,
    sodeca: 0,
  };
  seventhSemGrade = {
    iot: "",
    eedm: "",
    iotLab: "",
    aLab: "",
    sodeca: "",
  };
  seventhSemPoints = {
    iot: 0,
    eedm: 0,
    iotLab: 0,
    aLab: 0,
    sodeca: 0,
  };
  eigthSemGrade = {
    bda: "",
    dm: "",
    stvLab: "",
    bdaLab: "",
    training: "",
  };
  eigthSemPoints = {
    bda: 0,
    dm: 0,
    stvLab: 0,
    bdaLab: 0,
    training: 0,
  };
  sgpaObj = {
    firstSem: 0,
    secondSem: 0,
    thirdSem: 0,
    fourthSem: 0,
    fifthSem: 0,
    sixthSem: 0,
    seventhSem: 0,
    eigthSem: 0,
  };

  cgpaObj = {
    firstSem: 0,
    secondSem: 0,
    thirdSem: 0,
    fourthSem: 0,
    fifthSem: 0,
    sixthSem: 0,
    seventhSem: 0,
    eigthSem: 0,
  };

  finalResultObj = {
    firstSemTheory: 0,
    firstSemPrac: 0,
    firstSemDeca: 0,
    secondSemTheory: 0,
    secondSemPrac: 0,
    secondSemDeca: 0,
    thirdSemTheory: 0,
    thirdSemPrac: 0,
    thirdSemDeca: 0,
    fourthSemTheory: 0,
    fourthSemPrac: 0,
    fourthSemDeca: 0,
    fifthSemTheory: 0,
    fifthSemPrac: 0,
    fifthSemDeca: 0,
    sixthSemTheory: 0,
    sixthSemPrac: 0,
    sixthSemDeca: 0,
    seventhSemTheory: 0,
    seventhSemPrac: 0,
    seventhSemDeca: 0,
    eigthSemTheory: 0,
    eigthSemPrac: 0,
    eigthSemDeca: 0,
  };

  type: any;
  constructor(
    public uiDataService: UiDataService,
    private fb: FormBuilder,
    private contractService: ContractService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.semester = this.route.snapshot.params["sem"];
    this.studentId = this.route.snapshot.params["studentId"];
    this.type = this.route.snapshot.params["type"];
    console.log("student ID = ", this.studentId);
    console.log("student ID type = ", typeof this.studentId);
    console.log("SEM = ", this.semester);
    this.connectAccount();
    if (this.semester == 9) {
      this.finalResult();
    } else {
      this.initForm();
    }
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
        if (this.semester == 1) {
          this.getFirstSemesterInfo();
        }
        if (this.semester == 2) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
        }
        if (this.semester == 3) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
          this.getThirdSemesterInfo();
        }
        if (this.semester == 4) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
          this.getThirdSemesterInfo();
          this.getFourthSemesterInfo();
        }
        if (this.semester == 5) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
          this.getThirdSemesterInfo();
          this.getFourthSemesterInfo();
          this.getFifthSemesterInfo();
        }
        if (this.semester == 6) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
          this.getThirdSemesterInfo();
          this.getFourthSemesterInfo();
          this.getFifthSemesterInfo();
          this.getSixthSemesterInfo();
        }
        if (this.semester == 7) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
          this.getThirdSemesterInfo();
          this.getFourthSemesterInfo();
          this.getFifthSemesterInfo();
          this.getSixthSemesterInfo();
          this.getSeventhSemesterInfo();
        }
        if (this.semester == 8) {
          this.getFirstSemesterInfo();
          this.getSecondSemesterInfo();
          this.getThirdSemesterInfo();
          this.getFourthSemesterInfo();
          this.getFifthSemesterInfo();
          this.getSixthSemesterInfo();
          this.getSeventhSemesterInfo();
          this.getEigthSemesterInfo();
        }
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
          return d.studentId === this.studentId;
        });
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.firstSemGrade.mathemetics = this.gradeExchange(
            this.semesterArray[0].mathemetics
          );
          this.firstSemGrade.chemistry = this.gradeExchange(
            this.semesterArray[0].chemistry
          );
          this.firstSemGrade.humanValues = this.gradeExchange(
            this.semesterArray[0].humanValues
          );
          this.firstSemGrade.programming = this.gradeExchange(
            this.semesterArray[0].programming
          );
          this.firstSemGrade.civil = this.gradeExchange(
            this.semesterArray[0].civil
          );
          this.firstSemGrade.chemistryLab = this.gradeExchange(
            this.semesterArray[0].chemistryLab
          );
          this.firstSemGrade.humanValueActivities = this.gradeExchange(
            this.semesterArray[0].humanValueActivities
          );
          this.firstSemGrade.cpLab = this.gradeExchange(
            this.semesterArray[0].cpLab
          );
          this.firstSemGrade.civilLab = this.gradeExchange(
            this.semesterArray[0].civilLab
          );
          this.firstSemGrade.camd = this.gradeExchange(
            this.semesterArray[0].camd
          );
          this.firstSemGrade.sodeca = this.gradeExchange(
            this.semesterArray[0].sodeca
          );

          // tslint:disable-next-line:radix
          this.finalResultObj.firstSemTheory =
            parseInt(this.semesterArray[0].mathemetics) +
            parseInt(this.semesterArray[0].chemistry) +
            parseInt(this.semesterArray[0].humanValues) +
            parseInt(this.semesterArray[0].programming) +
            parseInt(this.semesterArray[0].civil);

          this.finalResultObj.firstSemPrac =
            parseInt(this.semesterArray[0].chemistryLab) +
            parseInt(this.semesterArray[0].humanValueActivities) +
            parseInt(this.semesterArray[0].cpLab) +
            parseInt(this.semesterArray[0].civilLab) +
            parseInt(this.semesterArray[0].camd);

          this.finalResultObj.firstSemDeca = parseInt(
            this.semesterArray[0].sodeca
          );

          this.firstSemPoints.mathemetics = this.pointExchange(
            this.semesterArray[0].mathemetics
          );
          this.firstSemPoints.chemistry = this.pointExchange(
            this.semesterArray[0].chemistry
          );
          this.firstSemPoints.humanValues = this.pointExchange(
            this.semesterArray[0].humanValues
          );
          this.firstSemPoints.programming = this.pointExchange(
            this.semesterArray[0].programming
          );
          this.firstSemPoints.civil = this.pointExchange(
            this.semesterArray[0].civil
          );
          this.firstSemPoints.chemistryLab = this.pointExchange(
            this.semesterArray[0].chemistryLab
          );
          this.firstSemPoints.humanValueActivities = this.pointExchange(
            this.semesterArray[0].humanValueActivities
          );
          this.firstSemPoints.cpLab = this.pointExchange(
            this.semesterArray[0].cpLab
          );
          this.firstSemPoints.civilLab = this.pointExchange(
            this.semesterArray[0].civilLab
          );
          this.firstSemPoints.camd = this.pointExchange(
            this.semesterArray[0].camd
          );
          this.firstSemPoints.sodeca = this.pointExchange(
            this.semesterArray[0].sodeca
          );
          this.sgpaObj.firstSem =
            (this.firstSemPoints.mathemetics * 4 +
              this.firstSemPoints.chemistry * 4 +
              this.firstSemPoints.humanValues * 2 +
              this.firstSemPoints.programming * 2 +
              this.firstSemPoints.civil * 2 +
              this.firstSemPoints.chemistryLab * 1 +
              this.firstSemPoints.humanValueActivities * 1 +
              this.firstSemPoints.cpLab * 1.5 +
              this.firstSemPoints.civilLab * 1 +
              this.firstSemPoints.camd * 1.5 +
              this.firstSemPoints.sodeca * 0.5) /
            20.5;

          // tslint:disable-next-line:radix
          this.sgpaObj.firstSem = parseFloat(this.sgpaObj.firstSem.toFixed(2));
          console.log("firstSemPoints = ", this.firstSemPoints);
          console.log("sgpaObj = ", this.sgpaObj.firstSem);
          this.cgpaObj.firstSem = this.sgpaObj.firstSem;

          // tslint:disable-next-line:radix
          this.cgpaObj.firstSem = parseFloat(this.cgpaObj.firstSem.toFixed(2));
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.secondSemGrade.mathemetics = this.gradeExchange(
            this.semesterArray[0].mathemetics
          );
          this.secondSemGrade.physics = this.gradeExchange(
            this.semesterArray[0].physics
          );
          this.secondSemGrade.communication = this.gradeExchange(
            this.semesterArray[0].communication
          );
          this.secondSemGrade.mechanical = this.gradeExchange(
            this.semesterArray[0].mechanical
          );
          this.secondSemGrade.electrical = this.gradeExchange(
            this.semesterArray[0].electrical
          );
          this.secondSemGrade.physicsLab = this.gradeExchange(
            this.semesterArray[0].physicsLab
          );
          this.secondSemGrade.languageLab = this.gradeExchange(
            this.semesterArray[0].languageLab
          );
          this.secondSemGrade.manufacturing = this.gradeExchange(
            this.semesterArray[0].manufacturing
          );
          this.secondSemGrade.electricalLab = this.gradeExchange(
            this.semesterArray[0].electricalLab
          );
          this.secondSemGrade.caeg = this.gradeExchange(
            this.semesterArray[0].caeg
          );
          this.secondSemGrade.sodeca = this.gradeExchange(
            this.semesterArray[0].sodeca
          );

          this.secondSemPoints.mathemetics = this.pointExchange(
            this.semesterArray[0].mathemetics
          );
          this.secondSemPoints.physics = this.pointExchange(
            this.semesterArray[0].physics
          );
          this.secondSemPoints.communication = this.pointExchange(
            this.semesterArray[0].communication
          );
          this.secondSemPoints.mechanical = this.pointExchange(
            this.semesterArray[0].mechanical
          );
          this.secondSemPoints.electrical = this.pointExchange(
            this.semesterArray[0].electrical
          );
          this.secondSemPoints.physicsLab = this.pointExchange(
            this.semesterArray[0].physicsLab
          );
          this.secondSemPoints.languageLab = this.pointExchange(
            this.semesterArray[0].languageLab
          );
          this.secondSemPoints.manufacturing = this.pointExchange(
            this.semesterArray[0].manufacturing
          );
          this.secondSemPoints.electricalLab = this.pointExchange(
            this.semesterArray[0].electricalLab
          );
          this.secondSemPoints.caeg = this.pointExchange(
            this.semesterArray[0].caeg
          );
          this.secondSemPoints.sodeca = this.pointExchange(
            this.semesterArray[0].sodeca
          );

          this.finalResultObj.secondSemTheory =
            parseInt(this.semesterArray[0].mathemetics) +
            parseInt(this.semesterArray[0].physics) +
            parseInt(this.semesterArray[0].communication) +
            parseInt(this.semesterArray[0].mechanical) +
            parseInt(this.semesterArray[0].electrical);

          this.finalResultObj.secondSemPrac =
            parseInt(this.semesterArray[0].physicsLab) +
            parseInt(this.semesterArray[0].languageLab) +
            parseInt(this.semesterArray[0].manufacturing) +
            parseInt(this.semesterArray[0].electricalLab) +
            parseInt(this.semesterArray[0].caeg);

          this.finalResultObj.secondSemDeca = parseInt(
            this.semesterArray[0].sodeca
          );

          this.sgpaObj.secondSem =
            (this.secondSemPoints.mathemetics * 4 +
              this.secondSemPoints.physics * 4 +
              this.secondSemPoints.communication * 2 +
              this.secondSemPoints.mechanical * 2 +
              this.secondSemPoints.electrical * 2 +
              this.secondSemPoints.physicsLab * 1 +
              this.secondSemPoints.languageLab * 1 +
              this.secondSemPoints.manufacturing * 1.5 +
              this.secondSemPoints.electricalLab * 1 +
              this.secondSemPoints.caeg * 1.5 +
              this.secondSemPoints.sodeca * 0.5) /
            20.5;

          // tslint:disable-next-line:radix
          this.sgpaObj.secondSem = parseFloat(
            this.sgpaObj.secondSem.toFixed(2)
          );
          this.cgpaObj.secondSem = parseFloat(
            this.cgpaObj.secondSem.toFixed(2)
          );
          this.cgpaObj.secondSem =
            (this.sgpaObj.firstSem + this.sgpaObj.secondSem) / 2;

          // tslint:disable-next-line:radix
          this.cgpaObj.secondSem = parseFloat(
            this.cgpaObj.secondSem.toFixed(2)
          );
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.thirdSemGrade.mathemetics = this.gradeExchange(
            this.semesterArray[0].mathemetics
          );
          this.thirdSemGrade.economics = this.gradeExchange(
            this.semesterArray[0].economics
          );
          this.thirdSemGrade.electronics = this.gradeExchange(
            this.semesterArray[0].electronics
          );
          this.thirdSemGrade.dsa = this.gradeExchange(
            this.semesterArray[0].dsa
          );
          this.thirdSemGrade.oop = this.gradeExchange(
            this.semesterArray[0].oop
          );
          this.thirdSemGrade.software = this.gradeExchange(
            this.semesterArray[0].software
          );
          this.thirdSemGrade.dsaLab = this.gradeExchange(
            this.semesterArray[0].dsaLab
          );
          this.thirdSemGrade.oopLab = this.gradeExchange(
            this.semesterArray[0].oopLab
          );
          this.thirdSemGrade.electronicsLab = this.gradeExchange(
            this.semesterArray[0].electronicsLab
          );
          this.thirdSemGrade.softwareLab = this.gradeExchange(
            this.semesterArray[0].softwareLab
          );
          this.thirdSemGrade.training = this.gradeExchange(
            this.semesterArray[0].training
          );
          this.thirdSemGrade.sodeca = this.gradeExchange(
            this.semesterArray[0].sodeca
          );

          this.finalResultObj.thirdSemTheory =
            parseInt(this.semesterArray[0].mathemetics) +
            parseInt(this.semesterArray[0].economics) +
            parseInt(this.semesterArray[0].electronics) +
            parseInt(this.semesterArray[0].dsa) +
            parseInt(this.semesterArray[0].oop) +
            parseInt(this.semesterArray[0].software);

          this.finalResultObj.thirdSemPrac =
            parseInt(this.semesterArray[0].dsaLab) +
            parseInt(this.semesterArray[0].oopLab) +
            parseInt(this.semesterArray[0].softwareLab) +
            parseInt(this.semesterArray[0].electronicsLab);

          this.finalResultObj.thirdSemDeca = 40;

          console.log("thirdSemGrade = ", this.thirdSemGrade);

          this.thirdSemPoints.mathemetics = this.pointExchange(
            this.semesterArray[0].mathemetics
          );
          this.thirdSemPoints.economics = this.pointExchange(
            this.semesterArray[0].economics
          );
          this.thirdSemPoints.electronics = this.pointExchange(
            this.semesterArray[0].electronics
          );
          this.thirdSemPoints.dsa = this.pointExchange(
            this.semesterArray[0].dsa
          );
          this.thirdSemPoints.oop = this.pointExchange(
            this.semesterArray[0].oop
          );
          this.thirdSemPoints.software = this.pointExchange(
            this.semesterArray[0].software
          );
          this.thirdSemPoints.dsaLab = this.pointExchange(
            this.semesterArray[0].dsaLab
          );
          this.thirdSemPoints.oopLab = this.pointExchange(
            this.semesterArray[0].oopLab
          );
          this.thirdSemPoints.electronicsLab = this.pointExchange(
            this.semesterArray[0].electronicsLab
          );
          this.thirdSemPoints.softwareLab = this.pointExchange(
            this.semesterArray[0].softwareLab
          );
          this.thirdSemPoints.training = this.pointExchange(
            this.semesterArray[0].training
          );
          this.thirdSemPoints.sodeca = this.pointExchange(
            this.semesterArray[0].sodeca
          );

          console.log("thirdSemPoints = ", this.thirdSemPoints);

          this.sgpaObj.thirdSem =
            (this.thirdSemPoints.mathemetics * 3 +
              this.thirdSemPoints.economics * 2 +
              this.thirdSemPoints.electronics * 3 +
              this.thirdSemPoints.dsa * 3 +
              this.thirdSemPoints.oop * 3 +
              this.thirdSemPoints.software * 3 +
              this.thirdSemPoints.dsaLab * 1.5 +
              this.thirdSemPoints.oopLab * 1.5 +
              this.thirdSemPoints.softwareLab * 1.5 +
              this.thirdSemPoints.electronicsLab * 1.5 +
              this.thirdSemPoints.training * 1) /
            23;

          // tslint:disable-next-line:radix
          this.sgpaObj.thirdSem = parseFloat(this.sgpaObj.thirdSem.toFixed(2));
          this.cgpaObj.thirdSem =
            (this.sgpaObj.firstSem +
              this.sgpaObj.secondSem +
              this.sgpaObj.thirdSem) /
            3;

          // tslint:disable-next-line:radix
          this.cgpaObj.thirdSem = parseFloat(this.cgpaObj.thirdSem.toFixed(2));
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.fourthSemGrade.mathemetics = this.gradeExchange(
            this.semesterArray[0].mathemetics
          );
          this.fourthSemGrade.communication = this.gradeExchange(
            this.semesterArray[0].communication
          );
          this.fourthSemGrade.microprocessor = this.gradeExchange(
            this.semesterArray[0].microprocessor
          );
          this.fourthSemGrade.dbms = this.gradeExchange(
            this.semesterArray[0].dbms
          );
          this.fourthSemGrade.toc = this.gradeExchange(
            this.semesterArray[0].toc
          );
          this.fourthSemGrade.networks = this.gradeExchange(
            this.semesterArray[0].networks
          );
          this.fourthSemGrade.mpLab = this.gradeExchange(
            this.semesterArray[0].mpLab
          );
          this.fourthSemGrade.dbmsLab = this.gradeExchange(
            this.semesterArray[0].dbmsLab
          );
          this.fourthSemGrade.npLab = this.gradeExchange(
            this.semesterArray[0].npLab
          );
          this.fourthSemGrade.linux = this.gradeExchange(
            this.semesterArray[0].linux
          );
          this.fourthSemGrade.javaLab = this.gradeExchange(
            this.semesterArray[0].javaLab
          );
          this.fourthSemGrade.sodeca = this.gradeExchange("100");

          this.fourthSemPoints.mathemetics = this.pointExchange(
            this.semesterArray[0].mathemetics
          );
          this.fourthSemPoints.communication = this.pointExchange(
            this.semesterArray[0].communication
          );
          this.fourthSemPoints.microprocessor = this.pointExchange(
            this.semesterArray[0].microprocessor
          );
          this.fourthSemPoints.dbms = this.pointExchange(
            this.semesterArray[0].dbms
          );
          this.fourthSemPoints.toc = this.pointExchange(
            this.semesterArray[0].toc
          );
          this.fourthSemPoints.networks = this.pointExchange(
            this.semesterArray[0].networks
          );
          this.fourthSemPoints.mpLab = this.pointExchange(
            this.semesterArray[0].mpLab
          );
          this.fourthSemPoints.dbmsLab = this.pointExchange(
            this.semesterArray[0].dbmsLab
          );
          this.fourthSemPoints.npLab = this.pointExchange(
            this.semesterArray[0].npLab
          );
          this.fourthSemPoints.linux = this.pointExchange(
            this.semesterArray[0].linux
          );
          this.fourthSemPoints.javaLab = this.pointExchange(
            this.semesterArray[0].javaLab
          );
          this.fourthSemPoints.sodeca = this.pointExchange("A++");

          this.finalResultObj.fourthSemTheory =
            parseInt(this.semesterArray[0].mathemetics) +
            parseInt(this.semesterArray[0].communication) +
            parseInt(this.semesterArray[0].microprocessor) +
            parseInt(this.semesterArray[0].dbms) +
            parseInt(this.semesterArray[0].toc) +
            parseInt(this.semesterArray[0].networks);

          this.finalResultObj.fourthSemPrac =
            parseInt(this.semesterArray[0].mpLab) +
            parseInt(this.semesterArray[0].dbmsLab) +
            parseInt(this.semesterArray[0].npLab) +
            parseInt(this.semesterArray[0].linux) +
            parseInt(this.semesterArray[0].javaLab);

          this.finalResultObj.fourthSemDeca = 45;

          this.sgpaObj.fourthSem =
            (this.fourthSemPoints.mathemetics * 3 +
              this.fourthSemPoints.communication * 2 +
              this.fourthSemPoints.microprocessor * 3 +
              this.fourthSemPoints.dbms * 3 +
              this.fourthSemPoints.toc * 3 +
              this.fourthSemPoints.networks * 3 +
              this.fourthSemPoints.mpLab * 1 +
              this.fourthSemPoints.dbmsLab * 1.5 +
              this.fourthSemPoints.npLab * 1.5 +
              this.fourthSemPoints.linux * 1 +
              this.fourthSemPoints.javaLab * 1) /
            23;

          this.sgpaObj.fourthSem = parseFloat(
            this.sgpaObj.fourthSem.toFixed(2)
          );
          this.cgpaObj.fourthSem =
            (this.sgpaObj.firstSem +
              this.sgpaObj.secondSem +
              this.sgpaObj.thirdSem +
              this.sgpaObj.fourthSem) /
            4;

          this.cgpaObj.fourthSem = parseFloat(
            this.cgpaObj.fourthSem.toFixed(2)
          );
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.fifthSemGrade.itc = this.gradeExchange(
            this.semesterArray[0].itc
          );
          this.fifthSemGrade.compiler = this.gradeExchange(
            this.semesterArray[0].compiler
          );
          this.fifthSemGrade.operating = this.gradeExchange(
            this.semesterArray[0].operating
          );
          this.fifthSemGrade.graphics = this.gradeExchange(
            this.semesterArray[0].graphics
          );
          this.fifthSemGrade.algo = this.gradeExchange(
            this.semesterArray[0].algo
          );
          this.fifthSemGrade.hci = this.gradeExchange(
            this.semesterArray[0].hci
          );
          this.fifthSemGrade.graphicsLab = this.gradeExchange(
            this.semesterArray[0].graphicsLab
          );
          this.fifthSemGrade.compilerLab = this.gradeExchange(
            this.semesterArray[0].compilerLab
          );
          this.fifthSemGrade.algoLab = this.gradeExchange(
            this.semesterArray[0].algoLab
          );
          this.fifthSemGrade.javaLab = this.gradeExchange(
            this.semesterArray[0].javaLab
          );
          this.fifthSemGrade.training = this.gradeExchange(
            this.semesterArray[0].training
          );
          this.fifthSemGrade.sodeca = this.gradeExchange("100");

          this.fifthSemPoints.itc = this.pointExchange(
            this.semesterArray[0].itc
          );
          this.fifthSemPoints.compiler = this.pointExchange(
            this.semesterArray[0].compiler
          );
          this.fifthSemPoints.operating = this.pointExchange(
            this.semesterArray[0].operating
          );
          this.fifthSemPoints.graphics = this.pointExchange(
            this.semesterArray[0].graphics
          );
          this.fifthSemPoints.algo = this.pointExchange(
            this.semesterArray[0].algo
          );
          this.fifthSemPoints.hci = this.pointExchange(
            this.semesterArray[0].hci
          );
          this.fifthSemPoints.graphicsLab = this.pointExchange(
            this.semesterArray[0].graphicsLab
          );
          this.fifthSemPoints.compilerLab = this.pointExchange(
            this.semesterArray[0].compilerLab
          );
          this.fifthSemPoints.algoLab = this.pointExchange(
            this.semesterArray[0].algoLab
          );
          this.fifthSemPoints.javaLab = this.pointExchange(
            this.semesterArray[0].javaLab
          );
          this.fifthSemPoints.training = this.pointExchange(
            this.semesterArray[0].training
          );
          this.fifthSemPoints.sodeca = this.pointExchange("A++");

          this.finalResultObj.fifthSemTheory =
            parseInt(this.semesterArray[0].itc) +
            parseInt(this.semesterArray[0].compiler) +
            parseInt(this.semesterArray[0].operating) +
            parseInt(this.semesterArray[0].graphics) +
            parseInt(this.semesterArray[0].algo) +
            parseInt(this.semesterArray[0].hci);

          this.finalResultObj.fifthSemPrac =
            parseInt(this.semesterArray[0].graphicsLab) +
            parseInt(this.semesterArray[0].compilerLab) +
            parseInt(this.semesterArray[0].algoLab) +
            parseInt(this.semesterArray[0].javaLab);

          this.finalResultObj.fifthSemDeca = 40;

          this.sgpaObj.fifthSem =
            (this.fifthSemPoints.itc * 2 +
              this.fifthSemPoints.compiler * 3 +
              this.fifthSemPoints.operating * 3 +
              this.fifthSemPoints.graphics * 3 +
              this.fifthSemPoints.algo * 3 +
              this.fifthSemPoints.hci * 2 +
              this.fifthSemPoints.graphicsLab * 1 +
              this.fifthSemPoints.compilerLab * 1 +
              this.fifthSemPoints.algoLab * 1 +
              this.fifthSemPoints.javaLab * 1 +
              this.fifthSemPoints.training * 2.5) /
            22.5;

          this.sgpaObj.fifthSem = parseFloat(this.sgpaObj.fifthSem.toFixed(2));
          this.cgpaObj.fifthSem =
            (this.sgpaObj.firstSem +
              this.sgpaObj.secondSem +
              this.sgpaObj.thirdSem +
              this.sgpaObj.fourthSem +
              this.sgpaObj.fifthSem) /
            5;

          this.cgpaObj.fifthSem = parseFloat(this.cgpaObj.fifthSem.toFixed(2));
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.sixthSemGrade.image = this.gradeExchange(
            this.semesterArray[0].image
          );
          this.sixthSemGrade.machine = this.gradeExchange(
            this.semesterArray[0].machine
          );
          this.sixthSemGrade.security = this.gradeExchange(
            this.semesterArray[0].security
          );
          this.sixthSemGrade.cao = this.gradeExchange(
            this.semesterArray[0].cao
          );
          this.sixthSemGrade.ai = this.gradeExchange(this.semesterArray[0].ai);
          this.sixthSemGrade.cloud = this.gradeExchange(
            this.semesterArray[0].cloud
          );
          this.sixthSemGrade.distributed = this.gradeExchange(
            this.semesterArray[0].distributed
          );
          this.sixthSemGrade.imageLab = this.gradeExchange(
            this.semesterArray[0].imageLab
          );
          this.sixthSemGrade.machineLab = this.gradeExchange(
            this.semesterArray[0].machineLab
          );
          this.sixthSemGrade.pythonLab = this.gradeExchange(
            this.semesterArray[0].pythonLab
          );
          this.sixthSemGrade.aapLab = this.gradeExchange(
            this.semesterArray[0].aapLab
          );
          this.sixthSemGrade.sodeca = this.gradeExchange("100");

          this.sixthSemPoints.image = this.pointExchange(
            this.semesterArray[0].image
          );
          this.sixthSemPoints.machine = this.pointExchange(
            this.semesterArray[0].machine
          );
          this.sixthSemPoints.security = this.pointExchange(
            this.semesterArray[0].security
          );
          this.sixthSemPoints.cao = this.pointExchange(
            this.semesterArray[0].cao
          );
          this.sixthSemPoints.ai = this.pointExchange(this.semesterArray[0].ai);
          this.sixthSemPoints.cloud = this.pointExchange(
            this.semesterArray[0].cloud
          );
          this.sixthSemPoints.distributed = this.pointExchange(
            this.semesterArray[0].distributed
          );
          this.sixthSemPoints.imageLab = this.pointExchange(
            this.semesterArray[0].imageLab
          );
          this.sixthSemPoints.machineLab = this.pointExchange(
            this.semesterArray[0].machineLab
          );
          this.sixthSemPoints.pythonLab = this.pointExchange(
            this.semesterArray[0].pythonLab
          );
          this.sixthSemPoints.aapLab = this.pointExchange(
            this.semesterArray[0].aapLab
          );
          this.sixthSemPoints.sodeca = this.pointExchange("A++");

          this.sgpaObj.sixthSem =
            (this.sixthSemPoints.image * 2 +
              this.sixthSemPoints.machine * 3 +
              this.sixthSemPoints.security * 2 +
              this.sixthSemPoints.cao * 3 +
              this.sixthSemPoints.ai * 2 +
              this.sixthSemPoints.cloud * 3 +
              this.sixthSemPoints.distributed * 2 +
              this.sixthSemPoints.imageLab * 1.5 +
              this.sixthSemPoints.machineLab * 1.5 +
              this.sixthSemPoints.pythonLab * 1.5 +
              this.sixthSemPoints.aapLab * 1.5) /
            23;

          this.finalResultObj.sixthSemTheory =
            parseInt(this.semesterArray[0].image) +
            parseInt(this.semesterArray[0].machine) +
            parseInt(this.semesterArray[0].security) +
            parseInt(this.semesterArray[0].cao) +
            parseInt(this.semesterArray[0].ai) +
            parseInt(this.semesterArray[0].cloud) +
            parseInt(this.semesterArray[0].distributed);

          this.finalResultObj.sixthSemPrac =
            parseInt(this.semesterArray[0].imageLab) +
            parseInt(this.semesterArray[0].machineLab) +
            parseInt(this.semesterArray[0].pythonLab) +
            parseInt(this.semesterArray[0].aapLab);

          this.finalResultObj.sixthSemDeca = 45;

          this.sgpaObj.sixthSem = parseFloat(this.sgpaObj.sixthSem.toFixed(2));
          this.cgpaObj.sixthSem =
            (this.sgpaObj.firstSem +
              this.sgpaObj.secondSem +
              this.sgpaObj.thirdSem +
              this.sgpaObj.fourthSem +
              this.sgpaObj.fifthSem +
              this.sgpaObj.sixthSem) /
            6;

          this.cgpaObj.sixthSem = parseFloat(this.cgpaObj.sixthSem.toFixed(2));
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.seventhSemGrade.iot = this.gradeExchange(
            this.semesterArray[0].iot
          );
          this.seventhSemGrade.eedm = this.gradeExchange(
            this.semesterArray[0].eedm
          );
          this.seventhSemGrade.iotLab = this.gradeExchange(
            this.semesterArray[0].iotLab
          );
          this.seventhSemGrade.aLab = this.gradeExchange(
            this.semesterArray[0].aLab
          );
          this.seventhSemGrade.sodeca = this.gradeExchange(
            this.semesterArray[0].sodeca
          );

          this.seventhSemPoints.iot = this.pointExchange(
            this.semesterArray[0].iot
          );
          this.seventhSemPoints.eedm = this.pointExchange(
            this.semesterArray[0].eedm
          );
          this.seventhSemPoints.iotLab = this.pointExchange(
            this.semesterArray[0].iotLab
          );
          this.seventhSemPoints.aLab = this.pointExchange(
            this.semesterArray[0].aLab
          );
          this.seventhSemPoints.sodeca = this.pointExchange(
            this.semesterArray[0].sodeca
          );

          this.finalResultObj.seventhSemTheory =
            parseInt(this.semesterArray[0].iot) +
            parseInt(this.semesterArray[0].eedm);

          this.finalResultObj.seventhSemPrac =
            parseInt(this.semesterArray[0].iotLab) +
            parseInt(this.semesterArray[0].aLab);

          this.finalResultObj.seventhSemDeca = parseInt(
            this.semesterArray[0].sodeca
          );

          this.sgpaObj.seventhSem =
            (this.seventhSemPoints.iot * 2 +
              this.seventhSemPoints.eedm * 3 +
              this.seventhSemPoints.iotLab * 2 +
              this.seventhSemPoints.aLab * 2 +
              this.seventhSemPoints.sodeca * 0.5) /
            9.5;

          this.sgpaObj.seventhSem = parseFloat(
            this.sgpaObj.seventhSem.toFixed(2)
          );
          this.cgpaObj.seventhSem =
            (this.sgpaObj.firstSem +
              this.sgpaObj.secondSem +
              this.sgpaObj.thirdSem +
              this.sgpaObj.fourthSem +
              this.sgpaObj.fifthSem +
              this.sgpaObj.sixthSem +
              this.sgpaObj.seventhSem) /
            7;

          this.cgpaObj.seventhSem = parseFloat(
            this.cgpaObj.seventhSem.toFixed(2)
          );
        }
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
        this.semesterArray = res2.filter((d) => d.studentId === this.studentId);
        console.log("semesterArray = ", this.semesterArray);
        if (this.semesterArray.length > 0) {
          this.eigthSemGrade.bda = this.gradeExchange(
            this.semesterArray[0].bda
          );
          this.eigthSemGrade.dm = this.gradeExchange(this.semesterArray[0].dm);
          this.eigthSemGrade.stvLab = this.gradeExchange(
            this.semesterArray[0].stvLab
          );
          this.eigthSemGrade.bdaLab = this.gradeExchange(
            this.semesterArray[0].bdaLab
          );
          this.eigthSemGrade.training = this.gradeExchange(
            this.semesterArray[0].training
          );

          this.eigthSemPoints.bda = this.pointExchange(
            this.semesterArray[0].bda
          );
          this.eigthSemPoints.dm = this.pointExchange(this.semesterArray[0].dm);
          this.eigthSemPoints.stvLab = this.pointExchange(
            this.semesterArray[0].stvLab
          );
          this.eigthSemPoints.bdaLab = this.pointExchange(
            this.semesterArray[0].bdaLab
          );
          this.eigthSemPoints.training = this.pointExchange(
            this.semesterArray[0].training
          );

          this.finalResultObj.eigthSemTheory =
            parseInt(this.semesterArray[0].bda) +
            parseInt(this.semesterArray[0].dm);

          this.finalResultObj.eigthSemPrac =
            parseInt(this.semesterArray[0].stvLab) +
            parseInt(this.semesterArray[0].bdaLab);

          this.finalResultObj.eigthSemDeca = parseInt(
            this.semesterArray[0].training
          );

          console.log("finalResultObj = ", this.finalResultObj);

          this.sgpaObj.eigthSem =
            (this.eigthSemPoints.bda * 2 +
              this.eigthSemPoints.dm * 3 +
              this.eigthSemPoints.stvLab * 2 +
              this.eigthSemPoints.bdaLab * 2 +
              this.eigthSemPoints.training * 2) /
            11;
          // tslint:disable-next-line:radix
          this.sgpaObj.eigthSem = parseFloat(this.sgpaObj.eigthSem.toFixed(2));

          this.cgpaObj.eigthSem =
            (this.sgpaObj.firstSem +
              this.sgpaObj.secondSem +
              this.sgpaObj.thirdSem +
              this.sgpaObj.fourthSem +
              this.sgpaObj.fifthSem +
              this.sgpaObj.sixthSem +
              this.sgpaObj.seventhSem +
              this.sgpaObj.eigthSem) /
            8;
          // tslint:disable-next-line:radix
          this.cgpaObj.eigthSem = parseFloat(this.cgpaObj.eigthSem.toFixed(2));
        }
      })
      .catch((err) => {
        console.log("get sem error - ", err);
      });
  }

  gradeExchange(value: string): string {
    // tslint:disable-next-line:radix
    const num = parseInt(value);
    if (num >= 90) {
      return "A++";
    }
    if (num >= 85 && num < 90) {
      return "A+";
    }
    if (num >= 80 && num < 85) {
      return "A";
    }
    if (num >= 75 && num < 80) {
      return "B+";
    }
    if (num >= 70 && num < 75) {
      return "B";
    }
    if (num >= 65 && num < 70) {
      return "C+";
    }
    if (num >= 60 && num < 65) {
      return "C";
    }
    if (num >= 55 && num < 60) {
      return "D+";
    }
    if (num >= 50 && num < 55) {
      return "D";
    }
    if (num >= 45 && num < 50) {
      return "E+";
    }
    if (num >= 40 && num < 45) {
      return "E";
    }
    if (num < 40) {
      return "F";
    }
  }

  pointExchange(value: string): number {
    // tslint:disable-next-line:radix
    const num = parseInt(value);
    if (num >= 90) {
      return 10;
    }
    if (num >= 85 && num < 90) {
      return 9;
    }
    if (num >= 80 && num < 85) {
      return 8.5;
    }
    if (num >= 75 && num < 80) {
      return 8;
    }
    if (num >= 70 && num < 75) {
      return 7.5;
    }
    if (num >= 65 && num < 70) {
      return 7;
    }
    if (num >= 60 && num < 65) {
      return 6.5;
    }
    if (num >= 55 && num < 60) {
      return 6;
    }
    if (num >= 50 && num < 55) {
      return 5.5;
    }
    if (num >= 45 && num < 50) {
      return 5;
    }
    if (num >= 40 && num < 45) {
      return 4;
    }
    if (num < 40) {
      return 0;
    }
  }

  finalResult(): void {
    this.getFirstSemesterInfo();
    this.getSecondSemesterInfo();
    this.getThirdSemesterInfo();
    this.getFourthSemesterInfo();
    this.getFifthSemesterInfo();
    this.getSixthSemesterInfo();
    this.getSeventhSemesterInfo();
    this.getEigthSemesterInfo();
  }
}
