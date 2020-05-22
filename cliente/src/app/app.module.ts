import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegadorComponent } from './components/navegador/navegador.component';
import { PersonasListComponent } from './components/personas-list/personas-list.component';
import { PersonasFormComponent } from './components/personas-form/personas-form.component';
import { MenuesComponent } from './components/menues/menues.component';

import {PersonasService} from './services/personas.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavegadorComponent,
    PersonasListComponent,
    PersonasFormComponent,
    MenuesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    PersonasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
