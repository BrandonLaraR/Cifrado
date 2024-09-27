import { Component } from '@angular/core';

@Component({
  selector: 'app-escitala',
  templateUrl: './escitala.component.html',
  styleUrls: ['./escitala.component.css']
})
export class EscitalaComponent {
  message: string = '';
  key: number = 0;
  encryptedMessage: string = '';
  decryptedMessage: string = '';
  selectedCard: number | null = null;  // Variable para controlar qué tarjeta (acordeón) está abierta

  encrypt(message: string, key: number): string {
    const rows = Math.ceil(message.length / key);
    const grid: string[] = Array.from({ length: rows }, (_, i) => message.slice(i * key, i * key + key));
    return Array.from({ length: key }, (_, col) => grid.map(row => row[col] || '').join('')).join('');
  }

  decrypt(encryptedMessage: string, key: number): string {
    const rows = Math.ceil(encryptedMessage.length / key);
    const fullColumns = encryptedMessage.length % rows;
    const completeColumns = rows - fullColumns;

    const grid: string[] = [];
    let index = 0;

    for (let i = 0; i < key; i++) {
      const length = (i < completeColumns) ? rows : rows - 1;
      grid[i] = encryptedMessage.slice(index, index + length);
      index += length;
    }

    return Array.from({ length: rows }, (_, row) => grid.map(col => col[row] || '').join('')).join('');
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
