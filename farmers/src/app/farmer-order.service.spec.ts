import { TestBed } from '@angular/core/testing';

import { FarmerOrderService } from './farmer-order.service';

describe('FarmerOrderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FarmerOrderService = TestBed.get(FarmerOrderService);
    expect(service).toBeTruthy();
  });
});
