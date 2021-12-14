import { ServicesComponent } from '../services/services.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomePageComponent } from '../home-page/home-page.component';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'services', component: ServicesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ServicesComponent,
    NavbarComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
