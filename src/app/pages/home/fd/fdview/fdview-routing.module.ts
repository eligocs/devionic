import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdviewPage } from './fdview.page';

const routes: Routes = [
  {
    path: '',
    component: FdviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdviewPageRoutingModule {}
