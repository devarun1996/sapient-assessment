import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlockLoaderComponent } from './block-loader/block-loader.component';
import { DynamicLoaderRoutingModule } from './dynamic-loader-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BlockLoaderComponent
  ],
  imports: [
    CommonModule,
    DynamicLoaderRoutingModule,
    MatSnackBarModule,
    MatButtonModule
  ]
})
export class DynamicLoaderModule { }
