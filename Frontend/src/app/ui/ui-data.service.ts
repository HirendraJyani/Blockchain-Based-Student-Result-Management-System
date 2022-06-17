import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class UiDataService {
  classFormGroup: FormGroup;
  studentFormGroup: FormGroup;
  semesterFormGroup: FormGroup;

  constructor() {}
}
