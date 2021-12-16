import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneDetailsViewComponent } from './drone-details-view.component';

describe('DroneDetailsViewComponent', () => {
  let component: DroneDetailsViewComponent;
  let fixture: ComponentFixture<DroneDetailsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneDetailsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
