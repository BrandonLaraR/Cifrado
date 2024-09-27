import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Cambiado de InicioComponent a HomeComponent
import { CesarComponent } from './cesar/cesar.component';
import { EscitalaComponent } from './escitala/escitala.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cesar', component: CesarComponent },
  { path: 'escitala', component: EscitalaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
