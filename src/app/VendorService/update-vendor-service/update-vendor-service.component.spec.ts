import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVendorServiceComponent } from './update-vendor-service.component';

describe('UpdateVendorServiceComponent', () => {
  let component: UpdateVendorServiceComponent;
  let fixture: ComponentFixture<UpdateVendorServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVendorServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateVendorServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
