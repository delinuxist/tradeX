import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsLogsTableComponent } from './admins-logs-table.component';

describe('AdminsLogsTableComponent', () => {
  let component: AdminsLogsTableComponent;
  let fixture: ComponentFixture<AdminsLogsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsLogsTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsLogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
