import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { BackofficeuserComponent } from './backofficeuser/backofficeuser.component';
import { ContactComponent } from './contact/contact.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';
import { VistadellateComponent } from './vistadellate/vistadellate.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/landing' },
  // { path: '**', component: LandingComponent },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'backoffice',
    component: BackofficeComponent,
    ...canActivate(() => redirectUnauthorizedTo('/landing')),
  },
  {
    path: 'backofficeuser',
    component: BackofficeuserComponent,
    ...canActivate(() => redirectUnauthorizedTo('/landing')),
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    ...canActivate(() => redirectUnauthorizedTo('/landing')),
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'vistadetalle',
    component: VistadellateComponent,
    ...canActivate(() => redirectUnauthorizedTo('/landing')),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
