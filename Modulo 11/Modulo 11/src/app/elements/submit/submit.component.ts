import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrl: './submit.component.scss'
})
export class SubmitComponent implements AfterViewInit {
  inputText: string = '';
  textArea: string = '';
  select: string = '1';
  radioButton: string = '1';
  checkbox: boolean = false;

  @ViewChild('meuForm') meuForm!: NgForm
  @ViewChild('meuInput') meuInput!: NgModel

  ngAfterViewInit() {
    this.meuForm.valueChanges?.subscribe((value: any) => {
      console.log('Form Change ', value)
    });

    this.meuInput.valueChanges?.subscribe((value: string) => {
      console.log('Input Changes: ' ,value)
    })
  }

  onSubmit(form: NgForm) {
    console.log('OnSubmit ', form.value)
  }

  onReset(form: NgForm) {
    form.reset();
    console.log('onReset ', form.value)

    console.log(this.inputText);
    console.log(this.textArea);
    console.log(this.select);
    console.log(this.radioButton);
    console.log(this.checkbox);

    setTimeout(() => {
      console.log(form.value)
    },1000)
  }


}
