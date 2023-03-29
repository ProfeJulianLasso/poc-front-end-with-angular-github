import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'dale-tmpl-login',
  templateUrl: './tmpl-login.component.html',
  styleUrls: ['./tmpl-login.component.scss'],
})
export class TmplLoginComponent {
  @Input()
  imgLogo: string;

  @Input()
  title: string;

  @Input()
  btnTextLogin: string;

  @Input()
  lnkText: string;

  @Input()
  lnkURL: string[];

  @Input()
  errorsUsername: Map<string, string>;

  @Input()
  errorsPassword: Map<string, string>;

  @Input()
  btnExecuteLogin: () => void;

  private _formLogin: FormGroup;

  @Output()
  formLoginChange: EventEmitter<FormGroup>;

  constructor() {
    this.imgLogo = 'http://placekitten.com/201/62';
    this.title = 'Lorem Ipsum';
    this.lnkText = 'Lorem Ipsum';
    this.btnTextLogin = 'Lorem Ipsum';
    this.lnkURL = [];
    this._formLogin = new FormGroup({});
    this.errorsUsername = new Map<string, string>();
    this.errorsPassword = new Map<string, string>();
    this.formLoginChange = new EventEmitter<FormGroup>();
    this.btnExecuteLogin = () => {
      throw new Error('Method not implemented - template');
    };
  }

  @Input()
  set formLogin(form: FormGroup) {
    this._formLogin = form;
  }

  get formLogin(): FormGroup {
    return this._formLogin;
  }
}
