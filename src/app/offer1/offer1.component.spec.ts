import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Offer1Component } from './offer1.component';

describe('Offer1Component', () => {
  let component: Offer1Component;
  let fixture: ComponentFixture<Offer1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Offer1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Offer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
