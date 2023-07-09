import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  socialLinks = [
    { icon: 'bx bxl-linkedin', link: 'https://www.linkedin.com/' },
    { icon: 'bx bxl-github', link: 'https://github.com/' },
    { icon: 'bx bxl-facebook', link: 'https://facebook.com/' },
    { icon: 'bx bxl-instagram', link: 'https://instagram.com/' },
    { icon: 'bx bxl-twitter', link: 'https://twitter.com/' },
  ];

  homeSocialLinks = this.socialLinks.filter(link => link.icon === 'bx bxl-linkedin' || link.icon === 'bx bxl-github');
  footerSocialLinks = this.socialLinks.filter(link => link.icon === 'bx bxl-facebook' || link.icon === 'bx bxl-instagram'|| link.icon === 'bx bxl-twitter');

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
