import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AtmLogoComponent } from './atm-logo/atm-logo.component';
import { AtmIconComponent } from './atm-icon/atm-icon.component';
import { AtmTitleComponent } from './atm-title/atm-title.component';
import { AtmInputComponent } from './atm-input/atm-input.component';
import { AtmSelectComponent } from './atm-select/atm-select.component';
import { AtmButtonComponent } from './atm-button/atm-button.component';
import { AtmTextareaComponent } from './atm-textarea/atm-textarea.component';
import { AtmParagraphComponent } from './atm-paragraph/atm-paragraph.component';
import { AtmDatepickerComponent } from './atm-datepicker/atm-datepicker.component';
import { AtmLinkButtonComponent } from './atm-link-button/atm-link-button.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [
    AtmButtonComponent,
    AtmInputComponent,
    AtmLogoComponent,
    AtmParagraphComponent,
    AtmSelectComponent,
    AtmTextareaComponent,
    AtmTitleComponent,
    AtmDatepickerComponent,
    AtmLinkButtonComponent,
    AtmIconComponent,
  ],
  exports: [
    AtmButtonComponent,
    AtmInputComponent,
    AtmLogoComponent,
    AtmParagraphComponent,
    AtmSelectComponent,
    AtmTextareaComponent,
    AtmTitleComponent,
    AtmDatepickerComponent,
    AtmLinkButtonComponent,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    AtmIconComponent,
  ],
})
export class AtomsModule {}
