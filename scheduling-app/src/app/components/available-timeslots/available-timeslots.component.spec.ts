import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableTimeslotsComponent } from './available-timeslots.component';

describe('AvailableTimeslotsComponent', () => {
  let component: AvailableTimeslotsComponent;
  let fixture: ComponentFixture<AvailableTimeslotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvailableTimeslotsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableTimeslotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
