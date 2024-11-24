import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidacoesComponent } from './validacoes.component';

describe('ValidacoesComponent', () => {
  let component: ValidacoesComponent;
  let fixture: ComponentFixture<ValidacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
