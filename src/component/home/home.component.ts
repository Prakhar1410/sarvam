import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Home Page';
  images = [
    { src: 'assets/image1.jpg', alt: 'Image 1' },
    { src: 'assets/image2.jpg', alt: 'Image 2' },
    { src: 'assets/image3.jpg', alt: 'Image 3' }
  ];

  impactStats = [
    'Educated over 5000 children.',
    'Provided mental health support to 1000+ individuals.',
    'Empowered 200 women through vocational training.'
  ];
}
