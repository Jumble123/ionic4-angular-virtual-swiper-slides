import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideSetsPage } from './slide-sets.page';

describe('SlideSetsPage', () => {
  let component: SlideSetsPage;
  let fixture: ComponentFixture<SlideSetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideSetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideSetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
