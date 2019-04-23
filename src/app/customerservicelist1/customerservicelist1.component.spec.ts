import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Customerservicelist1Component } from './customerservicelist1.component';

describe('Customerservicelist1Component', () => {
  let component: Customerservicelist1Component;
  let fixture: ComponentFixture<Customerservicelist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Customerservicelist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Customerservicelist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
