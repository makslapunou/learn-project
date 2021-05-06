import { Injectable } from "@angular/core";
import { CounterService } from "../counter.service";

@Injectable({
  providedIn: "root",
})
export class ExtraService {
  constructor(private counterService: CounterService) {}

  increase() {
    this.counterService.increase();
  }

  decrease() {
    this.counterService.decrease();
  }

  getCounter(): number {
    return this.counterService.counter;
  }
}
