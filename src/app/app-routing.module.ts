import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExtraModule } from "./extra/extra.module";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./extra/extra.module").then((m) => m.ExtraModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
