import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormControlStatus, ValidationErrors} from "@angular/forms";
import {MatError} from "@angular/material/form-field";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [
    CommonModule,
    MatError
  ],
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})
export class FormErrorComponent implements OnInit {
  @Input({required: true})
  control: AbstractControl | null = null

  message: string | null = null

  ngOnInit() {
    this.control?.statusChanges?.subscribe(() => {
      this.setMessage(this.control?.errors)
    })

    this.setMessage(this.control?.errors)
  }

  private setMessage(value: ValidationErrors | any) {
    if (typeof value !== "object" || value === null) {
      this.message = null
    } else {
      const keys = Object.keys(value)
      if (keys.length === 0) {
        this.message = null
      } else {
        this.message = keys.map(key => {
          switch (key) {
            case 'required':
              return 'A mező kitöltése kötelező'
            case 'minlength':
              return `A mező értékének legalább ${value[key].requiredLength} karakter hosszúnak kell lennie`
            case 'maxlength':
              return `A mező értékének legfeljebb ${value[key].requiredLength} karakter hosszúnak kell lennie`
            default:
              return 'A mező értéke nem megfelelő'
          }
        }).join(', ')
      }
    }
  }
}
