import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-funcionhash',
  templateUrl: './funcionhash.component.html',
  styleUrls: ['./funcionhash.component.css']
})
export class FuncionhashComponent {
  inputMessage: string = ''; // Mensaje de entrada
  selectedHashType: string = 'SHA3-256'; // Tipo de hash por defecto
  hashedMessage: string = ''; // Mensaje hash

  onHashTypeChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    this.selectedHashType = selectElement.value; // Actualiza el tipo de hash seleccionado
  }

  hashMessage() {
    if (this.inputMessage) {
      switch (this.selectedHashType) {
        case 'SHA3-224':
          this.hashedMessage = CryptoJS.SHA3(this.inputMessage, { outputLength: 224 }).toString();
          break;
        case 'SHA3-256':
          this.hashedMessage = CryptoJS.SHA3(this.inputMessage, { outputLength: 256 }).toString();
          break;
        case 'SHA3-384':
          this.hashedMessage = CryptoJS.SHA3(this.inputMessage, { outputLength: 384 }).toString();
          break;
        case 'SHA3-512':
          this.hashedMessage = CryptoJS.SHA3(this.inputMessage, { outputLength: 512 }).toString();
          break;
        default:
          this.hashedMessage = '';
      }
    } else {
      alert('Por favor ingrese un mensaje.');
    }
  }

  clearFields() {
    this.inputMessage = ''; // Limpiamos el mensaje de entrada
    this.hashedMessage = ''; // Limpiamos el mensaje hash
    this.selectedHashType = 'SHA3-256'; // Reiniciamos el tipo de hash
    const messageInput = document.getElementById('inputMessage') as HTMLInputElement;
    if (messageInput) {
      messageInput.value = ''; // Limpiamos el input de mensaje
    }
  }
}
