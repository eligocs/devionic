import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlPage } from './dl.page';

const routes: Routes = [
  {
    path: '',
    component: DlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlPageRoutingModule {}
