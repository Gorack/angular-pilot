import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Project} from "../types/project";
import {ProjectsService} from "../projects.service";
import {ProjectCardComponent} from "../components/project-card.component";

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    ProjectCardComponent
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.getProject();
  }

  getProject() {
    const id: string = this.route.snapshot.paramMap.get('id') as string;
    if (id) {
      this.projectService.getProject(parseInt(id)).subscribe(project => {
        if (project) {
          this.project = project;
        } else {
          this.log(`Project with id ${id} not found`);
          this.router.navigate(['/']);
        }
      });
    } else {
      this.log('No id found in route');
    }
  }

  private log(message: string) {
    console.log(`ProjectDetailsComponent: ${message}`)
  }
}
