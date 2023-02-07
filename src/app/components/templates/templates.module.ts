import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TmplHomeComponent } from './tmpl-home/tmpl-home.component';
import { TmplLoginComponent } from './tmpl-login/tmpl-login.component';
import { TmplDashboardComponent } from './tmpl-dashboard/tmpl-dashboard.component';
import { TmplPasswordRecoveryComponent } from './tmpl-password-recovery/tmpl-password-recovery.component';

import { AtomsModule } from '../atoms';

import { MoleculesModule } from '../molecules';

import { OrganismsModule } from '../organisms';

@NgModule({
  imports: [CommonModule, AtomsModule, MoleculesModule, OrganismsModule],
  declarations: [
    TmplHomeComponent,
    TmplPasswordRecoveryComponent,
    TmplLoginComponent,
    TmplDashboardComponent,
  ],
  exports: [
    TmplHomeComponent,
    TmplPasswordRecoveryComponent,
    TmplLoginComponent,
    TmplDashboardComponent,
  ],
})
export class TemplatesModule {}
