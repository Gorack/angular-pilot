import { Routes } from '@angular/router';
import {ProjectsComponent} from "./pages/projects.component";
import {ProjectCreateComponent} from "./pages/project-create.component";
import {ProjectDetailsComponent} from "./pages/project-details.component";

export const routes: Routes = [
  {path: '', component: ProjectsComponent},
  {path: 'create-project', component: ProjectCreateComponent},
  {path: 'project', redirectTo: ''},
  {path: 'project/:id', component: ProjectDetailsComponent},
];
