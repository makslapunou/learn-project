export class CounterService {
  counter: number = 0;

  increase() {
    this.counter++;
  }

  decrease() {
    this.counter--;
  }
}
