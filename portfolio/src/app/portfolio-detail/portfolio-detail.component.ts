import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.css']
})
export class PortfolioDetailComponent implements OnInit {
  projectId: string = '';

  constructor(private route: ActivatedRoute) {}

  projectTitle: string = 'Project Title';
  projectDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores illo, id recusandae molestias illum unde pariatur, enim tempora.';
  technology: string[] = ['Design', 'HTML5/CSS3', 'CMS', 'Logo'];
  sourceCodeLink: string = '#';
  projectDemoLink: string = '#';

  role: string = 'Your Role';
  tasks: string[] = ['Task 1', 'Task 2', 'Task 3', 'Task 4'];
  
  challengeTitle: string = 'Challenge 1: [Describe the challenge]';
  challengeDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.';
  solutionTitle: string = 'Solution: [Describe the solution implemented]';
  solutionDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.';
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['projectId'];
    
    });
  }
}
