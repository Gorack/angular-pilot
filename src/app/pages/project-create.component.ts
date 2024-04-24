import {Component, OnInit} from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {Member} from "../types/member";
import {Link} from "../types/link";
import {MatStepperModule} from "@angular/material/stepper";
import {MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {CommonModule} from "@angular/common";
import {FormErrorComponent} from "../components/form-error.component";
import {MatIcon} from "@angular/material/icon";
import {ProjectsService} from "../projects.service";
import {Router} from "@angular/router";
import {Project} from "../types/project";
import {ProjectCardComponent} from "../components/project-card.component";

@Component({
  selector: 'app-project-create',
  standalone: true,
  imports: [
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormErrorComponent,
    MatIcon,
    ProjectCardComponent,
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  templateUrl: './project-create.component.html',
  styleUrl: './project-create.component.scss'
})
export class ProjectCreateComponent implements OnInit {
  members = new FormArray<FormGroup>([])
  links = new FormArray<FormGroup>([])
  firstStepForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(255)
    ]),
    description: new FormControl('', [
      Validators.minLength(50),
      Validators.maxLength(500),
    ]),
  })
  secondStepForm = new FormGroup({
    members: this.members
  })
  thirdStepForm = new FormGroup({
    links:
    this.links
  })
  project: Project | null = null

  constructor(
    private projectService: ProjectsService,
    private router: Router
  ) {
  }

  ngOnInit() {

  }

  prepareProject() {
    if (this.thirdStepForm.invalid) return

    const members = this.members.value.map((member: Member) => {
      return {
        name: member.name,
        position: member.position
      }
    })
    const links = this.links.value.map((link: Link) => {
      return {
        name: link.name,
        url: link.url
      }
    })
    this.project = {
      name: this.firstStepForm.value.name as string,
      description: this.firstStepForm.value.description as string,
      members,
      links
    }
  }

  addProject() {
    this.projectService.addProject(this.project as Project).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  addMember() {
    this.members.push(
      new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.maxLength(255)
        ]),
        position: new FormControl('', [
          Validators.required,
          Validators.maxLength(255)
        ])
      })
    )
  }

  removeMember(index: number) {
    this.members.removeAt(index)
  }

  addLink() {
    this.links.push(
      new FormGroup({
        name: new FormControl('', [
          Validators.required,
          Validators.maxLength(255)
        ]),
        url: new FormControl('', [
          Validators.required,
          Validators.maxLength(255)
        ])
      })
    )
  }

  removeLink(index: number) {
    this.links.removeAt(index)
  }
}
