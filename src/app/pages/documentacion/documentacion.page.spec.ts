import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionPage } from './documentacion.page';

describe('DocumentacionPage', () => {
  let component: DocumentacionPage;
  let fixture: ComponentFixture<DocumentacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
