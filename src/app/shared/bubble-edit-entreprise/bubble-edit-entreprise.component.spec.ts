import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleEditEntrepriseComponent } from './bubble-edit-entreprise.component';

describe('BubbleEditEntrepriseComponent', () => {
  let component: BubbleEditEntrepriseComponent;
  let fixture: ComponentFixture<BubbleEditEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleEditEntrepriseComponent]
    });
    fixture = TestBed.createComponent(BubbleEditEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
