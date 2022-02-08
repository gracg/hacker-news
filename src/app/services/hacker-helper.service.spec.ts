import { TestBed } from '@angular/core/testing';

import { HackerHelperService } from './hacker-helper.service';

describe('HackerHelperService', () => {
  let service: HackerHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HackerHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
