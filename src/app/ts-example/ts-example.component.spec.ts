import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsExampleComponent } from './ts-example.component';

describe('TsExampleComponent', () => {
  let component: TsExampleComponent;
  let fixture: ComponentFixture<TsExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
