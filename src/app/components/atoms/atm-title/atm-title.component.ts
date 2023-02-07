import { Component, Input } from '@angular/core';

@Component({
  selector: 'dale-atm-title',
  templateUrl: './atm-title.component.html',
  styleUrls: ['./atm-title.component.scss'],
})
export class AtmTitleComponent {
  @Input()
  title: string;

  @Input()
  color: 'light' | 'dark';

  constructor() {
    this.title = '';
    this.color = 'light';
  }
}
