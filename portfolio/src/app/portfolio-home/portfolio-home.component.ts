import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent {
  socialLinks = [
    { icon: 'bx bxl-linkedin', link: 'https://www.linkedin.com/' },
    { icon: 'bx bxl-github', link: 'https://github.com/' },
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
  
  workItems = [
    { 
      link: '/portfolio-detail/',
      projectId: 'project-1',  
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-2',
      projectId: 'project-2',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-3',
      projectId: 'project-3',    
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-4',
      projectId: 'project-4',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-5',
      projectId: 'project-5',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    {    
      link: '/portfolio-detail/project-6',
      projectId: 'project-6',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-7',
      projectId: 'project-7',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-8',
      projectId: 'project-8',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
    { 
      link: '/portfolio-detail/project-9',
      projectId: 'project-9',   
      image: 'assets/img/placeholder.jpg', 
      name: 'Project K', 
      type: 'WebApp', 
      technologies: 'ReactJS, JQuery, MySQL' 
    },
  ];

  name: string = '';
  email: string = '';
  message: string = '';
  
  submitForm() {
    console.log('Form submitted');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
  }
}
