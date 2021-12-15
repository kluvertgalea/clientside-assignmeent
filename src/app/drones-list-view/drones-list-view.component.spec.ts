import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronesListViewComponent } from './drones-list-view.component';

describe('DronesListViewComponent', () => {
  let component: DronesListViewComponent;
  let fixture: ComponentFixture<DronesListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DronesListViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DronesListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
