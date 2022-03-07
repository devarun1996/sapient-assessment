import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { TimerRoutingModule } from './timer-routing.module';
import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { ClickCountComponent } from './click-count/click-count.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    TimerComponent,
    DisplayComponent,
    InputComponent,
    TimeStampComponent,
    ClickCountComponent
  ],
  imports: [
    CommonModule,
    TimerRoutingModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class TimerModule { }
