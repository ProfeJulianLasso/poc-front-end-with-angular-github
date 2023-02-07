import { FormGroup } from '@angular/forms';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { MolModalCheckYourEmailComponent } from '../../molecules';
@Component({
  selector: 'dale-org-password-recovery',
  templateUrl: './org-password-recovery.component.html',
  styleUrls: ['./org-password-recovery.component.scss']
})
export class OrgPasswordRecoveryComponent {
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
  private modal: ComponentType<MolModalCheckYourEmailComponent>;

  @Output()
  formPasswordRecoveryChange: EventEmitter<FormGroup>;

  @Output()
  modalCloseChange: EventEmitter<boolean>;

  constructor(private dialog: MatDialog) {
    this.lnkURL = [];
    this.title = '';
    this.lnkText = '';
    this.btnTextPasswordRecovery = '';
    this.errorsEmail = new Map<string, string>();
    this.modal = MolModalCheckYourEmailComponent;
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

  openDialog(): void {
    const dialogRef = this.dialog.open(this.modal, {
      width: '400px',
      autoFocus: false,
      disableClose: true,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.modalCloseChange.emit(true);
    });
  }
}
