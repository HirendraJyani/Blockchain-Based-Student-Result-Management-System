import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-semester-form-list",
  templateUrl: "./semester-form-list.component.html",
  styleUrls: ["./semester-form-list.component.scss"],
})
export class SemesterFormListComponent implements OnInit {
  studentId: any;
  type: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.studentId = this.route.snapshot.params["studentId"];
    this.type = this.route.snapshot.params["type"];
  }
}
