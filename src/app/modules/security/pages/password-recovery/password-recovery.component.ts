import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'dale-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.scss'],
})
export class PasswordRecoveryComponent {
  imgLogo: string;
  frmPasswordRecovery: FormGroup;
  btnTextPasswordRecovery: string;
  title: string;
  lnkText: string;
  lnkURL: string[];
  errorsEmail: Map<string, string>;

  constructor(private router: Router) {
    this.lnkURL = ['../login'];
    this.lnkText = 'Volver al inicio de sesión';
    this.title = '¿Olvidaste tu contraseña?';
    this.imgLogo = 'assets/images/sofka-logo.webp';
    this.btnTextPasswordRecovery = 'restablecer contraseña';
    this.frmPasswordRecovery = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(new RegExp(environment.emailPattern)),
      ]),
    });
    this.errorsEmail = new Map<string, string>();
    this.errorsEmail.set('required', 'El correo es requerido');
    this.errorsEmail.set('pattern', 'EL correo escrito no es válido');
  }

  closeModal(info: boolean): void {
    if (info) this.router.navigate(['../login']);
  }
}
