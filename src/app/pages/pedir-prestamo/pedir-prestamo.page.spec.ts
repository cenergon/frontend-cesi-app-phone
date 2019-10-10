import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PedirPrestamoPage } from './pedir-prestamo.page';

describe('PedirPrestamoPage', () => {
  let component: PedirPrestamoPage;
  let fixture: ComponentFixture<PedirPrestamoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PedirPrestamoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PedirPrestamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
