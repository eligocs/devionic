// tablinks-routing.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'saving',
    loadChildren: () => import('./saving/saving.module').then( m => m.SavingPageModule)
  },
  
  {
    path: 'ol',
    loadChildren: () => import('./ol/ol.module').then( m => m.OlPageModule)
  },
  {
    path: 'rl',
    loadChildren: () => import('./rl/rl.module').then( m => m.RlPageModule)
  },
  {
    path: 'dl',
    loadChildren: () => import('./dl/dl.module').then( m => m.DlPageModule)
  },
  {
    path: 'pl',
    loadChildren: () => import('./pl/pl.module').then( m => m.PlPageModule)
  },
  {
    path: 'gl',
    loadChildren: () => import('./gl/gl.module').then( m => m.GlPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule { }
