import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CesarComponent } from './cesar/cesar.component';
import { EscitalaComponent } from './escitala/escitala.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    CesarComponent,
    EscitalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Asegúrate de que FormsModule esté aquí
    CommonModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
