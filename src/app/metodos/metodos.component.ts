import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-metodos',
  templateUrl: './metodos.component.html',
  styleUrls: ['./metodos.component.css']
})
export class MetodosComponent {
  constructor(private router: Router) {}

  goToElGamal() {
    this.router.navigate(['/elgamal']); // Ruta que llevará a la página del formulario de ElGamal
  }
  goToBlowfish(){
    this.router.navigate(['/blowfish']); // Ruta que llevará a la página del formulario de blowfish
  }
  goTofuncionhash(){
    this.router.navigate(['/funcionhash']); // Ruta que llevará a la pagina del formulario de funcionhash
  }
}
