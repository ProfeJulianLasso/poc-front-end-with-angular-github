import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'dale-mol-modal-check-your-email',
  templateUrl: './mol-modal-check-your-email.component.html',
  styleUrls: ['./mol-modal-check-your-email.component.scss'],
})
export class MolModalCheckYourEmailComponent {
  constructor(
    private dialogRef: MatDialogRef<MolModalCheckYourEmailComponent>,
  ) {}

  closeDialog() {
    this.dialogRef.close();
  }
}
