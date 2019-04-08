import { TestBed } from '@angular/core/testing';

import { AppConfirmationService } from './app-confirmation.service';

describe('AppConfirmationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfirmationService = TestBed.get(AppConfirmationService);
    expect(service).toBeTruthy();
  });
});
