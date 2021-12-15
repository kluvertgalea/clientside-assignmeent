import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroneListingComponent } from './drone-listing.component';

describe('DroneListingComponent', () => {
  let component: DroneListingComponent;
  let fixture: ComponentFixture<DroneListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DroneListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DroneListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
