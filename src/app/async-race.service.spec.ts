import { TestBed } from '@angular/core/testing';

import { AsyncRaceService } from './async-race.service';

describe('AsyncRaceService', () => {
  let service: AsyncRaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncRaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
