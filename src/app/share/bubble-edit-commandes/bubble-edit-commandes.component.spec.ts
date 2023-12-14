import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEditCommandesComponent } from './bubble-edit-commandes.component';

describe('BubbleEditCommandesComponent', () => {
  let component: BubbleEditCommandesComponent;
  let fixture: ComponentFixture<BubbleEditCommandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleEditCommandesComponent]
    });
    fixture = TestBed.createComponent(BubbleEditCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
