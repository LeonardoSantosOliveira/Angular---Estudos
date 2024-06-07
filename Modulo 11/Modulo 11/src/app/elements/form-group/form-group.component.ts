import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {
  @ViewChild('onSubmit') meuForm!: NgForm

  onSubmit(meuForm: NgForm) {
    console.log(meuForm.value)

    meuForm.reset();
  }
}
