import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'; // Cambiado de InicioComponent a HomeComponent
import { CesarComponent } from './cesar/cesar.component';
import { EscitalaComponent } from './escitala/escitala.component';
import { MetodosComponent } from './metodos/metodos.component';
import { ElgamalComponent } from './elgamal/elgamal.component';
import { BlowfishComponent } from './blowfish/blowfish.component';
import { FuncionhashComponent } from './funcionhash/funcionhash.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cesar', component: CesarComponent },
  { path: 'escitala', component: EscitalaComponent },
  { path: 'metodos', component: MetodosComponent},
  { path: 'elgamal', component: ElgamalComponent},
  { path: 'blowfish', component: BlowfishComponent},
  { path: 'funcionhash', component: FuncionhashComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
