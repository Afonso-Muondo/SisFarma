/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RemedioService } from './remedio.service';

describe('Service: Remedio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RemedioService]
    });
  });

  it('should ...', inject([RemedioService], (service: RemedioService) => {
    expect(service).toBeTruthy();
  }));
});
