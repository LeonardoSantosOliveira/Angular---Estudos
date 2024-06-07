import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ng-form',
  templateUrl: './ng-form.component.html',
  styleUrl: './ng-form.component.scss'
})
export class NgFormComponent implements AfterViewInit{
  @ViewChild('meuForm') form!: NgForm;

  ngAfterViewInit() {
    console.log(this.form)
  }

}
