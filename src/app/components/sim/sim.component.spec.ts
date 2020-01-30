import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimComponent } from './sim.component';

describe('SimComponent', () => {
  let component: SimComponent;
  let fixture: ComponentFixture<SimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
