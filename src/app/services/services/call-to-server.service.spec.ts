import { TestBed } from '@angular/core/testing';

import { CallToServerService } from './call-to-server.service';


describe('CallToServerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallToServerService = TestBed.get(CallToServerService);
    expect(service).toBeTruthy();
  });
});
