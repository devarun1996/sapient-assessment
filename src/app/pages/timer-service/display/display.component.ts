import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TimerManageService } from '../timer-manage.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor( private timerService: TimerManageService) { }

  interval: any;

  ngOnInit(): void {

    this.timerService.timerValue.subscribe(res => {
      this.timerValue = this.counter = res;
      // console.log('Timer Value: ', this.timerValue);
    });

    this.timerService.actionValue.subscribe(res => {

      if (res === 'start') {

        this.startTimer();

      } else if (res === 'pause') {

        this.pauseTimer();
        this.timerService.pausedValue.next(this.counter);

      } else if (res === 'reset') {

        this.timerService.pausedValue.next(-1);
        this.pauseTimer();
      }
      // console.log('action: ', res);
    });
  }

  timerValue = 0;
  counter = 0;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.counter > 0) {

        this.counter--;
      } else {

        // do pause....
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
