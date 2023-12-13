import { TestBed } from '@angular/core/testing';

import { EmailServceService } from './email.servce.service';

describe('EmailServceService', () => {
  let service: EmailServceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailServceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
