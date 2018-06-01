import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesRelatorioComponent } from './clientes-relatorio.component';

describe('ClientesRelatorioComponent', () => {
  let component: ClientesRelatorioComponent;
  let fixture: ComponentFixture<ClientesRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
