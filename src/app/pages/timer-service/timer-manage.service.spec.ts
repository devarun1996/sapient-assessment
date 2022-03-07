import { TestBed } from '@angular/core/testing';

import { TimerManageService } from './timer-manage.service';

describe('TimerManageService', () => {
  let service: TimerManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
