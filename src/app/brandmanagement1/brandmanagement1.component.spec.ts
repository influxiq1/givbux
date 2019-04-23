import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Brandmanagement1Component } from './brandmanagement1.component';

describe('Brandmanagement1Component', () => {
  let component: Brandmanagement1Component;
  let fixture: ComponentFixture<Brandmanagement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Brandmanagement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Brandmanagement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
