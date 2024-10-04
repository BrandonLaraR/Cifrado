import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CesarComponent } from './cesar/cesar.component';
import { EscitalaComponent } from './escitala/escitala.component';
import { MetodosComponent } from './metodos/metodos.component';
import { ElgamalComponent } from './elgamal/elgamal.component';
import { BlowfishComponent } from './blowfish/blowfish.component';
import { FuncionhashComponent } from './funcionhash/funcionhash.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    CesarComponent,
    EscitalaComponent,
    MetodosComponent,
    ElgamalComponent,
    BlowfishComponent,
    FuncionhashComponent
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
