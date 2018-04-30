import { TestBed, inject } from '@angular/core/testing';

import { LocalWeatherService } from './local-weather.service';

describe('LocalWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalWeatherService]
    });
  });

  it('should be created', inject([LocalWeatherService], (service: LocalWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
