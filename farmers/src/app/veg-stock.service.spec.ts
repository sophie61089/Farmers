import { TestBed } from '@angular/core/testing';

import { VegStockService } from './veg-stock.service';

describe('VegStockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VegStockService = TestBed.get(VegStockService);
    expect(service).toBeTruthy();
  });
});
