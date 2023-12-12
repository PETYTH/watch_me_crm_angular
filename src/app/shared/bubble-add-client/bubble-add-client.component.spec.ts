import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAddClientComponent } from './bubble-add-client.component';

describe('BubbleAddClientComponent', () => {
  let component: BubbleAddClientComponent;
  let fixture: ComponentFixture<BubbleAddClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleAddClientComponent]
    });
    fixture = TestBed.createComponent(BubbleAddClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
