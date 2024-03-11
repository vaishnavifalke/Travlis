import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorServiceListComponent } from './vendor-service-list.component';

describe('VendorServiceListComponent', () => {
  let component: VendorServiceListComponent;
  let fixture: ComponentFixture<VendorServiceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorServiceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorServiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
