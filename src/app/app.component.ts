import { Component } from "@angular/core";
import { CounterService } from "./counter.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [CounterService],
})
export class AppComponent {
  constructor(private counterService: CounterService) {}
}
