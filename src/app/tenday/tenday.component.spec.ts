import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TendayComponent } from './tenday.component';

describe('TendayComponent', () => {
  let component: TendayComponent;
  let fixture: ComponentFixture<TendayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TendayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TendayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
