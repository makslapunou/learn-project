import { Component, SkipSelf } from '@angular/core';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss'],
})
export class ExtraComponent {
  constructor(@SkipSelf() public counter: CounterService) {}
}
