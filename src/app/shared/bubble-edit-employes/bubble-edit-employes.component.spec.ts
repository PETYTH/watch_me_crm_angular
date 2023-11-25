import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEditEmployesComponent } from './bubble-edit-employes.component';

describe('BubbleEditEmployesComponent', () => {
  let component: BubbleEditEmployesComponent;
  let fixture: ComponentFixture<BubbleEditEmployesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleEditEmployesComponent]
    });
    fixture = TestBed.createComponent(BubbleEditEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
