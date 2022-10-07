import { TestBed } from '@angular/core/testing';

import { RemediosService } from './remedios.service';

describe('RemediosService', () => {
  let service: RemediosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemediosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
