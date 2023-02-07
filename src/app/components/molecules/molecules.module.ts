import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';

import { AtomsModule } from '../atoms';

import { MolHomeComponent } from './mol-home/mol-home.component';
import { MolLoginComponent } from './mol-login/mol-login.component';
import { MolPasswordRecoveryComponent } from './mol-password-recovery/mol-password-recovery.component';
import { MolModalCheckYourEmailComponent } from './mol-modal-check-your-email/mol-modal-check-your-email.component';

@NgModule({
  imports: [CommonModule, AtomsModule, MatCardModule],
  declarations: [
    MolHomeComponent,
    MolLoginComponent,
    MolPasswordRecoveryComponent,
    MolModalCheckYourEmailComponent,
  ],
  exports: [
    MolHomeComponent,
    MolLoginComponent,
    MolPasswordRecoveryComponent,
    MolModalCheckYourEmailComponent,
  ],
})
export class MoleculesModule {}
