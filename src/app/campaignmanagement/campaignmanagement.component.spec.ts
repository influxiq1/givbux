import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignmanagementComponent } from './campaignmanagement.component';

describe('CampaignmanagementComponent', () => {
  let component: CampaignmanagementComponent;
  let fixture: ComponentFixture<CampaignmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
