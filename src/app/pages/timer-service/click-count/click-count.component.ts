import { Component, OnInit } from '@angular/core';
import { TimerManageService } from '../timer-manage.service';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.scss']
})
export class ClickCountComponent implements OnInit {

  constructor( private timerService: TimerManageService) { }

  startValue = 0;
  pauseValue = 0;

  ngOnInit(): void {

    this.timerService.startCounter.subscribe(res => {

      if (res === -1) {

        this.startValue = 0;
      } else {

        this.startValue += res;
      }
    });

    
    this.timerService.pauseCounter.subscribe(res => {

      if (res === -1) {

        this.pauseValue = 0;
      } else {

        this.pauseValue += res;
      }
    });
  }

}
