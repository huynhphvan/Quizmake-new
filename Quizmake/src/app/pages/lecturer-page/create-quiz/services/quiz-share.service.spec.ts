import { TestBed } from '@angular/core/testing';

import { QuizShareService } from './quiz-share.service';

describe('QuizShareService', () => {
  let service: QuizShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
