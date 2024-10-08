import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalityComponent } from './hospitality.component';

describe('HospitalityComponent', () => {
  let component: HospitalityComponent;
  let fixture: ComponentFixture<HospitalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
