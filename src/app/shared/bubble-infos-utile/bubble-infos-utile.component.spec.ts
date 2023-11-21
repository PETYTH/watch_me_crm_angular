import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleInfosUtileComponent } from './bubble-infos-utile.component';

describe('BubbleInfosUtileComponent', () => {
  let component: BubbleInfosUtileComponent;
  let fixture: ComponentFixture<BubbleInfosUtileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleInfosUtileComponent]
    });
    fixture = TestBed.createComponent(BubbleInfosUtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
