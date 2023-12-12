import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDetailsComponent } from './trending-details.component';

describe('TrendingDetailsComponent', () => {
  let component: TrendingDetailsComponent;
  let fixture: ComponentFixture<TrendingDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrendingDetailsComponent]
    });
    fixture = TestBed.createComponent(TrendingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
