import {Component, OnInit} from '@angular/core';
import {Project} from "../types/project";
import {ProjectsService} from "../projects.service";
import {ProjectCardComponent} from "../components/project-card.component";
import {CommonModule} from "@angular/common";
import {ProjectListComponent} from "../components/project-list.component";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    ProjectListComponent,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = []
  searchControl = new FormControl<string>('')

  constructor(
    private projectsService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.searchProjects()
    this.searchControl.valueChanges.subscribe(() => this.searchProjects())
  }

  searchProjects() {
    this.projectsService.searchProjects(this.searchControl.value).subscribe(projects => this.projects = projects)
  }
}
