import { TestBed } from '@angular/core/testing';

import { BiographieService } from './biographie.service';

describe('BiographieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiographieService = TestBed.get(BiographieService);
    expect(service).toBeTruthy();
  });
});
