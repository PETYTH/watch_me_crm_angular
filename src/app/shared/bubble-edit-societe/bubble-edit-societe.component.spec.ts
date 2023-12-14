import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEditSocieteComponent } from './bubble-edit-societe.component';

describe('BubbleEditSocieteComponent', () => {
  let component: BubbleEditSocieteComponent;
  let fixture: ComponentFixture<BubbleEditSocieteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleEditSocieteComponent]
    });
    fixture = TestBed.createComponent(BubbleEditSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
