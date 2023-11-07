import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBoardsComponent } from './header-boards.component';

describe('HeaderBoardsComponent', () => {
  let component: HeaderBoardsComponent;
  let fixture: ComponentFixture<HeaderBoardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderBoardsComponent]
    });
    fixture = TestBed.createComponent(HeaderBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
