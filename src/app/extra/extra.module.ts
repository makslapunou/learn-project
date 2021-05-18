import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraComponent } from './extra/extra.component';
import { RouterModule, Routes } from '@angular/router';
import { CounterService } from '../counter.service';

const routes: Routes = [
  {
    path: '',
    component: ExtraComponent,
  },
];

@NgModule({
  declarations: [ExtraComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  //providers: [CounterService],
})
export class ExtraModule {}
