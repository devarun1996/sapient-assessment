import { Component, Output, EventEmitter, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit, OnChanges {

  interval: any;

  constructor() { }

  @Input() actionValue = '';
  @Input() timerValue = 0;
  @Output() pausedTimerValueEmitter = new EventEmitter<number>();
  counter = 0;

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {


    if (changes['actionValue'] && changes['actionValue'].currentValue === 'start') {
    
      if (this.counter === 0) {
        this.counter = this.timerValue;
      }
      this.startTimer();

    } else if (changes['actionValue'] && changes['actionValue'].currentValue === 'pause') {

      this.pausedTimerValueEmitter.emit(this.counter);
      this.pauseTimer();

    } else if (changes['actionValue'] && changes['actionValue'].currentValue === 'reset') {

      this.pauseTimer();
      this.counter = this.timerValue;
    }

    if (changes['timerValue'] && changes['timerValue'].currentValue !== changes['timerValue'].previousValue) {
     
      this.counter = this.timerValue;
    }

  }

  startTimer() {
    this.interval = setInterval(() => {
      if(this.counter > 0) {

        this.counter--;
      } else {

        // do nothing..
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

}
