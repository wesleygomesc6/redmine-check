import { Component, Input, OnInit } from '@angular/core';
import { TarefaModel } from '../../models/TarefaModel';
import { CatalogoService } from '../../services/CatalogoService';
import { CatalogoServicoModel } from '../../models/CatalogoServicoModel';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon'
@Component({
  selector: 'app-validacoes',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './validacoes.component.html',
  styleUrl: './validacoes.component.css'
})
export class ValidacoesComponent implements OnInit {
  @Input() tarefa!: TarefaModel;
  @Input() itemCatalogo!: number;
  servicoCatalogo!: CatalogoServicoModel;
  perfisExigidos!: string;

  // 1 = true; 0 = false
  PROFISSIONAL_PERFIL: number = 0;
  COMPLEXIDADE_OK: number = 0;
  HET_OK: number = 0;
  COMPLEXIDADE_UNICA: number = 0;
  TAREFA_STATUS: number = 0;

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.servicoCatalogo = this.catalogoService.getServicoItem(this.tarefa.servico.codigo, this.itemCatalogo);

    // verificar complexidade do serviço
    this.servicoCatalogo.complexidade === this.tarefa.servico.complexidade ? this.COMPLEXIDADE_OK = 1 : this.COMPLEXIDADE_OK = 0;

    // se complexidade = única
    this.servicoCatalogo.complexidade === 'Única' ? this.COMPLEXIDADE_UNICA = 1 : this.COMPLEXIDADE_UNICA = 0;

    // HET
    this.servicoCatalogo.het >= this.tarefa.tempoExecucao ? this.HET_OK = 1 : this.HET_OK = 0;

    // perfil profissional
    this.perfisExigidos = this.servicoCatalogo.perfisExigidos
      .map((perfil: any) => perfil.perfil)
      .join(', ');
    this.perfisExigidos.toUpperCase().includes(this.tarefa.executor.perfil.toUpperCase()) ? this.PROFISSIONAL_PERFIL = 1 : this.PROFISSIONAL_PERFIL = 0;

    // status tarefa
    this.tarefa.status === 'Pronta' ? this.TAREFA_STATUS = 1 : this.TAREFA_STATUS = 0;
  }



}
