import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @ViewChild('explanationModal') explanationModal: any;

  constructor(private router: Router, private projectService: ProjectService) {}

  navigateToPortfolioDetail() {
    this.router.navigate(['/portfolio-detail/']);
  }

  socialLinks = [
    { icon: 'bx bxl-linkedin', link: 'https://www.linkedin.com/in/khotso-tsoaela/' },
    { icon: 'bx bxl-github', link: 'https://github.com/ktsoaela/' },
    { icon: 'bx bxl-facebook', link: 'https://facebook.com/' },
    { icon: 'bx bxl-instagram', link: 'https://instagram.com/' },
    { icon: 'bx bxl-twitter', link: 'https://twitter.com/' },
  ];

  homeSocialLinks = this.socialLinks.filter(link => link.icon === 'bx bxl-linkedin' || link.icon === 'bx bxl-github');
  footerSocialLinks = this.socialLinks.filter(link => link.icon === 'bx bxl-facebook' || link.icon === 'bx bxl-instagram'|| link.icon === 'bx bxl-twitter');

  frontEndSkills = [
    {
      iconClass: 'bx bx-paint-roll',
      name: 'Front End Development',
      barClass: 'skills__front',
      percentage: '95%',
      items: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'Angular', 'React', 'Liquid']
    },
  ];

  backEndSkills = [
    {
      iconClass: 'bx bx-server',
      name: 'Back End Development',
      barClass: 'skills__back',
      percentage: '85%',
      items: ['Python', 'Django', 'Flask', 'PHP', 'NodeJs', 'MySQL', 'MongoDB', 'Ruby']
    },
  ]

  tools = [
    {
      iconClass: 'bx bx-fork',
      name: 'Tools',
      barClass: 'skills__tools',
      percentage: '75%',
      items: ['Git', 'Linux', 'InteliJ', 'VSCode', 'Postman', 'TypeScript', 'Docker', 'Flutter']
    },
  ];
  
  workItems = this.projectService.getWorkItems();

  name: string = '';
  email: string = '';
  message: string = '';
  
  submitForm() {
    console.log('Form submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
  }

  openModal() {
    this.explanationModal.show();
  }

  closeModal() {
    this.explanationModal.hide();
  }
}
