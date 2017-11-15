import { Routes } from '@angular/router';

import { LayoutComponent } from './containers/layout/layout.component';
import { AdminComponent } from './containers/admin/admin.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';

export const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'  
},
{
    path: '',
    component: LayoutComponent,
    children: [{
        path: 'home',
        component: HomeComponent
    }]
}, {
    path: 'admin',
    component: AdminComponent
}, {
    path: '**',
    redirectTo: 'home'
}]