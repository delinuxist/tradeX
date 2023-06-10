import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulTradesComponent } from './successful-trades.component';

describe('SuccessfulTradesComponent', () => {
  let component: SuccessfulTradesComponent;
  let fixture: ComponentFixture<SuccessfulTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessfulTradesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessfulTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
