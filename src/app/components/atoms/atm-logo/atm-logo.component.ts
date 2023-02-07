import { Component, Input } from '@angular/core';

@Component({
  selector: 'dale-atm-logo',
  templateUrl: './atm-logo.component.html',
  styleUrls: ['./atm-logo.component.scss'],
})
export class AtmLogoComponent {
  @Input()
  logo: string;

  constructor() {
    this.logo = '';
  }
}
