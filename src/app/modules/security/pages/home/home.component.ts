import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dale-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  title: string;
  btnText: string;
  imgLogo: string;
  titleColor: 'light' | 'dark';

  constructor(private router: Router) {
    this.title = '¡Bienvenidos a Sofka PoC!';
    this.btnText = 'iniciar sesión';
    this.imgLogo = 'assets/images/sofka-logo.webp';
    this.titleColor = 'light';
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
