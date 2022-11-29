import { asNativeElements, NgModule } from '@angular/core';
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
import { NombrePipe } from './nombre.pipe';
import { HttpClientModule } from '@angular/common/http';
import { AlimentoAnimalComponent } from './cards/alimento-animal/alimento-animal.component';
import { AlimentoProcesadoComponent } from './cards/alimento-procesado/alimento-procesado.component';
import { CocinaComponent } from './cards/cocina/cocina.component';
import { EventoComponent } from './cards/evento/evento.component';
import { ColorComponent } from './cards/color/color.component';
import { PersonaComponent } from './cards/persona/persona.component';
import { AsignaturaComponent } from './cards/asignatura/asignatura.component';
import { AnimalComponent } from './cards/animal/animal.component';

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
    AlimentoAnimalComponent,
    AlimentoProcesadoComponent,
    CocinaComponent,
    NombrePipe,
    EventoComponent,
    ColorComponent,
    PersonaComponent,
    AsignaturaComponent,
    AnimalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ElementsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
