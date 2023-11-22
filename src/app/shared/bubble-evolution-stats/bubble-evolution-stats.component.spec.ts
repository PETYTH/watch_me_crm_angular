import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEvolutionStatsComponent } from './bubble-evolution-stats.component';

describe('BubbleEvolutionStatsComponent', () => {
  let component: BubbleEvolutionStatsComponent;
  let fixture: ComponentFixture<BubbleEvolutionStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleEvolutionStatsComponent]
    });
    fixture = TestBed.createComponent(BubbleEvolutionStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
