import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TeamComponent } from './components/team/team.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';


const appRoutes: Routes = [

  {
    path: 'landing',
    component: LandingComponent,
    data: { title: 'Landing' }
  },
  {
    path:'about',
    component:AboutComponent,
    data: {title: 'About'}
  },
  {
    path:'team',
    component:TeamComponent,
    data: {title: 'Team'}
  },
  {
    path:'contact',
    component:ContactComponent,
    data: {title: 'Contact'}
  },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    LandingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
