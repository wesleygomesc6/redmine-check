import { Component, Input } from '@angular/core';
import { TarefaModel } from '../../models/TarefaModel';

@Component({
  selector: 'app-sistema-profissional',
  standalone: true,
  imports: [],
  templateUrl: './sistema-profissional.component.html',
  styleUrl: './sistema-profissional.component.css'
})
export class SistemaProfissionalComponent {
  @Input() tarefa!: TarefaModel;
}
