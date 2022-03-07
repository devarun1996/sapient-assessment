import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatButtonModule,
  ]
})
export class PagesModule { }
