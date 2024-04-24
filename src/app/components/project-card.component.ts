import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Project} from "../types/project";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  @Input()
  project: Project | null = null

  @Input() inline = false
  @Input() showDetails = true
  @Input() extended = false
}
