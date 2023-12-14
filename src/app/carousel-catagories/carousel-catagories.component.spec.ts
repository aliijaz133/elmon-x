import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCatagoriesComponent } from './carousel-catagories.component';

describe('CarouselCatagoriesComponent', () => {
  let component: CarouselCatagoriesComponent;
  let fixture: ComponentFixture<CarouselCatagoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselCatagoriesComponent]
    });
    fixture = TestBed.createComponent(CarouselCatagoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
