import {Component, OnInit} from '@angular/core';
import {Project} from "../types/project";
import {ProjectsService} from "../projects.service";
import {ProjectCardComponent} from "../components/project-card.component";
import {CommonModule} from "@angular/common";
import {ProjectListComponent} from "../components/project-list.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";

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
  projects$!: Observable<Project[]>
  private projects: Project[] = []
  private searchTerms = new Subject<string>()

  constructor(
    private projectsService: ProjectsService
  ) {
  }

  ngOnInit() {
    this.getProjects()

    this.projects$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.projectsService.searchProjects(this.projects, term)),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  getProjects() {
    this.projectsService.getProjects().subscribe(projects => {
      this.projects = projects
    })
  }
}
