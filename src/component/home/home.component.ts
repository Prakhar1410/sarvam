import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, CarouselModule],
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

  upcomingPrograms = [
    {
      title: 'School Supplies Distribution',
      description: 'Provides essential school supplies (such as notebooks, pencils,uniforms, backpacks, andother learning materials) to children in underserved areas to support their educational journey.',
      date: 'Date to be announced',
      image: 'assets/program1.jpg' 
    },
    {
      title: 'After-School Tutoring',
      description: 'Offers additional academic support through after-school tutoring and mentorship programs, focusing on literacy, numeracy, and core subjects. Tutors provide oneon-one or small group assistance.',
      date: 'Date to be announced',
      image: 'assets/program2.jpg' 
    },
    {
      title: 'Scholarship Assistance',
      description: 'Provides financial assistance and guidance to help students secure scholarships, allowing them to pursue higher education and specialized training.',
      date: 'Date to be announced',
      image: 'assets/program3.jpg' 
    },
    {
      title: 'Educational Workshops',
      description: 'Conducts workshops on basic literacy, numeracy, digital literacy, and life skills, targeting different age groups. Workshops are designed to enhance foundational knowledge and practical skills.',
      date: 'Date to be announced',
      image: 'assets/program4.jpg' 
    },
    {
      title: 'Community Counseling',
      description: 'Provides accessible counseling services to individuals, families, and groups in the community to address mental health concerns and promote emotional well-being.',
      date: 'Date to be announced',
      image: 'assets/program5.jpg' 
    },
    {
      title: ' Mental Health Awareness Workshops',
      description: 'Conducts workshops to educate the community on mental health topics, aiming to dispel myths, reduce stigma, and provide basic mental health knowledge.',
      date: 'Date to be announced',
      image: 'assets/program6.jpg' 
    },
    {
      title: ' Peer Support Groups',
      description: 'Facilitates peer support groups where individuals can share their experiences, support each other, and build a sense of community and belonging.',
      date: 'Date to be announced',
      image: 'assets/program7.jpg' 
    },
    {
      title: 'Crisis Intervention',
      description: 'Offers emergency mental health support and crisis intervention services for individuals facing acute mental health crises or traumatic experiences.',
      date: 'Date to be announced',
      image: 'assets/program8.jpg' 
    },
    {
      title: 'Vocational Training',
      description: 'Empowers women with vocational skills training in areas such as tailoring, baking, crafting, and other marketable skills to enable them to secure employment or start their own businesses.',
      date: 'Date to be announced',
      image: 'assets/program9.jpg' 
    },
    {
      title: 'Financial Literacy',
      description: 'Teaches financial management, budgeting, and savings skills to help women gain financial independence and manage household finances more effectively.',
      date: 'Date to be announced',
      image: 'assets/program10.jpg'
    },
    {
      title: 'Leadership Development',
      description: 'Develops leadership skills through workshops and mentoring, encouraging women to take active roles in their communities, advocate for their rights, and lead change initiatives.',
      date: 'Date to be announced',
      image: 'assets/program11.jpg'
    },
    {
      title: 'Small Business Support',
      description: 'Assists women in launching and sustaining small businesses by providing microloans, entrepreneurial training, and ongoing business mentoring and support.',
      date: 'Date to be announced',
      image: 'assets/program12.jpg'
    }
  ];
}
