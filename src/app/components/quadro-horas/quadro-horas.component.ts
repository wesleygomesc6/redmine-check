import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { TarefaModel } from '../../models/TarefaModel';

@Component({
  selector: 'app-quadro-horas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quadro-horas.component.html',
  styleUrl: './quadro-horas.component.css'
})
export class QuadroHorasComponent {
  @Input() tarefa!: TarefaModel;
  @Input() itemCatalogo!: number;

  calcularValorTotal(complexidade: number, horas: number): string {
    const valorUst: number = this.itemCatalogo == 1 ? environment.valorUstItem1 : environment.valorUstItem2;
    return (complexidade * horas * valorUst).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  calcularTotalUsts(perfil: number, horas: number): string {
    return (perfil * horas).toFixed(2);
  }

}
