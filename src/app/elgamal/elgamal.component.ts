import { Component } from '@angular/core';

@Component({
  selector: 'app-elgamal',
  templateUrl: './elgamal.component.html',
  styleUrls: ['./elgamal.component.css']
})
export class ElgamalComponent {
  aliceState = {
    p: null as number | null,
    g: null as number | null,
    x: null as number | null,
    publicKey: null as { p: number, g: number, h: number } | null
  };

  bobState = {
    y: null as number | null,
    m: null as number | null,
    encryptedMsg: null as { c1: number, c2: number } | null
  };

  decryptedMsg: number | null = null;

  // Lógica para manejar los cambios en los inputs de Alice
  handleAliceInputChange(field: 'p' | 'g' | 'x', event: Event) {
    const target = event.target as HTMLInputElement;
    this.aliceState[field] = parseInt(target.value, 10) || null;
  }

  // Lógica para manejar los cambios en los inputs de Bob
  handleBobInputChange(field: 'y' | 'm', event: Event) {
    const target = event.target as HTMLInputElement;
    this.bobState[field] = parseInt(target.value, 10) || null;
  }

  // Lógica para generar valores aleatorios para Alice
  generateRandomAlice(field: 'p' | 'g' | 'x') {
    if (field === 'p') {
      this.aliceState.p = this.ElGamal.generateRandomPrime();
    } else if (field === 'g' || field === 'x') {
      if (this.aliceState.p !== null && this.aliceState.p > 2) {
        this.aliceState[field] = this.ElGamal.generateRandomNumber(this.aliceState.p);
      } else {
        alert('Por favor genera un número primo válido primero para p.');
      }
    }
  }

  // Lógica para generar valores aleatorios para Bob
  generateRandomBob(field: 'y' | 'm') {
    if (this.aliceState.publicKey) {
      if (field === 'y') {
        this.bobState.y = this.ElGamal.generateRandomNumber(this.aliceState.publicKey.p);
      } else if (field === 'm') {
        this.bobState.m = this.ElGamal.generateRandomNumber(this.aliceState.publicKey.p);
      }
    } else {
      alert('Alice necesita generar la clave pública primero.');
    }
  }

  generatePublicKey() {
    // Verificar que p, g y x no sean null
    if (this.aliceState.p !== null && this.aliceState.g !== null && this.aliceState.x !== null) {
      // También asegurarse de que p es un número primo
      if (this.ElGamal.isPrime(this.aliceState.p)) {
        const publicKey = this.ElGamal.getPublicKey(this.aliceState.p, this.aliceState.g, this.aliceState.x);
        this.aliceState.publicKey = publicKey;
      } else {
        alert('Por favor ingresa un número primo válido para p.');
      }
    } else {
      // Si p, g o x son null, mostrar un mensaje de error
      alert('Por favor asegúrate de que todos los campos (p, g, x) tengan valores válidos.');
    }
  }


  // Cifrar el mensaje para Bob
  encryptMessage() {
    if (this.aliceState.publicKey && this.bobState.m !== null && this.bobState.y !== null) {
      const encryptedMsg = this.ElGamal.encrypt(this.bobState.m, this.bobState.y, this.aliceState.publicKey);
      this.bobState.encryptedMsg = encryptedMsg;
      this.decryptMessage(); // Desencriptar después de encriptar
    } else {
      alert('Asegúrate de que Alice haya generado la clave pública y de que los mensajes sean válidos.');
    }
  }

  // Desencriptar el mensaje
  decryptMessage() {
    if (this.bobState.encryptedMsg && this.aliceState.x !== null && this.aliceState.p !== null) {
      const { c1, c2 } = this.bobState.encryptedMsg;
      const decrypted = this.ElGamal.decrypt(c1, c2, this.aliceState.x, this.aliceState.p);
      this.decryptedMsg = decrypted;
    }
  }

  // Algoritmo ElGamal
  ElGamal = {
    isPrime: (n: number) => {
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
      }
      return n > 1;
    },
    powmod: (base: number, exp: number, modulus: number) => {
      let result = 1;
      base = base % modulus;
      while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % modulus;
        exp = Math.floor(exp / 2);
        base = (base * base) % modulus;
      }
      return result;
    },
    getPublicKey: (p: number, g: number, x: number) => {
      return { p, g, h: this.ElGamal.powmod(g, x, p) };
    },
    encrypt: (m: number, y: number, publicKey: { p: number, g: number, h: number }) => {
      const { p, g, h } = publicKey;
      const c1 = this.ElGamal.powmod(g, y, p);
      const c2 = (m * this.ElGamal.powmod(h, y, p)) % p;
      return { c1, c2 };
    },
    decrypt: (c1: number, c2: number, x: number, p: number) => {
      const s = this.ElGamal.powmod(c1, x, p);
      const sInverse = this.ElGamal.powmod(s, p - 2, p);
      return (c2 * sInverse) % p;
    },
    generateRandomPrime: () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
      return primes[Math.floor(Math.random() * primes.length)];
    },
    generateRandomNumber: (max: number) => {
      return Math.floor(Math.random() * (max - 2)) + 2;
    }
  };
}
