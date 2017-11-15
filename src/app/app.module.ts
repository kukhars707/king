import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { AdminComponent } from './containers/admin/admin.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';

import { routes } from './app-routes';
import { SitebarComponent } from './components/sitebar/sitebar.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    AdminComponent,
    HomeComponent,
    LoginComponent,
    SitebarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
