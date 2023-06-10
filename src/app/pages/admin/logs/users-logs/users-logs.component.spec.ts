import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLogsComponent } from './users-logs.component';

describe('UsersLogsComponent', () => {
  let component: UsersLogsComponent;
  let fixture: ComponentFixture<UsersLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersLogsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
