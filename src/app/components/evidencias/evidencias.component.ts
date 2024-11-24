import { Component, Input } from '@angular/core';
import { TarefaModel } from '../../models/TarefaModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-evidencias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './evidencias.component.html',
  styleUrl: './evidencias.component.css'
})
export class EvidenciasComponent {
  @Input() tarefa!: TarefaModel;

}
