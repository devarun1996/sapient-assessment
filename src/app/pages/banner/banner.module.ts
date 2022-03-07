import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { BannerRoutingModule } from './banner-routing.module';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    BannerComponent
  ],
  imports: [
    CommonModule,
    BannerRoutingModule,
    MatButtonModule
  ]
})
export class BannerModule { }
