import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarTarefaComponent } from './validar-tarefa.component';

describe('ValidarTarefaComponent', () => {
  let component: ValidarTarefaComponent;
  let fixture: ComponentFixture<ValidarTarefaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarTarefaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidarTarefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
