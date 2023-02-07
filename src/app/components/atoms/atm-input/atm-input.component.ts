import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { icon as faIconCore } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'dale-atm-input',
  templateUrl: './atm-input.component.html',
  styleUrls: ['./atm-input.component.scss'],
})
export class AtmInputComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  width: string;

  @Input()
  placeholder: string;

  @Input()
  label: string;

  @Input()
  type: string;

  @Input()
  errors: Map<string, string>;

  @Input()
  icon?: IconDefinition;

  hide: boolean;
  errorMessage: string;

  private _formControl: FormControl;

  @Input()
  set formControl(formControl: FormControl) {
    this._formControl = formControl;
    console.log(`set atom ${this.id}`, this._formControl);
  }

  get formControl(): FormControl {
    return this._formControl;
  }

  constructor(
    private registry: MatIconRegistry,
    private sanitizer: DomSanitizer,
  ) {
    this.errorMessage = '';
    this.id = 'ID-not-assigned';
    this.width = '100%';
    this.placeholder = '';
    this.label = '';
    this.type = 'text';
    this.hide = true;
    this.errors = new Map<string, string>();
    this._formControl = new FormControl();
  }

  ngOnInit(): void {
    if (this.icon) {
      console.log('icon', this.icon);
      const svg = faIconCore(this.icon).html.join('');
      this.registry.addSvgIconLiteral(
        'icon',
        this.sanitizer.bypassSecurityTrustHtml(svg),
      );
    }
  }

  hasError(): boolean {
    const errors = this.formControl.errors;
    if (errors !== null) {
      const keys = Object.keys(errors);
      this.errorMessage =
        this.errors.get(keys[0]) ??
        `No se ha implementado el mensaje de error para ${keys[0]}`;
      return true;
    }
    this.errorMessage = '';
    return false;
  }
}
