import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { TarefaRelatorioModel } from '../models/TarefaRelatorioModel';

@Injectable({
    providedIn: 'root',
})

export class RelatorioService {
    constructor() { }

    /**
     * Separa cada tipo de atividade em um array
     * @param atividades 
     * @returns 
     */
    separarAtividades(atividades: TarefaRelatorioModel[]): any {
        const atividadesAgrupadas = {
            aprovadasSemRessalva: atividades.filter((tarefa: any) => tarefa.status !== 'Aprovada Ressalva'),
            aprovadasRessalvaEvidencias: atividades.filter((tarefa: any) => tarefa.status == 'Aprovada Ressalva' && tarefa.tipoRessalva === ''),
            aprovadasRessalvaHet: atividades.filter((tarefa: any) => tarefa.status == 'Aprovada Ressalva' && tarefa.tipoRessalva === 'het'),
            aprovadasRessalvaPerfil: atividades.filter((tarefa: any) => tarefa.status == 'Aprovada Ressalva' && tarefa.tipoRessalva === 'perfil')
        }
        return atividadesAgrupadas;
    }

    /**
     * Verifica se existe deflator e se ele é menor do que o perfil do profissional. Caso exista, utiliza o deflator para calcular as usts.
     * @param tarefa 
     * @returns 
     */
    calcularUstRedmineCheck(tarefa: TarefaRelatorioModel): number {
        let usts: number;
        if (tarefa.executor.fcpDeflator && tarefa.executor.fcpDeflator < tarefa.executor.complexidade) {
            usts = tarefa.executor.fcpDeflator * tarefa.tempoExecucao;
            return usts;
        } else {
            usts = tarefa.executor.complexidade * tarefa.tempoExecucao;
            return usts;
        }
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

    /**
     * Recebe um arrai de numbers e retorna o valor total de todos os elementos do array.
     * @param tarefas 
     * @returns 
     */
    calcularTotal(tarefas: number[]): number {
        const total: number = tarefas.reduce((acumulador: number, elemento: number) => acumulador + elemento);
        return total;

    }

    /**
     * Calcula o valor total Executado.
     * @param tarefas 
     * @returns 
     */
    calcularTotalExecutado(tarefas: TarefaRelatorioModel[], itemCatalogo: number): number {
        const valorUst: number = itemCatalogo == 1 ? environment.valorUstItem1 : environment.valorUstItem2;
        const usts: number[] = tarefas.map((tarefa: TarefaRelatorioModel) => Number(tarefa.ustRedmineCheck));
        const total: number = usts.reduce((acumulador: number, elemento: number) => acumulador + elemento);
        return total * valorUst;
    }

    /**
     * By ChatGPT
     * Agrupa as tarefas por projeto, servico e profissional
     * @param tarefas 
     * @returns 
     */
    agruparTarefas(tarefas: TarefaRelatorioModel[]) {
        const agrupado = tarefas.reduce((acc: any[], tarefa: TarefaRelatorioModel) => {
            // Verificar se já existe um grupo com o mesmo projeto, servicoRedmine e executor.nome
            const grupoExistente = acc.find((grupo) =>
                grupo.projeto === tarefa.projeto &&
                grupo.servicoRedmine === tarefa.servicoRedmine &&
                grupo.executorNome === tarefa.executor.nome
            );

            // Se o grupo já existe, adiciona a tarefa a esse grupo
            if (grupoExistente) {
                grupoExistente.tarefas.push(tarefa);
            } else {
                // Se não existe, cria um novo grupo
                acc.push({
                    projeto: tarefa.projeto,
                    servicoRedmine: tarefa.servicoRedmine,
                    executorNome: tarefa.executor.nome,
                    tarefas: [tarefa],
                    servico: tarefa.servico,
                    executor: tarefa.executor,
                    perfisExigidosMap: tarefa.perfisExigidosMap,
                    status: tarefa.status,
                    tipoRessalva: tarefa.tipoRessalva,
                    ustDivergente: tarefa.ustRedmine !== tarefa.ustRedmineCheck ? true : false
                });
            }

            return acc;
        }, []);

        return agrupado;

    }

    /**
     * Desagrupa as tarefas para calcular os totais de horas, usts e valorExecutado
     * @param agrupadas 
     * @returns 
     */
    desagruparTarefas(agrupadas: any): TarefaRelatorioModel[] {
        let tarefasAll: TarefaRelatorioModel[] = [];
        agrupadas.atividades.forEach((element: any) => {
            element.tarefas.forEach((tarefa: TarefaRelatorioModel) => {
                tarefasAll.push(tarefa)
            })
        });
        return tarefasAll;
    }





}