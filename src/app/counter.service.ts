import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterService {
  counter: number = 0;

  increase(): void {
    this.counter++;
  }

  decrease(): void {
    this.counter--;
  }
}
