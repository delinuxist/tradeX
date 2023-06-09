import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePortModalComponent } from './update-port-modal.component';

describe('UpdatePortModalComponent', () => {
  let component: UpdatePortModalComponent;
  let fixture: ComponentFixture<UpdatePortModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePortModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePortModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
