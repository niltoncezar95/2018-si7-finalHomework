import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OssRelatorioComponent } from './oss-relatorio.component';

describe('OssRelatorioComponent', () => {
  let component: OssRelatorioComponent;
  let fixture: ComponentFixture<OssRelatorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OssRelatorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OssRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
