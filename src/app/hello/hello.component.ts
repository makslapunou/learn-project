import { Component } from "@angular/core";
import { CounterService } from "../counter.service";

@Component({
  selector: "app-hello",
  templateUrl: "./hello.component.html",
  styleUrls: ["./hello.component.sass"],
})
export class HelloComponent {
  constructor(private counterService: CounterService) {}
}
