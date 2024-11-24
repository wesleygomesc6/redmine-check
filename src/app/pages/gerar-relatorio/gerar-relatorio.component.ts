import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import * as Papa from 'papaparse';
import { RelatorioService } from '../../services/RelatorioService';
import { TarefaRelatorioModel } from '../../models/TarefaRelatorioModel';
import { TarefaService } from '../../services/TarefaService';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';
import { TabelaRelatorioComponent } from '../../components/tabela-relatorio/tabela-relatorio.component';

@Component({
  selector: 'app-gerar-relatorio',
  standalone: true,
  imports: [MatRadioModule, FormsModule, CommonModule, ReactiveFormsModule, RouterLink, TabelaRelatorioComponent],
  templateUrl: './gerar-relatorio.component.html',
  styleUrl: './gerar-relatorio.component.css'
})
export class GerarRelatorioComponent implements OnInit {
  itemCatalogo: number = 1;
  items: number[] = [1, 2];
  formulario!: FormGroup;
  atividadesCsv: any[] = [];
  exibirRelatorio: boolean = false;
  atividades: any[] = [];

  constructor(private formBuilder: FormBuilder, private relatorioService: RelatorioService,
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      arquivo: new FormControl()
    })
  }

  /*
   * Ao subir um arquivo csv no input ele converte os dados para um array
  */
  onFileChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader()

    reader.onload = (e: any) => {
      const csvData = e.target.result;
      let options = {
        // delimiter: ';', // delimitador do arquivo CSV
        header: true, // informa que a primeira linha é o cabeçalho
        skipEmptyLines: true, // pula linhas vazias
        complete: (results: any, file: any) => {
          this.atividadesCsv = results.data;
        }
      };
      Papa.parse(csvData, options);
    };

    reader.readAsText(file);
  }

  onSubmit() {
    const atividadesMapeadas: TarefaRelatorioModel[] = this.tarefaService.mapearTarefasCsv(this.atividadesCsv, this.itemCatalogo)
    const atividadesSeparadas = this.relatorioService.separarAtividades(atividadesMapeadas);

    const aprovadas = {
      atividades: this.relatorioService.agruparTarefas(atividadesSeparadas.aprovadasSemRessalva),
      titulo: 'Aprovadas',
      status: 'aprovadas',
      totalAtividades: atividadesSeparadas.aprovadasSemRessalva.length
    }
    const aprovadasRessalvaEvidencias = {
      atividades: this.relatorioService.agruparTarefas(atividadesSeparadas.aprovadasRessalvaEvidencias),
      titulo: 'Aprovadas Ressalva Evidências',
      status: 'evidencias',
      totalAtividades: atividadesSeparadas.aprovadasRessalvaEvidencias.length
    }
    const aprovadasRessalvaExedeuHet = {
      atividades: this.relatorioService.agruparTarefas(atividadesSeparadas.aprovadasRessalvaHet),
      titulo: 'Aprovadas Ressalva HET',
      status: 'het',
      totalAtividades: atividadesSeparadas.aprovadasRessalvaHet.length
    }
    const aprovadasRessalvaPerfil = {
      atividades: this.relatorioService.agruparTarefas(atividadesSeparadas.aprovadasRessalvaPerfil),
      titulo: 'Aprovadas Ressalva Perfil',
      status: 'perfil',
      totalAtividades: atividadesSeparadas.aprovadasRessalvaPerfil.length
    }

    this.atividades.push(aprovadas, aprovadasRessalvaEvidencias, aprovadasRessalvaExedeuHet, aprovadasRessalvaPerfil)

    this.exibirRelatorio = true;
  }

  resetFormlario() {
    this.atividades = [];
  }

}
