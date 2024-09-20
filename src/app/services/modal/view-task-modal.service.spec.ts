import { TestBed } from '@angular/core/testing';

import { ViewTaskModalService } from './view-task-modal.service';

describe('ViewTaskModalService', () => {
  let service: ViewTaskModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewTaskModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
