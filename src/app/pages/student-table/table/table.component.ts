import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  sortState = 'init';

  selectedState = '';

  tempData: any[] = [];

  studentHeaders = ['Name', 'Class', 'Section', 'Maths', 'Science', 'Computer'];

  studentData = [
    {
      name: 'Arun',
      class: 10,
      section: 'A',
      maths: 92,
      science: 81,
      computer: 88,
    },
    {
      name: 'Ashna',
      class: 9,
      section: 'B',
      maths: 77,
      science: 89,
      computer: 98,
    },
    {
      name: 'Divya',
      class: 11,
      section: 'A',
      maths: 21,
      science: 51,
      computer: 78,
    },
    {
      name: 'Zayan',
      class: 10,
      section: 'B',
      maths: 67,
      science: 72,
      computer: 79,
    },
    {
      name: 'Karan',
      class: 9,
      section: 'A',
      maths: 88,
      science: 79,
      computer: 91,
    },
  ]

  ngOnInit(): void {

    this.tempData = [...this.studentData];
  }

  sort(type: string) {

    if (this.selectedState !== type) {

      this.selectedState = type;
      this.sortState = 'init';
    }
    if (this.sortState === 'init') {

      this.sortState = 'asc';

      if (type === 'class' || type === 'maths' || type === 'science' || type === 'computer') {

        this.studentData.sort((a: any, b: any) => a[type] - b[type]);
      } else {

        this.studentData.sort((a: any, b: any) => a[type].localeCompare(b[type]));
      }
      
       // asc sort
      // console.log(type);
      // console.log(this.studentData);
    } else if (this.sortState === 'asc') {

      this.sortState = 'desc';
      
      if (type === 'class' || type === 'maths' || type === 'science' || type === 'computer') {

        this.studentData.sort((a: any, b: any) => b[type] - a[type]);
      } else {

        this.studentData.sort((a: any, b: any) => -1 * a[type].localeCompare(b[type]));
      }
      // desc sort
    } else {

      this.sortState = 'init';
      this.studentData = [...this.tempData];
      // init
    }

  }
}
