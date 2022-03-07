import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerManageService {

  constructor() { }

  timerValue = new Subject<number>();
  actionValue = new Subject<string>();
  pausedValue = new Subject<number>();
  timestamp = new Subject<any>();
  startCounter = new Subject<number>();
  pauseCounter = new Subject<number>();

}
