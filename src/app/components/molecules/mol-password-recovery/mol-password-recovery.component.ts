import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { faAt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dale-mol-password-recovery',
  templateUrl: './mol-password-recovery.component.html',
  styleUrls: ['./mol-password-recovery.component.scss'],
})
export class MolPasswordRecoveryComponent {
  @Input()
  title: string;

  @Input()
  btnWidth: string;

  @Input()
  btnTextPasswordRecovery: string;

  @Input()
  btnExecute: () => void;

  @Input()
  lnkText: string;

  @Input()
  lnkURL: string[];

  @Input()
  errorsEmail: Map<string, string>;

  @Output()
  formPasswordRecoveryChange: EventEmitter<FormGroup>;

  iconEmail: IconDefinition;

  private _formPasswordRecovery: FormGroup;

  constructor() {
    this.title = '';
    this.lnkURL = [];
    this.lnkText = '';
    this.btnWidth = '300px';
    this.iconEmail = faAt;
    this.btnTextPasswordRecovery = '';
    this.errorsEmail = new Map<string, string>();
    this._formPasswordRecovery = new FormGroup({});
    this.formPasswordRecoveryChange = new EventEmitter<FormGroup>();
    this.btnExecute = () => {
      throw new Error('Method not implemented');
    };
  }

  @Input()
  set formPasswordRecovery(form: FormGroup) {
    this._formPasswordRecovery = form;
  }

  get formPasswordRecovery(): FormGroup {
    return this._formPasswordRecovery;
  }

  getControl(control: string): FormControl {
    return this.formPasswordRecovery.controls[control] as FormControl;
  }
}
