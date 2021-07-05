import { TestBed } from '@angular/core/testing';

import { AgileService } from './agile.service';

describe('AgileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgileService = TestBed.get(AgileService);
    expect(service).toBeTruthy();
  });
});
