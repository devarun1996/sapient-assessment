import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductRoutingModule } from './product-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    ProductViewComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatSelectModule
  ]
})
export class ProductModule { }
