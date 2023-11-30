import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAddEmployesComponent } from './bubble-add-employes.component';

describe('BubbleAddEmployesComponent', () => {
  let component: BubbleAddEmployesComponent;
  let fixture: ComponentFixture<BubbleAddEmployesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleAddEmployesComponent]
    });
    fixture = TestBed.createComponent(BubbleAddEmployesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
