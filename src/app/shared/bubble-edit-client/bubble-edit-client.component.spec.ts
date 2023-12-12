import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEditClientComponent } from './bubble-edit-client.component';

describe('BubbleEditClientComponent', () => {
  let component: BubbleEditClientComponent;
  let fixture: ComponentFixture<BubbleEditClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleEditClientComponent]
    });
    fixture = TestBed.createComponent(BubbleEditClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
