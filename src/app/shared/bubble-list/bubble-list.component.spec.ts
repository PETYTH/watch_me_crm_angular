import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleListComponent } from './bubble-list.component';

describe('BubbleListComponent', () => {
  let component: BubbleListComponent;
  let fixture: ComponentFixture<BubbleListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleListComponent]
    });
    fixture = TestBed.createComponent(BubbleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
