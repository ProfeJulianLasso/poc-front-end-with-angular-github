import { Component, Input } from '@angular/core';

@Component({
  selector: 'dale-atm-link-button',
  templateUrl: './atm-link-button.component.html',
  styleUrls: ['./atm-link-button.component.scss'],
})
export class AtmLinkButtonComponent {
  @Input()
  routerLink: string | string[];

  @Input()
  text: string;

  @Input()
  width: string;

  constructor() {
    this.text = 'Lorem Ipsum';
    this.routerLink = '';
    this.width = 'fit-content';
  }
}
