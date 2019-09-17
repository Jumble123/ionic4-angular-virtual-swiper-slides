import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidesListPage } from './slides-list.page';

describe('SlidesListPage', () => {
  let component: SlidesListPage;
  let fixture: ComponentFixture<SlidesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
