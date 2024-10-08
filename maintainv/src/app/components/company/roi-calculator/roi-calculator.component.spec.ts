import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoiCalculatorComponent } from './roi-calculator.component';

describe('RoiCalculatorComponent', () => {
  let component: RoiCalculatorComponent;
  let fixture: ComponentFixture<RoiCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoiCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoiCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
