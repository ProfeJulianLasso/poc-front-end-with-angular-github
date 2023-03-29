import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faAt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dale-mol-login',
  templateUrl: './mol-login.component.html',
  styleUrls: ['./mol-login.component.scss'],
})
export class MolLoginComponent {
  @Input()
  btnWidth: string;

  @Input()
  inputTypePassword: string;

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

  @Output()
  formLoginChange: EventEmitter<FormGroup>;

  iconEmail: IconDefinition;

  private _formLogin: FormGroup;

  constructor() {
    this.title = '';
    this.lnkURL = [];
    this.lnkText = '';
    this.iconEmail = faAt;
    this.btnTextLogin = '';
    this.btnWidth = '300px';
    this.inputTypePassword = 'password';
    this._formLogin = new FormGroup({});
    this.errorsUsername = new Map<string, string>();
    this.errorsPassword = new Map<string, string>();
    this.formLoginChange = new EventEmitter<FormGroup>();
    this.btnExecuteLogin = () => {
      throw new Error('Method not implemented - molecule');
    };
  }

  @Input()
  set formLogin(form: FormGroup) {
    this._formLogin = form;
  }

  get formLogin(): FormGroup {
    return this._formLogin;
  }

  getControl(control: string): FormControl {
    return this.formLogin.controls[control] as FormControl;
  }
}
