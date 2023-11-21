import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleNbEmployesComponent } from './bubble-nb-employes.component';

describe('BubbleNbEmployesComponent', () => {
  let component: BubbleNbEmployesComponent;
  let fixture: ComponentFixture<BubbleNbEmployesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleNbEmployesComponent]
    });
    fixture = TestBed.createComponent(BubbleNbEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
