import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.css'
})
export class ProgramsComponent {
  programs = [
    { id: 1, name: 'Child Education', description: 'Providing education resources, mentorship, and safe learning spaces.' },
    { id: 2, name: 'Mental Health Services', description: 'Providing counseling, workshops, and peer support.' },
    { id: 3, name: 'Women Empowerment', description: 'Empowering women with vocational training, financial literacy, and leadership skills.' }
  ];

}
