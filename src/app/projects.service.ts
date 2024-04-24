import { Injectable } from '@angular/core';
import {PROJECTS} from "./mock-projects";
import {BehaviorSubject, map, of, Subject} from "rxjs";
import {Project} from "./types/project";

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects = new BehaviorSubject<Project[]>(PROJECTS)

  constructor() { }

  getProjects() {
    return this.projects.asObservable();
  }

  getProject(id: number) {
    return this.getProjects().pipe(
      map(projects => projects.find(project => project.id === id))
    )
  }

  searchProjects(projects: Project[], term: string | null) {
    if (!term?.trim()) {
      return of(projects)
    }
    return of(projects.filter(project => this.searchInProject(project, term?.trim().toLowerCase())))
  }

  addProject(project: Omit<Project, 'id'>) {
    const entity: Project = {
      ...project,
      id: this.projects.value.length + 1
    }

    this.projects.next([
      ...this.projects.value,
      entity,
    ])

    return of(entity)
  }

  private searchInProject(project: Project, term: string) {
    const values = [project.name, project.description]
      .filter(Boolean)
      .map(value => value?.toLowerCase());

    return values.some(value => value?.includes(term));
  }
}
