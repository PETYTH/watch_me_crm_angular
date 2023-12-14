import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleAddEntrepriseComponent } from './bubble-add-entreprise.component';

describe('BubbleAddEntrepriseComponent', () => {
  let component: BubbleAddEntrepriseComponent;
  let fixture: ComponentFixture<BubbleAddEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleAddEntrepriseComponent]
    });
    fixture = TestBed.createComponent(BubbleAddEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
