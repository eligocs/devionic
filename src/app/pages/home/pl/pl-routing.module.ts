import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlPage } from './pl.page';

const routes: Routes = [
  {
    path: '',
    component: PlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlPageRoutingModule {}
