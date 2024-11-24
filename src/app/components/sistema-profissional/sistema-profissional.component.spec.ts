import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaProfissionalComponent } from './sistema-profissional.component';

describe('SistemaProfissionalComponent', () => {
  let component: SistemaProfissionalComponent;
  let fixture: ComponentFixture<SistemaProfissionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaProfissionalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SistemaProfissionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
