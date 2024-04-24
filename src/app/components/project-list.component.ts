import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Project} from "../types/project";
import {ProjectCardComponent} from "./project-card.component";

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  @Input()
  projects: Project[] = []
}
