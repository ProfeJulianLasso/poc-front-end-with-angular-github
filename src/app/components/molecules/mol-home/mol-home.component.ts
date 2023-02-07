import { Component, Input } from '@angular/core';

@Component({
  selector: 'dale-mol-home',
  templateUrl: './mol-home.component.html',
  styleUrls: ['./mol-home.component.scss'],
})
export class MolHomeComponent {
  @Input()
  title: string;

  @Input()
  btnText: string;

  @Input()
  btnExecute: () => void;

  @Input()
  titleColor: 'light' | 'dark';

  constructor() {
    this.title = '';
    this.btnText = '';
    this.titleColor = 'light';
    this.btnExecute = () => {
      throw new Error('Method not implemented');
    };
  }
}
