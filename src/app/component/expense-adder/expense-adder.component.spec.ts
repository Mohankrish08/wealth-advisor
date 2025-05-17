import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseAdderComponent } from './expense-adder.component';

describe('ExpenseAdderComponent', () => {
  let component: ExpenseAdderComponent;
  let fixture: ComponentFixture<ExpenseAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpenseAdderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
