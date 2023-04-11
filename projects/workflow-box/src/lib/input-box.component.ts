import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-inputBox',
  template: `
    <p>
      input-box works!
    </p>

    <p>
      !!inputLists ? !!inputLists[0] : 'lista vuota'
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
