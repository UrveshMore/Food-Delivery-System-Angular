import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelieverypanelComponent } from './delieverypanel.component';

describe('DelieverypanelComponent', () => {
  let component: DelieverypanelComponent;
  let fixture: ComponentFixture<DelieverypanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelieverypanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DelieverypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
