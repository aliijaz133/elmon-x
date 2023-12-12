import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElmonXComponent } from './elmon-x.component';

describe('ElmonXComponent', () => {
  let component: ElmonXComponent;
  let fixture: ComponentFixture<ElmonXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElmonXComponent]
    });
    fixture = TestBed.createComponent(ElmonXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
