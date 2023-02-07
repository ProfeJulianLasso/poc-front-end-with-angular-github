import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtomsModule } from '../atoms';

import { MoleculesModule } from '../molecules';

import { OrgPasswordRecoveryComponent } from './org-password-recovery/org-password-recovery.component';

@NgModule({
  imports: [CommonModule, AtomsModule, MoleculesModule],
  declarations: [
    OrgPasswordRecoveryComponent,
  ],
  exports: [
    OrgPasswordRecoveryComponent,
  ],
})
export class OrganismsModule {}
