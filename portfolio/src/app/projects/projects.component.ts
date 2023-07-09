import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

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

  
  
  workItems = this.projectService.getWorkItems();

}

