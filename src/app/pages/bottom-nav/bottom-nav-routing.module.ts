import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BottomNavPage } from './bottom-nav.page';

const routes: Routes = [
  {
    path: '',
    component: BottomNavPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      
      // Routes For Menu Bar
      {
        path: 'profile',
        loadChildren: () => import('../menu/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'cpassword',
        loadChildren: () => import('../menu/cpassword/cpassword.module').then(m => m.CpasswordPageModule)
      },
      {
        path: 'loan',
        loadChildren: () => import('../menu/loan/loan.module').then(m => m.LoanPageModule)
      },
      {
        path: 'passbook',
        loadChildren: () => import('../menu/passbook/passbook.module').then(m => m.PassbookPageModule)
      },
      {
        path: 'security',
        loadChildren: () => import('../menu/security/security.module').then(m => m.SecurityPageModule)
      },
      {
        path: 'support',
        loadChildren: () => import('../menu/support/support.module').then(m => m.SupportPageModule)
      },
      {
        path: 'tandc',
        loadChildren: () => import('../menu/tandc/tandc.module').then(m => m.TandcPageModule)
      },
      // End Routes For Menu Bar

      {
        path: 'saving',
        loadChildren: () => import('../home/saving/saving.module').then(m => m.SavingPageModule)
      },
      {
        path: 'ol',
        loadChildren: () => import('../home/ol/ol.module').then(m => m.OlPageModule)
      },
      {
        path: 'dd/ddview',
        loadChildren: () => import('../home/dd/ddview/ddview.module').then(m => m.DdviewPageModule)
      },
      {
        path: 'fd/fdview',
        loadChildren: () => import('../home/fd/fdview/fdview.module').then(m => m.FdviewPageModule)
      },
      {
        path: 'rd/rdview',
        loadChildren: () => import('../home/rd/rdview/rdview.module').then(m => m.RdviewPageModule)
      },
      {
        path: '/',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '/',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BottomNavPageRoutingModule {}
