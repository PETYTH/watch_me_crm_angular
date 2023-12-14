import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAddCommandesComponent } from './bubble-add-commandes.component';

describe('BubbleAddCommandesComponent', () => {
  let component: BubbleAddCommandesComponent;
  let fixture: ComponentFixture<BubbleAddCommandesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleAddCommandesComponent]
    });
    fixture = TestBed.createComponent(BubbleAddCommandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
