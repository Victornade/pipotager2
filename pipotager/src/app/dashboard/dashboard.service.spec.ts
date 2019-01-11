import { TestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Dashboard.ServiceService = TestBed.get(Dashboard.ServiceService);
    expect(service).toBeTruthy();
  });
});
