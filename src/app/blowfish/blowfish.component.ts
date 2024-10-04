import { Component } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-blowfish',
  templateUrl: './blowfish.component.html',
  styleUrls: ['./blowfish.component.css']
})
export class BlowfishComponent {
  output: string = ''; // Resultado del cifrado/descifrado
  error: string = '';  // Mensaje de error

  encryptMessage(message: string, key: string) {
    if (message && key) {
      try {
        const encrypted = CryptoJS.Blowfish.encrypt(message, key).toString();
        this.output = encrypted; // Guardamos el mensaje cifrado en 'output'
        this.error = '';         // Limpiamos errores si es exitoso
      } catch (err) {
        this.error = 'Error al cifrar el mensaje.';
      }
    } else {
      this.error = 'Por favor ingrese tanto el mensaje como la clave.';
    }
  }

  decryptMessage(message: string, key: string) {
    if (message && key) {
      try {
        const decrypted = CryptoJS.Blowfish.decrypt(message, key).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw new Error();
        this.output = decrypted; // Guardamos el mensaje descifrado en 'output'
        this.error = '';         // Limpiamos errores si es exitoso
      } catch (err) {
        this.error = 'Error al descifrar el mensaje. Verifique la clave y el mensaje cifrado.';
      }
    } else {
      this.error = 'Por favor ingrese tanto el mensaje cifrado como la clave.';
    }
  }

  clearFields(messageInput: HTMLInputElement, keyInput: HTMLInputElement) {
    this.output = '';   // Limpiamos el resultado
    this.error = '';    // Limpiamos el error
    messageInput.value = ''; // Limpiamos el input del mensaje
    keyInput.value = '';     // Limpiamos el input de la clave
  }
}
