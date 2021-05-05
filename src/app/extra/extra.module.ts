import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ExtraComponent } from "./extra/extra.component";
import { Route, Router, RouterModule, Routes } from "@angular/router";

const routes: Route[] = [
  {
    path: "",
    component: ExtraComponent,
  },
];

@NgModule({
  declarations: [ExtraComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ExtraModule {}
