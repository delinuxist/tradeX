import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsLogsComponent } from './admins-logs.component';

describe('AdminsLogsComponent', () => {
  let component: AdminsLogsComponent;
  let fixture: ComponentFixture<AdminsLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
