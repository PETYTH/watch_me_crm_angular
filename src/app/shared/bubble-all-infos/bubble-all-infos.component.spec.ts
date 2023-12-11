import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAllInfosComponent } from './bubble-all-infos.component';

describe('BubbleInfosEmployeComponent', () => {
  let component: BubbleAllInfosComponent;
  let fixture: ComponentFixture<BubbleAllInfosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleAllInfosComponent]
    });
    fixture = TestBed.createComponent(BubbleAllInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
