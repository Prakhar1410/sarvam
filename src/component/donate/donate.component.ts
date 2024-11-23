import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css',
})
export class DonateComponent {
  amount: number = 0;

  initiateDonation() {
    alert(`Donation of ₹${this.amount} initiated!`);
  }
}
