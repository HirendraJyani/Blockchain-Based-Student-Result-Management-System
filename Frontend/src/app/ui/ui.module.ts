import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

// Components
import { HomeComponent } from "./home/home.component";
import { AppMaterialModule } from "../app-material.module";

// Routing
import { UiRoute } from "./ui.routes";
import { RouterModule } from "@angular/router";

// Services
import { ContractService } from "../services/contract/contract.service";
import { ThreeBox } from "../services/3box.service";
import { StudentListComponent } from "./student-list/student-list.component";
import { SemesterListComponent } from "./semester-list/semester-list.component";
import { AdminComponent } from "./admin/admin.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { SemesterFormListComponent } from "./semester-form-list/semester-form-list.component";
import { SemesterFormComponent } from './semester-form/semester-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    StudentListComponent,
    SemesterListComponent,
    AdminComponent,
    StudentFormComponent,
    SemesterFormListComponent,
    SemesterFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UiRoute),
    AppMaterialModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
  providers: [ContractService, ThreeBox],
})
export class UiModule {}
