import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiliverylogComponent } from './diliverylog.component';

describe('DiliverylogComponent', () => {
  let component: DiliverylogComponent;
  let fixture: ComponentFixture<DiliverylogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiliverylogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiliverylogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
