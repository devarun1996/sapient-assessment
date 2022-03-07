import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickCountComponent } from './click-count/click-count.component';
import { DisplayComponent } from './display/display.component';
import { InputComponent } from './input/input.component';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { TimerComponent } from './timer/timer.component';
import { TimerServiceRoutingModule } from './timer-service-routing.module';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [
    ClickCountComponent,
    DisplayComponent,
    TimeStampComponent,
    InputComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimerServiceRoutingModule,
    MatGridListModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class TimerServiceModule { }
