import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CesarComponent } from './cesar/cesar.component';
import { EscitalaComponent } from './escitala/escitala.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cesar', component: CesarComponent },
  { path: 'escitala', component: EscitalaComponent },
];
