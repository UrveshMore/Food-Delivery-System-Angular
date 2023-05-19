import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LognavComponent } from './lognav.component';

describe('LognavComponent', () => {
  let component: LognavComponent;
  let fixture: ComponentFixture<LognavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LognavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LognavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
