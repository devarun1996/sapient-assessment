import { Component, OnInit } from '@angular/core';
import { TimerManageService } from '../timer-manage.service';

@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit {

  constructor( private timerService: TimerManageService) { }

  timestampArray: any[] = [];
  
  ngOnInit(): void {

    this.timerService.timestamp.subscribe(res => {

      if (res === -1) {

        this.timestampArray = [];
      } else {

        this.timestampArray.push(res);
      }
    });
  }

}
