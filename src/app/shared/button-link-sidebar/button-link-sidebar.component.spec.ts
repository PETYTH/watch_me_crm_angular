import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLinkSidebarComponent } from './button-link-sidebar.component';

describe('ButtonLinkSidebarComponent', () => {
  let component: ButtonLinkSidebarComponent;
  let fixture: ComponentFixture<ButtonLinkSidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonLinkSidebarComponent]
    });
    fixture = TestBed.createComponent(ButtonLinkSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
