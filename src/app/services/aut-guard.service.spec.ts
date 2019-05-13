import { TestBed } from '@angular/core/testing';

import { AutGuardService } from './aut-guard.service';

describe('AutGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutGuardService = TestBed.get(AutGuardService);
    expect(service).toBeTruthy();
  });
});
