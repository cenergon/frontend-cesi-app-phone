import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciodemoPage } from './iniciodemo.page';

describe('IniciodemoPage', () => {
  let component: IniciodemoPage;
  let fixture: ComponentFixture<IniciodemoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IniciodemoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciodemoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
