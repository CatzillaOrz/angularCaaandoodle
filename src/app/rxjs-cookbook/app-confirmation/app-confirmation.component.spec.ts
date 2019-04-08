import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppConfirmationComponent } from './app-confirmation.component';

describe('AppConfirmationComponent', () => {
  let component: AppConfirmationComponent;
  let fixture: ComponentFixture<AppConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
