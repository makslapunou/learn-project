import { Host, Injectable, Self, SkipSelf } from "@angular/core";
import { CounterService } from "../counter.service";

@Injectable()
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
