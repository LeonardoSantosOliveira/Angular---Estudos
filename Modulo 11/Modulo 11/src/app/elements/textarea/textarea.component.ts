import { Component } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrl: './textarea.component.scss'
})
export class TextareaComponent {
  text: string = '';

  showText(){
    alert(this.text)
  }

  onChange(text: string) {
    this.text = text
  }
}
