import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentOrganizationsComponent } from './government-organizations.component';

describe('GovernmentOrganizationsComponent', () => {
  let component: GovernmentOrganizationsComponent;
  let fixture: ComponentFixture<GovernmentOrganizationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GovernmentOrganizationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovernmentOrganizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
