import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';

import { MainComponent } from './layouts';

import { TemplatesModule } from '../../components/templates';

import {
  LoginComponent,
  HomeComponent,
  PasswordRecoveryComponent,
} from './pages';

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    LoginComponent,
    PasswordRecoveryComponent,
  ],
  imports: [CommonModule, SecurityRoutingModule, TemplatesModule],
})
export class SecurityModule {}
