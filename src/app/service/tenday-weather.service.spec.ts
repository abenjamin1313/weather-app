import { TestBed, inject } from '@angular/core/testing';

import { TendayWeatherService } from './tenday-weather.service';

describe('TendayWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TendayWeatherService]
    });
  });

  it('should be created', inject([TendayWeatherService], (service: TendayWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
