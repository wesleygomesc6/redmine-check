import { Injectable } from '@angular/core';
import { TarefaModel } from '../models/TarefaModel';
import { CatalogoService } from './CatalogoService';
import { TarefaRelatorioModel } from '../models/TarefaRelatorioModel';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class TarefaService {
    constructor(private catalogoService: CatalogoService) { }

    mapearTarefaRedmine(issue: any, itemCatalogo: number): TarefaModel {
        const tarefa: TarefaModel = new TarefaModel();
        const codigoServico: string = TarefaModel.getServico(issue);

        tarefa.numero = issue.id;
        tarefa.titulo = issue.subject;
        tarefa.servico = this.catalogoService.getServicoItem(codigoServico, itemCatalogo);
        tarefa.servicoRedmine = TarefaModel.getDescricaoServico(issue);
        tarefa.status = issue.status.name;
        tarefa.projeto = issue.project.name;
        tarefa.tempoExecucao = issue.spent_hours;

        const perfis: any = TarefaModel.getPerfis(issue.custom_fields);
        tarefa.executor = {
            nome: issue.assigned_to ? issue.assigned_to.name : null,
            perfil: perfis.perfil.perfil ? perfis.perfil.perfil : perfis.deflator.deflator,
            complexidade: perfis.perfil.complexidade ? perfis.perfil.complexidade : perfis.deflator.fcpDeflator,
            deflator: perfis.deflator.deflator,
            fcpDeflator: perfis.deflator.fcpDeflator
        }

        tarefa.dataAbertura = new Date(issue.start_date + 'T00:00:00');
        tarefa.dataFechamento = new Date(issue.closed_on);

        tarefa.evidencias = issue.attachments.map((attachment: any) => {
            return { nome: attachment.filename, link: attachment.content_url };
        });
        tarefa.descricao = issue.description;

        return tarefa;
    }

    mapearTarefasCsv(atividades: any, itemCatalogo: number): TarefaRelatorioModel[] {

        const atividadesMapeadas: TarefaRelatorioModel[] = atividades.map((at: any) =>
        ({
            numero: at['#'],
            status: at['Status'],
            servico: this.catalogoService.getServicoItem(TarefaRelatorioModel.getServico(at['Serviço (G4F/SEAD)']), itemCatalogo),
            servicoRedmine: at['Serviço (G4F/SEAD)'],
            projeto: at['Projeto'],
            tempoExecucao: Number(at['Tempo gasto'].replace(',', '.')),
            ustRedmine: Number(at['Total UST (G4F/SEAD)'].replace(',', '.')).toFixed(2),
            executor: {
                nome: at['Atribuído para'],
                //Se não tiver perfil na planilha, utiliza o campo do perfil deflator
                perfil: TarefaModel.converterIniciais(at['FCP (G4F/SEAD)'] ? at['FCP (G4F/SEAD)'].slice(0, -11) : at['FCP Deflator (G4F/SEAD)'].slice(0, -11)),
                complexidade: at['FCP (G4F/SEAD)'] ? Number(at['FCP (G4F/SEAD)'].slice(-3)) : Number(at['FCP Deflator (G4F/SEAD)'].slice(-3)),
                deflator: TarefaModel.converterIniciais(at['FCP Deflator (G4F/SEAD)'] ? at['FCP Deflator (G4F/SEAD)'].slice(0, -11) : at['FCP (G4F/SEAD)'].slice(0, -11)),
                fcpDeflator: at['FCP Deflator (G4F/SEAD)'] ? Number(at['FCP Deflator (G4F/SEAD)'].slice(-3)) : Number(at['FCP (G4F/SEAD)'].slice(-3)),
            },
            tipoRessalva: at['Tipo ressalva'],
            ressalva: at['Obs'] ? at['Obs'] : null,
            ustRedmineCheck: this.calcularUstRedmineCheck(at).toFixed(2),
            valorExecutado: this.calcularValorExecutado(at, itemCatalogo),
            perfisExigidosMap: this.catalogoService.getServicoItem(TarefaRelatorioModel.getServico(at['Serviço (G4F/SEAD)']), itemCatalogo).perfisExigidos.map((p: any) => p.perfil).join(', ')
        })
        )

        return atividadesMapeadas;
    }

    /**
     * Verifica se o deflator é menor do que o perfil do profissional ou se o profissional não tem perfil. Caso exista OU não tenha perfil, 
     * utiliza o deflator para calcular as usts.
     * @param tarefa 
     * @returns 
     */
    calcularUstRedmineCheck(tarefa: any): number {
        let usts: number;
        if (tarefa['FCP Deflator (G4F/SEAD)'] && Number(tarefa['FCP Deflator (G4F/SEAD)'].slice(-3)) < Number(tarefa['FCP (G4F/SEAD)'].slice(-3))) {
            usts = Number(tarefa['FCP Deflator (G4F/SEAD)'].slice(-3)) * Number(tarefa['Tempo gasto'].replace(',', '.'));
        } else if (tarefa['FCP (G4F/SEAD)'] === '') {
            usts = Number(tarefa['FCP Deflator (G4F/SEAD)'].slice(-3)) * Number(tarefa['Tempo gasto'].replace(',', '.'));
        } else {
            usts = Number(tarefa['FCP (G4F/SEAD)'].slice(-3)) * Number(tarefa['Tempo gasto'].replace(',', '.'));

        }
        return usts;
    }

    /**
     * Calcula o valor executado de acordo com as usts calculadas no redmine check.
     * @param tarefa 
     * @returns 
     */
    calcularValorExecutado(tarefa: TarefaRelatorioModel, itemCatalogo: number): number {
        const valorUst: number = itemCatalogo == 1 ? environment.valorUstItem1 : environment.valorUstItem2;
        const ustRedmineCheck: number = this.calcularUstRedmineCheck(tarefa);
        return ustRedmineCheck * valorUst;
    }


}