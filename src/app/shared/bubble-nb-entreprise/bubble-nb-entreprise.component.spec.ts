import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleNbEntrepriseComponent } from './bubble-nb-entreprise.component';

describe('BubbleNbEntrepriseComponent', () => {
  let component: BubbleNbEntrepriseComponent;
  let fixture: ComponentFixture<BubbleNbEntrepriseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BubbleNbEntrepriseComponent]
    });
    fixture = TestBed.createComponent(BubbleNbEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
