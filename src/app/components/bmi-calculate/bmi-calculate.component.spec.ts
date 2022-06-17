import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmiCalculateComponent } from './bmi-calculate.component';

describe('BmiCalculateComponent', () => {
  let component: BmiCalculateComponent;
  let fixture: ComponentFixture<BmiCalculateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmiCalculateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BmiCalculateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
