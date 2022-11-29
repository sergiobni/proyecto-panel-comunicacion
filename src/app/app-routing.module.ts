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
import { AlimentoAnimalComponent } from './cards/alimento-animal/alimento-animal.component';
import { AlimentoProcesadoComponent } from './cards/alimento-procesado/alimento-procesado.component';
import { AlimentoVegetalComponent } from './cards/alimento-vegetal/alimento-vegetal.component';
import { CocinaComponent } from './cards/cocina/cocina.component';

const routes: Routes = [
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
  },
  {
    path: 'backofficeuser',
    component: BackofficeuserComponent,
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
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'vistadetalle/:id',
    component: VistadellateComponent,
  },
  {
    path: 'alimento-animal',
    component: AlimentoAnimalComponent,
  },
  {
    path: 'alimento-procesado',
    component: AlimentoProcesadoComponent,
  },
  {
    path: 'alimento-vegetal',
    component: AlimentoVegetalComponent,
  },
  {
    path: 'cocina',
    component: CocinaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
