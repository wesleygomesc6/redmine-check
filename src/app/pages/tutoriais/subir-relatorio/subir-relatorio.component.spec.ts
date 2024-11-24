import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirRelatorioComponent } from './subir-relatorio.component';

describe('SubirRelatorioComponent', () => {
  let component: SubirRelatorioComponent;
  let fixture: ComponentFixture<SubirRelatorioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirRelatorioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubirRelatorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
