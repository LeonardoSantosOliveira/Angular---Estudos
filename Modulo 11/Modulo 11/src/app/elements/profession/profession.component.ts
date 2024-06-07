import { Component } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-profession',
  templateUrl: './profession.component.html',
  styleUrl: './profession.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm}]
})
export class ProfessionComponent {

}
