import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDroneViewComponent } from './update-drone-view.component';

describe('UpdateDroneViewComponent', () => {
  let component: UpdateDroneViewComponent;
  let fixture: ComponentFixture<UpdateDroneViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDroneViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDroneViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
