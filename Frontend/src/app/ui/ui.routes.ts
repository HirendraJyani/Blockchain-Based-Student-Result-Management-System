import { Routes } from "@angular/router";
import { AdminComponent } from "./admin/admin.component";

// Components
import { HomeComponent } from "./home/home.component";
import { SemesterFormListComponent } from "./semester-form-list/semester-form-list.component";
import { SemesterFormComponent } from "./semester-form/semester-form.component";
import { SemesterListComponent } from "./semester-list/semester-list.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentListComponent } from "./student-list/student-list.component";

export const UiRoute: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "student-list",
    component: StudentListComponent,
  },
  {
    path: "semester-list",
    component: SemesterListComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
  },
  {
    path: "student-form/:classId/:type",
    component: StudentFormComponent,
  },
  {
    path: "semester-form-list/:studentId/:type",
    component: SemesterFormListComponent,
  },
  {
    path: "semester-form/:sem/:studentId/:type",
    component: SemesterFormComponent,
  },
];
