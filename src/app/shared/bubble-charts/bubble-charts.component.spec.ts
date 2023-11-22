import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleChartsComponent } from './bubble-charts.component';

describe('BubbleChartsComponent', () => {
  let component: BubbleChartsComponent;
  let fixture: ComponentFixture<BubbleChartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleChartsComponent]
    });
    fixture = TestBed.createComponent(BubbleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
