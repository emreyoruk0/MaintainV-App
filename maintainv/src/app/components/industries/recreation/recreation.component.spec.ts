import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecreationComponent } from './recreation.component';

describe('RecreationComponent', () => {
  let component: RecreationComponent;
  let fixture: ComponentFixture<RecreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecreationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
