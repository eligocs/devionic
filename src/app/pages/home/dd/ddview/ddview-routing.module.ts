import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdviewPage } from './ddview.page';

const routes: Routes = [
  {
    path: '',
    component: DdviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DdviewPageRoutingModule {}
