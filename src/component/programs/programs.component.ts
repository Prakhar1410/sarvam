import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css'],
})
export class ProgramsComponent {
  programs = [
    {
      id: 1,
      name: 'Child Education',
      description: 'Providing education resources, mentorship, and safe learning spaces.',
      link: '/programs/child-education',
    },
    {
      id: 2,
      name: 'Mental Health Services',
      description: 'Providing counseling, workshops, and peer support.',
      link: '/programs/mental-health',
    },
    {
      id: 3,
      name: 'Women Empowerment',
      description: 'Empowering women with vocational training, financial literacy, and leadership skills.',
      link: '/programs/women-empowerment',
    },
  ];
}
