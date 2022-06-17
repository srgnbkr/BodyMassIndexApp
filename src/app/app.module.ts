import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms"
import {BrowserAnimationsModule} from "@angular/platform-browser/animations"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { InfoComponent } from './components/info/info.component';
import { BmiCalculateComponent } from './components/bmi-calculate/bmi-calculate.component';
import { InputComponent } from './components/input/input.component';
import { BmiResultComponent } from './components/bmi-result/bmi-result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    InfoComponent,
    BmiCalculateComponent,
    InputComponent,
    BmiResultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
