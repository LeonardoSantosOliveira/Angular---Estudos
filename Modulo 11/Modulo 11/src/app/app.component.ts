import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  nome: string = 'Leonardo'

  @ViewChild('meuInputFormControl') inputElFormControl!: NgModel;
  @ViewChild('meuInput') inputEl!: ElementRef<HTMLInputElement>

  send() {
    if (this.inputElFormControl.valid && this.inputElFormControl.touched) {
      alert('Enviado com sucesso')
    } else {
      alert('O formulário está inválido!')
    }
  }

  ngAfterViewInit() {
    console.log('FormControl: ',this.inputElFormControl);
    console.log('Normal: ', this.inputEl)

  }
}
