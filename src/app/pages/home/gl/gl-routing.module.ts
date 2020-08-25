import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GlPage } from './gl.page';

const routes: Routes = [
  {
    path: '',
    component: GlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GlPageRoutingModule {}
