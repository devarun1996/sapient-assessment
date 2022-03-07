import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TimerManageService } from '../timer-manage.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor( private snackBar: MatSnackBar, private timerService: TimerManageService) { }

  pausedArray: number[] = [];
  isPaused = true;
  timerValue = 0;
  isFirst = true;

  ngOnInit(): void {

    this.timerService.pausedValue.subscribe(res => {

      if (res === -1) {

        this.pausedArray = [];
      } else {

        this.pausedArray.push(res);
      }
    });
  }

  action (type: string) {

    if (type === 'start-pause') {

      if (this.isFirst) {

        if (this.timerValue > 0) {

          this.timerService.timerValue.next(this.timerValue);
          this.timerService.actionValue.next('start');
          this.timerService.timestamp.next(
            {
              timestamp: new Date(),
              action: 'started'
            }
          );
          this.timerService.startCounter.next(1);
          this.isFirst = false;
          this.isPaused = false;
          return;
        } else {

          this.snackBar.open('Timer Limit must be more than 0!', 'Dismiss');
          return;
        }
      }
        if (this.isPaused) {

          this.timerService.actionValue.next('start');
          this.timerService.timestamp.next(
            {
              timestamp: new Date(),
              action: 'started'
            }
          );
          this.timerService.startCounter.next(1);
          this.isPaused = false;
        } else {

          this.timerService.actionValue.next('pause');
          this.timerService.timestamp.next(
            {
              timestamp: new Date(),
              action: 'paused'
            }
          );
          this.timerService.pauseCounter.next(1);
          this.isPaused = true;
        }
    } else if (type === 'reset') {
      
      if (this.timerValue > 0) {
        
        this.timerService.timerValue.next(this.timerValue);
        this.timerService.actionValue.next('reset');
        this.timerService.timestamp.next(-1);
        this.timerService.startCounter.next(-1);
        this.timerService.pauseCounter.next(-1);
        this.isPaused = true;
      } else {

        this.snackBar.open('Timer Limit must be more than 0!', 'Dismiss');
      }
    }
  }

}
