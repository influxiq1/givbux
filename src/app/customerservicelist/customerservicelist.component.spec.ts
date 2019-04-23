import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerservicelistComponent } from './customerservicelist.component';

describe('CustomerservicelistComponent', () => {
  let component: CustomerservicelistComponent;
  let fixture: ComponentFixture<CustomerservicelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerservicelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerservicelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
