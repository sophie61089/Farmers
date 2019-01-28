import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerAccountComponent } from './farmer-account.component';

describe('FarmerAccountComponent', () => {
  let component: FarmerAccountComponent;
  let fixture: ComponentFixture<FarmerAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
