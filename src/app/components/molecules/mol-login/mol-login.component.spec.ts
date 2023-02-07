import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolLoginComponent } from './mol-login.component';

describe('MolLoginComponent', () => {
  let component: MolLoginComponent;
  let fixture: ComponentFixture<MolLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MolLoginComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MolLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
