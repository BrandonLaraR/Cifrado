import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  selectedCard: number | null = null;

  toggleInfo(cardNumber: number): void {
    this.selectedCard = this.selectedCard === cardNumber ? null : cardNumber;
  }
}
