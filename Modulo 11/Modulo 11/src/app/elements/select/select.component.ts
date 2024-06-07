import { Component } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent {

  nationalitySelected: number | undefined | string;
  nationalities: {id: number, description: string}[] = [
    {
      id: 1,
      description: 'Brasileira'
    },
    {
      id: 2,
      description: 'Argentina'
    },
    {
      id: 3,
      description: 'Espanolha'
    }
  ]

  onChange(select: number) {
    this.nationalitySelected = this.nationalities[select-1].description;
  }

}
