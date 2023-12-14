import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAddSocieteComponent } from './bubble-add-societe.component';

describe('BubbleAddSocieteComponent', () => {
  let component: BubbleAddSocieteComponent;
  let fixture: ComponentFixture<BubbleAddSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleAddSocieteComponent]
    });
    fixture = TestBed.createComponent(BubbleAddSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
