import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { TarefaRelatorioModel } from '../../models/TarefaRelatorioModel';
import { RelatorioService } from '../../services/RelatorioService';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tabela-relatorio',
  standalone: true,
  imports: [MatTabsModule, CommonModule],
  templateUrl: './tabela-relatorio.component.html',
  styleUrl: './tabela-relatorio.component.css'
})
export class TabelaRelatorioComponent {
  @Input() dadosTabela!: any[];
  @Input() itemCatalogo!: number;

  constructor(private relatorioService: RelatorioService) {}

  calcularTotal(tarefas: TarefaRelatorioModel[], parametro: string): string {
    let total: string;
    switch (parametro) {
      case 'tempoExecucao':
        total = this.relatorioService.calcularTotal(tarefas.map((tarefa: TarefaRelatorioModel) => Number(tarefa.tempoExecucao)))
          .toLocaleString('pt-BR');
        break;
      case 'ustRedmineCheck':
        total = this.relatorioService.calcularTotal(tarefas.map((tarefa: TarefaRelatorioModel) => Number(tarefa.ustRedmineCheck)))
          .toLocaleString('pt-BR');
        break;

      default:
        total = this.relatorioService.calcularTotalExecutado(tarefas, this.itemCatalogo)
          .toLocaleString('pt-BR', { style: "currency", currency: "BRL" });
        break;
    }
    return total;
  }

  calcularValorExedenteHet(atividade: any): string {
    const valorUst: number = this.itemCatalogo == 1 ? environment.valorUstItem1 : environment.valorUstItem2;
    const valorExecutado: number = this.relatorioService.calcularTotalExecutado(atividade.tarefas, this.itemCatalogo);
    const hetMaximo: number = Number(atividade.tarefas[0].servico.het * atividade.tarefas.length);
    const ustMaximo: number = Number(atividade.tarefas[0].executor.fcpDeflator < atividade.tarefas[0].executor.complexidade
      ? hetMaximo * atividade.tarefas[0].executor.fcpDeflator
      : hetMaximo * atividade.tarefas[0].executor.complexidade);

    const valorMaximo: number = ustMaximo * valorUst;
    const diferenca: number = valorExecutado - valorMaximo;

    return diferenca.toLocaleString('pt-BR', { style: "currency", currency: "BRL" });
  }

  mapear(tarefas: TarefaRelatorioModel[], parametro: string): string {
    let evidencias: string;
    if (parametro === 'evidencias') {
      return evidencias = tarefas.map((tarefa: TarefaRelatorioModel) => tarefa.numero).join(', ')
    }
    evidencias = tarefas.map((tarefa: TarefaRelatorioModel) => tarefa.ressalva).join(', ')
    return evidencias;
  }

  calcularTotalHoras(atividades: any): string {

    const horasAll: number[] = this.relatorioService.desagruparTarefas(atividades).map((tarefa: TarefaRelatorioModel) => Number(tarefa.tempoExecucao));
    const totalHoras: number = this.relatorioService.calcularTotal(horasAll)
    return totalHoras.toLocaleString('pt-BR');
  }

  calcularTotalUst(atividades: any): string {
    const ustsAll: number[] = this.relatorioService.desagruparTarefas(atividades).map((tarefa: TarefaRelatorioModel) => Number(tarefa.ustRedmineCheck))
    const totalUsts = this.relatorioService.calcularTotal(ustsAll);

    return totalUsts.toLocaleString('pt-BR');

  }

  calcularTotalExecutado(atividades: any): string {
    const valorUst: number = this.itemCatalogo == 1 ? environment.valorUstItem1 : environment.valorUstItem2;
    const ust: number = Number(this.calcularTotalUst(atividades).replace('.', '').replace(',', '.'))
    const total: number = ust * valorUst;
    return total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" });
  }

  calcularTotalExedenteHet(atividades: any): string {
    let totalExedente: number[] = [];
    atividades.atividades.forEach((atividade: any) => {
      let valorEdente: number = Number(this.calcularValorExedenteHet(atividade).slice(3).replace('.', '').replace(',', '.'));
      totalExedente.push(valorEdente)
    });

    return this.relatorioService.calcularTotal(totalExedente).toLocaleString('pt-BR', { style: "currency", currency: "BRL" });
  }

}
