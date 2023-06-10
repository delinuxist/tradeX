import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelledTradesComponent } from './cancelled-trades.component';

describe('CancelledTradesComponent', () => {
  let component: CancelledTradesComponent;
  let fixture: ComponentFixture<CancelledTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelledTradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelledTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
