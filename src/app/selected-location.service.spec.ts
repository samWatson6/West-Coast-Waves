import { TestBed, inject } from '@angular/core/testing';

import { SelectedLocationService } from './selected-location.service';

describe('SelectedLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectedLocationService]
    });
  });

  it('should be created', inject([SelectedLocationService], (service: SelectedLocationService) => {
    expect(service).toBeTruthy();
  }));
});
