import { Component } from '@angular/core';

@Component({
  selector: 'app-cesar',
  templateUrl: './cesar.component.html',
  styleUrls: ['./cesar.component.css']
})
export class CesarComponent {
  message: string = '';
  key: number = 0;
  encryptedMessage: string = '';
  decryptedMessage: string = '';
  selectedCard: number | null = null;

  encrypt(message: string, key: number): string {
    return message.split('').map(char => {
      const code = char.charCodeAt(0);
      return String.fromCharCode(code + key);
    }).join('');
  }

  decrypt(encryptedMessage: string, key: number): string {
    return encryptedMessage.split('').map(char => {
      const code = char.charCodeAt(0);
      return String.fromCharCode(code - key);
    }).join('');
  }

  onEncrypt(messageInput: HTMLInputElement, keyInput: HTMLInputElement, event: Event) {
    event.preventDefault();  // Evita que el formulario recargue la página
    this.message = messageInput.value;
    this.key = Number(keyInput.value);
    this.encryptedMessage = this.encrypt(this.message, this.key);
  }

  onDecrypt(keyInput: HTMLInputElement, event: Event) {
    event.preventDefault();  // Evita que el formulario recargue la página
    this.key = Number(keyInput.value);
    this.decryptedMessage = this.decrypt(this.encryptedMessage, this.key);
  }

  // Función para alternar entre abrir y cerrar las tarjetas
  toggleInfo(cardNumber: number): void {
    this.selectedCard = this.selectedCard === cardNumber ? null : cardNumber;
  }

  // Función para limpiar campos y resultados
  onClearFields(messageInput: HTMLInputElement, keyInput: HTMLInputElement) {
    messageInput.value = '';
    keyInput.value = '';
    this.encryptedMessage = '';
    this.decryptedMessage = '';
  }
}
