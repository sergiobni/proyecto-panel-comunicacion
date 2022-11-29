import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { NombrePipe } from './nombre.pipe';
import { AlimentoAnimalComponent } from './cards/alimento-animal/alimento-animal.component';
import { AlimentoVegetalComponent } from './cards/alimento-vegetal/alimento-vegetal.component';
import { AlimentoProcesadoComponent } from './cards/alimento-procesado/alimento-procesado.component';
import { CocinaComponent } from './cards/cocina/cocina.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BackofficeuserComponent } from './backofficeuser/backofficeuser.component';
import { VistadellateComponent } from './vistadellate/vistadellate.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsModule } from './elements/elements.module';
import { LandingComponent } from './landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AboutusComponent,
    BackofficeComponent,
    LoginComponent,
    RegisterComponent,
    BackofficeuserComponent,
    VistadellateComponent,
    AlimentoAnimalComponent,
    AlimentoVegetalComponent,
    AlimentoProcesadoComponent,
    CocinaComponent,
    ContactComponent,
    LandingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ElementsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
