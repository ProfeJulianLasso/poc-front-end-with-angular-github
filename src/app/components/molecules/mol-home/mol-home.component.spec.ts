import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolHomeComponent } from './mol-home.component';

describe('MolHomeComponent', () => {
  let component: MolHomeComponent;
  let fixture: ComponentFixture<MolHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MolHomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
