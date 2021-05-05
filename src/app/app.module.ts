import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello/hello.component";
import { ExtraModule } from "./extra/extra.module";

@NgModule({
  declarations: [AppComponent, HelloComponent],
  imports: [BrowserModule, AppRoutingModule, ExtraModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
