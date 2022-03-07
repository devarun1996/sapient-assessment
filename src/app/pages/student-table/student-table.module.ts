import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { StudentTableRoutingModule } from './student-table-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    StudentTableRoutingModule,
    MatButtonModule
  ]
})
export class StudentTableModule { }
