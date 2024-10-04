import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Cifrado';
  menuActive = false; // Estado del menú

  get currentYear(): number {
    return new Date().getFullYear();
  }

  toggleMenu() {
    this.menuActive = !this.menuActive; // Cambia el estado del menú
  }
  closeMenu() {
    this.menuActive = false; // Cierra el menú
  }
}
