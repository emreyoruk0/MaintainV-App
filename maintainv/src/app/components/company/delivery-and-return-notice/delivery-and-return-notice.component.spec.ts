import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryAndReturnNoticeComponent } from './delivery-and-return-notice.component';

describe('DeliveryAndReturnNoticeComponent', () => {
  let component: DeliveryAndReturnNoticeComponent;
  let fixture: ComponentFixture<DeliveryAndReturnNoticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryAndReturnNoticeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryAndReturnNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
