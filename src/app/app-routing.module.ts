import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import * as $ from 'jquery';
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/bottom-nav/bottom-nav.module').then( m => m.BottomNavPageModule)
  },
 
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bottom-nav',
    loadChildren: () => import('./pages/bottom-nav/bottom-nav.module').then( m => m.BottomNavPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/login/forgot/forgot.module').then( m => m.ForgotPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
  
}
