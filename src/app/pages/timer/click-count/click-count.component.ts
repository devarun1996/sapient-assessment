import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-click-count',
  templateUrl: './click-count.component.html',
  styleUrls: ['./click-count.component.scss']
})
export class ClickCountComponent implements OnInit {

  constructor() { }

  @Input() startValue = 0;
  @Input() pauseValue = 0;


  ngOnInit(): void {
  }

}
