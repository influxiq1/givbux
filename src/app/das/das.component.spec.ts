import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DasComponent } from './das.component';

describe('DasComponent', () => {
  let component: DasComponent;
  let fixture: ComponentFixture<DasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
