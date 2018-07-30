import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatBadgeModule } from '@angular/material/badge';

import { CounterButtonComponent } from './counter-button/counter-button.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatBadgeModule
  ],
  declarations: [CounterButtonComponent],
  exports: [ CounterButtonComponent ]
})
export class MyNewLibModule { }
