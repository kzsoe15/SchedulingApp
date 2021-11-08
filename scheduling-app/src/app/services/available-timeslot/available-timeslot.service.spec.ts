import { TestBed } from '@angular/core/testing';

import { AvailableTimeslotService } from './available-timeslot.service';

describe('AvailableTimeslotService', () => {
  let service: AvailableTimeslotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvailableTimeslotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
