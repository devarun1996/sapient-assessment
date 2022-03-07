import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlockLoaderComponent } from './block-loader/block-loader.component';

const routes: Routes = [
    {
      path: '',
      component: BlockLoaderComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicLoaderRoutingModule { }
