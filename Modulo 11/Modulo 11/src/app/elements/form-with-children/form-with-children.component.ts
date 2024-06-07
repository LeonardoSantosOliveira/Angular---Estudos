import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-with-children',
  templateUrl: './form-with-children.component.html',
  styleUrl: './form-with-children.component.scss'
})
export class FormWithChildrenComponent {
  onSubmit(meuForm: NgForm) {
    console.log(meuForm.value)

    meuForm.reset();
  }
}
