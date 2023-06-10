import { TestBed } from '@angular/core/testing';

import { ReportCustomerService } from './log-report.service';

describe('ReportCustomerService', () => {
  let service: ReportCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
