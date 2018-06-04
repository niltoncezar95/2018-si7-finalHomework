import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OsDetalheComponent } from './os-detalhe.component';

describe('OsDetalheComponent', () => {
  let component: OsDetalheComponent;
  let fixture: ComponentFixture<OsDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OsDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
