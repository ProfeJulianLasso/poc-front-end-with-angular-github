import { FormGroup } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dale-tmpl-password-recovery',
  templateUrl: './tmpl-password-recovery.component.html',
  styleUrls: ['./tmpl-password-recovery.component.scss'],
})
export class TmplPasswordRecoveryComponent {
  @Input()
  imgLogo: string;

  @Input()
  title: string;

  @Input()
  btnTextPasswordRecovery: string;

  @Input()
  lnkText: string;

  @Input()
  lnkURL: string[];

  @Input()
  errorsEmail: Map<string, string>;

  private _formPasswordRecovery: FormGroup;

  @Output()
  formPasswordRecoveryChange: EventEmitter<FormGroup>;

  @Output()
  modalCloseChange: EventEmitter<boolean>;

  constructor() {
    this.lnkURL = [];
    this.title = 'Lorem Ipsum';
    this.lnkText = 'Lorem Ipsum';
    this.btnTextPasswordRecovery = 'Lorem Ipsum';
    this.errorsEmail = new Map<string, string>();
    this.imgLogo = 'http://placekitten.com/201/62';
    this._formPasswordRecovery = new FormGroup({});
    this.modalCloseChange = new EventEmitter<boolean>();
    this.formPasswordRecoveryChange = new EventEmitter<FormGroup>();
  }

  @Input()
  set formPasswordRecovery(form: FormGroup) {
    this._formPasswordRecovery = form;
  }

  get formPasswordRecovery(): FormGroup {
    return this._formPasswordRecovery;
  }
}
