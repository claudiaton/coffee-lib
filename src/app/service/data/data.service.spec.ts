import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]});

    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
