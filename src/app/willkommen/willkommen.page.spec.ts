import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WillkommenPage } from './willkommen.page';

describe('WillkommenPage', () => {
  let component: WillkommenPage;
  let fixture: ComponentFixture<WillkommenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WillkommenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WillkommenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
