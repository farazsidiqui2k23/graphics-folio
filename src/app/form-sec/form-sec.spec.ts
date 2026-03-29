import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSec } from './form-sec';

describe('FormSec', () => {
  let component: FormSec;
  let fixture: ComponentFixture<FormSec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSec],
    }).compileComponents();

    fixture = TestBed.createComponent(FormSec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
