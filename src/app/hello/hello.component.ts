import { Component, OnInit, Self } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.sass"],
  providers: [CounterService],
})
export class HelloComponent {
  constructor(private counterService: CounterService) {}
}
