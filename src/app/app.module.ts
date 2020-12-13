import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule, FirebaseApp } from '@angular/fire';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ClientListComponent } from './client-list/client-list.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AlertsService } from './Services/alerts.service';
import { PricesComponent } from './prices/prices.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { NavTestComponent } from './nav-test/nav-test.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ClientListComponent,
    AddClientComponent,
    PricesComponent,
    InscriptionComponent,
    RegisterComponent,
    NavTestComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    ProgressbarModule.forRoot(),       
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    NgxSpinnerModule,  
    AngularFireStorageModule, 
    BsDropdownModule.forRoot()
    

  ],
  providers: [
    AngularFireAuth,
    AlertsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
