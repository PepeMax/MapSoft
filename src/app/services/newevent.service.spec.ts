import { TestBed } from '@angular/core/testing';

import { NeweventService } from './newevent.service';

describe('NeweventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeweventService = TestBed.get(NeweventService);
    expect(service).toBeTruthy();
  });
});
