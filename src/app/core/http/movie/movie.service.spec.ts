import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBlocks', () => {
    it('should return an array of blocks', () => {
      service.getMovies('superman').subscribe((response: any[]) => {
        expect(response.length).toBeGreaterThan(0);
      });
    });
  });
});
