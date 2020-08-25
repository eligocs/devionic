import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdviewPage } from './rdview.page';

const routes: Routes = [
  {
    path: '',
    component: RdviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdviewPageRoutingModule {}
