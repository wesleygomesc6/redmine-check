import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { RedmineService } from '../../services/RedmineService';
import { NotificacaoComponent } from '../../components/notificacao/notificacao.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { TarefaModel } from '../../models/TarefaModel';
import { TarefaService } from '../../services/TarefaService';
import { ValidacoesComponent } from '../../components/validacoes/validacoes.component';
import { CatalogoService } from '../../services/CatalogoService';
import { QuadroHorasComponent } from '../../components/quadro-horas/quadro-horas.component';
import { EvidenciasComponent } from '../../components/evidencias/evidencias.component';
import { CommonModule } from '@angular/common';
import { SistemaProfissionalComponent } from '../../components/sistema-profissional/sistema-profissional.component';


@Component({
  selector: 'app-validar-tarefa',
  standalone: true,
  imports: [MatInputModule, MatIconModule, FormsModule, MatFormFieldModule, MatButtonModule,
    NotificacaoComponent, MatRadioModule, MatProgressSpinnerModule, ValidacoesComponent, QuadroHorasComponent,
    EvidenciasComponent, CommonModule, SistemaProfissionalComponent],
  templateUrl: './validar-tarefa.component.html',
  styleUrl: './validar-tarefa.component.css'
})
export class ValidarTarefaComponent {
  numeroTarefa!: number | null;
  loading: boolean = false;
  notificacao!: {
    tipo: string,
    mensagem: string
  };
  alertar: boolean = false;
  itemCatalogo: number = 1;
  items: number[] = [1, 2];
  tarefa!: TarefaModel;
  exibirInformacoes: boolean = false;

  constructor(private redmineService: RedmineService, private tarefaService: TarefaService,
    private catalogoService: CatalogoService) { }

  getTarefa(): void {
    if (this.numeroTarefa) {
      this.loading = true;
      this.redmineService.get(this.numeroTarefa).subscribe((res: any) => {
        if (!res.erro) {
          this.verificaServicoItem(TarefaModel.getServico(res.issue));
          this.tarefa = this.tarefaService.mapearTarefaRedmine(res.issue, this.itemCatalogo)
        } else {
          this.notificacao = {
            tipo: 'warning',
            mensagem: res.erro.err
          }
          this.alertar = true;
        }
        this.loading = false;
      })
    }
  }

  verificaServicoItem(codigo: string) {
    const achou = this.catalogoService.getServicoItem(codigo, this.itemCatalogo)
    if (achou) {
      this.exibirInformacoes = true;
    } else {

      this.notificacao = {
        tipo: 'info',
        mensagem: `Serviço não encontrado no Item ${this.itemCatalogo} do catálogo!`
      }
      this.alertar = true;
    }


  }

  limparFormulario() {
    this.alertar = false;
    this.numeroTarefa = null;
    this.exibirInformacoes = false;
  }

}
