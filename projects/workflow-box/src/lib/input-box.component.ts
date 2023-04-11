import { Component, Input } from '@angular/core';

@Component({
  selector: 'form-input-box',
  template: `
    <p>
      input-box works!
    </p>

    <p>
      {{!!inputLists && !!inputLists[0] ? inputLists[0].value : 'Lista vuota'}}
    </p>
  `,
  styles: [
  ]
})
export class InputBoxComponent {

  @Input()
  inputLists: any[] = [];

  constructor(){}
  
}
