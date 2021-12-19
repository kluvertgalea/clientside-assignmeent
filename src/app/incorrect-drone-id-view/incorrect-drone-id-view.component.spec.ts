import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncorrectDroneIdViewComponent } from './incorrect-drone-id-view.component';

describe('IncorrectDroneIdViewComponent', () => {
  let component: IncorrectDroneIdViewComponent;
  let fixture: ComponentFixture<IncorrectDroneIdViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncorrectDroneIdViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectDroneIdViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
