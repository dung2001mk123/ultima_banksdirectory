import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdirectoryComponent } from './bankdirectory.component';

describe('BankdirectoryComponent', () => {
  let component: BankdirectoryComponent;
  let fixture: ComponentFixture<BankdirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdirectoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
