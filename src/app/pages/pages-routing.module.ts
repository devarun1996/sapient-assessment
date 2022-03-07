import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
      path: 'home',
      component: HomeComponent
    },
    {
      path: 'banner', 
      loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule)
    },
    {
      path: 'product-view', 
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
      path: 'timer', 
      loadChildren: () => import('./timer/timer.module').then(m => m.TimerModule)
    },
    {
      path: 'timer-service', 
      loadChildren: () => import('./timer-service/timer-service.module').then(m => m.TimerServiceModule)
    },
    {
      path: 'student-table', 
      loadChildren: () => import('./student-table/student-table.module').then(m => m.StudentTableModule)
    },
    {
      path: 'div-creator', 
      loadChildren: () => import('./dynamic-loader/dynamic-loader.module').then(m => m.DynamicLoaderModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
