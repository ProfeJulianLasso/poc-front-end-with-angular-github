import { Component } from '@angular/core';
import { faEnvelopeOpenText, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dale-atm-icon',
  templateUrl: './atm-icon.component.html',
  styleUrls: ['./atm-icon.component.scss']
})
export class AtmIconComponent {
  icon: IconDefinition;

  constructor() {
    this.icon = faEnvelopeOpenText;
  }
}
