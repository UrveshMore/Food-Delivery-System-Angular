import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpaComponent } from './adminpa.component';

describe('AdminpaComponent', () => {
  let component: AdminpaComponent;
  let fixture: ComponentFixture<AdminpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
