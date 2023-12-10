import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleInfosEmployeComponent } from './bubble-infos-employe.component';

describe('BubbleInfosEmployeComponent', () => {
  let component: BubbleInfosEmployeComponent;
  let fixture: ComponentFixture<BubbleInfosEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleInfosEmployeComponent]
    });
    fixture = TestBed.createComponent(BubbleInfosEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
