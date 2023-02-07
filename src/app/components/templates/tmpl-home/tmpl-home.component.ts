import { Component, Input } from '@angular/core';

@Component({
  selector: 'dale-tmpl-home',
  templateUrl: './tmpl-home.component.html',
  styleUrls: ['./tmpl-home.component.scss'],
})
export class TmplHomeComponent {
  @Input()
  title: string;

  @Input()
  btnText: string;

  @Input()
  btnExecute: () => void;

  @Input()
  imgLogo: string;

  @Input()
  titleColor: 'light' | 'dark';

  constructor() {
    this.title = 'Lorem Ipsum';
    this.btnText = 'Lorem Ipsum';
    this.imgLogo = '';
    this.titleColor = 'light';
    this.btnExecute = () => {
      throw new Error('Method not implemented');
    };
  }
}
