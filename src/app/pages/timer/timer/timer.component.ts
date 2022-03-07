import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  constructor( private snackBar: MatSnackBar) { }

  timerValue = 0;
  actionValue = '';
  pausedArray: number[] = [];
  timestampArray: any[] = [];
  startCounter = 0;
  pauseCounter = 0;

  ngOnInit(): void {
  }

  setTimer(event: any) {
    this.timerValue = event;
    // console.log('timer: ', event);
  }

  setAction(event: any) {
    // console.log('action: ', event);
    if (this.timerValue > 0) {
      if (event === 'start') {
        this.timestampArray.push({
          timestamp: new Date(),
          action: 'started'
        });

        this.actionValue = 'start';
        this.startCounter += 1;
      } else if (event === 'pause') {
        this.timestampArray.push({
          timestamp: new Date(),
          action: 'paused'
        });
        this.actionValue = 'pause';
        this.pauseCounter += 1;
      } else if (event === 'reset') {
        this.pausedArray = [];
        this.timestampArray = [];
        this.startCounter = 0;
        this.pauseCounter = 0;
        this.actionValue = 'reset';
      }
    } else {
      this.snackBar.open('Set a timer value first!', 'Dismiss');
    }
  }

  getPausedTimerValue(event: number) {

    this.pausedArray.push(event);
    // console.log('Paused at: ', event);
  }
}
