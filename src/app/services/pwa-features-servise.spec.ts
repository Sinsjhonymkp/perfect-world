import { TestBed } from '@angular/core/testing';

import { PwaFeaturesServise } from './pwa-features-servise';

describe('PwaFeaturesServise', () => {
  let service: PwaFeaturesServise;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PwaFeaturesServise);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
