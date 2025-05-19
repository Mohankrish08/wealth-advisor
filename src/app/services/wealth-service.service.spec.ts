import { TestBed } from '@angular/core/testing';

import { WealthServiceService } from './wealth-service.service';

describe('WealthServiceService', () => {
  let service: WealthServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WealthServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
