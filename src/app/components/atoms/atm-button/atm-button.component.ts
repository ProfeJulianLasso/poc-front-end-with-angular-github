import { Component, Input } from '@angular/core';

@Component({
  selector: 'dale-atm-button',
  templateUrl: './atm-button.component.html',
  styleUrls: ['./atm-button.component.scss'],
})
export class AtmButtonComponent {
  @Input()
  btnText: string;

  @Input()
  btnExecute: () => void;

  @Input()
  width: string;

  @Input()
  disabled: boolean;

  constructor() {
    this.disabled = false;
    this.width = 'fit-content';
    this.btnText = 'Lorem Ipsum';
    this.btnExecute = () => {
      throw new Error('Method not implemented');
    };
  }
}
