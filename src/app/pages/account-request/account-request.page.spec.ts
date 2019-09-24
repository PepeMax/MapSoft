import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRequestPage } from './account-request.page';

describe('AccountRequestPage', () => {
  let component: AccountRequestPage;
  let fixture: ComponentFixture<AccountRequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountRequestPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
