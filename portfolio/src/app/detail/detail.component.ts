import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../projects/project.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  projectId: string = '';
  project: any;

  
  constructor(private route: ActivatedRoute, private projectService: ProjectService) {}
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.projectId = params['projectId'];
      this.project = this.projectService.getWorkItemById(this.projectId);
    });
  }
}
