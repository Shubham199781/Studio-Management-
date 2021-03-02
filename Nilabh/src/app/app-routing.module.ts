import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'front-desk-home',
    loadChildren: () => import('./features/front-desk/front-desk.module').then(m => m.FrontDeskModule)
  },
  {
    path: 'staff-home',
    loadChildren: () => import('./features/staff/staff.module').then(m => m.StaffModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./core/admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
