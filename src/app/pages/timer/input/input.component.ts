import { Component, Output, Input, OnInit, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor( private snackBar: MatSnackBar) { }

  @Output() timerValueEmitter = new EventEmitter<number>();
  @Output() timerActionEmitter = new EventEmitter<string>();
  @Input() pausedArray: number[] = [];
  @Input() isPaused = true;
  timerValue = 0;
  isFirst = true;

  ngOnInit(): void {
  }

  action (type: string) {

    if (type === 'start-pause') {

      if (this.isFirst) {

        if (this.timerValue > 0) {

          this.timerValueEmitter.emit(this.timerValue);
          this.isFirst = false;
        } else {

          this.snackBar.open('Timer Limit must be more than 0!', 'Dismiss');
          return;
        }
      }
        if (this.isPaused) {

          this.timerActionEmitter.emit('start');
          this.isPaused = false;
        } else {

          this.timerActionEmitter.emit('pause');
          this.isPaused = true;
        }
    } else if (type === 'reset') {
      
      if (this.timerValue > 0) {

        this.timerValueEmitter.emit(this.timerValue);
        this.timerActionEmitter.emit('reset');
        this.isPaused = true;
      } else {

        this.snackBar.open('Timer Limit must be more than 0!', 'Dismiss');
      }
    }
  }
}
