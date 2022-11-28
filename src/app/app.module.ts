import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BackofficeComponent } from './backoffice/backoffice.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BackofficeuserComponent } from './backofficeuser/backofficeuser.component';
import { VistadellateComponent } from './vistadellate/vistadellate.component';
import { ContactComponent } from './contact/contact.component';
import { ElementsModule } from './elements/elements.module';
import { LandingComponent } from './landing/landing.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { ReactiveFormsModule } from '@angular/forms';

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
    ContactComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ElementsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
