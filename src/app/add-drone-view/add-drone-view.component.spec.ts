import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDroneViewComponent } from './add-drone-view.component';

describe('AddDroneViewComponent', () => {
  let component: AddDroneViewComponent;
  let fixture: ComponentFixture<AddDroneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDroneViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDroneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
