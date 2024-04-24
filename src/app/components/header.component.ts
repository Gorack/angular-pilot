import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";
import {ContainerComponent} from "./container.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MatAnchor,
    ContainerComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
