import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dale-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  imgLogo: string;
  frmLogin: FormGroup;
  btnTextLogin: string;
  title: string;
  lnkText: string;
  lnkURL: string[];
  errorsUsername: Map<string, string>;
  errorsPassword: Map<string, string>;

  constructor() {
    this.lnkText = 'Olvidé mi contraseña';
    this.title = 'Iniciar sesión';
    this.lnkURL = ['../password-recovery'];
    this.btnTextLogin = 'ingresar';
    this.imgLogo = 'assets/images/sofka-logo.webp';
    this.frmLogin = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
    this.errorsUsername = new Map<string, string>();
    this.errorsUsername.set('required', 'El nombre de usuario es requerido');
    this.errorsPassword = new Map<string, string>();
    this.errorsPassword.set('required', 'La contraseña es requerido');
  }
}
