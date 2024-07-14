import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesAgreementComponent } from './sales-agreement.component';

describe('SalesAgreementComponent', () => {
  let component: SalesAgreementComponent;
  let fixture: ComponentFixture<SalesAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesAgreementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
