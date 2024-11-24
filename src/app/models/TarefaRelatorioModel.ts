import { CatalogoServicoModel } from "./CatalogoServicoModel";

export class TarefaRelatorioModel {
    numero!: number;
    servico!: CatalogoServicoModel;
    perfisExigidosMap?: string;
    servicoRedmine!: string;
    status!: string;
    projeto!: string;
    tempoExecucao!: number;
    ustRedmine!: number;
    executor!: {
        nome: string,
        perfil: string,
        complexidade: number,
        deflator: string,
        fcpDeflator: number
    };
    ustRedmineCheck!: number;
    valorExecutado!: number;
    ustDivergente?: boolean;
    tipoRessalva?: string;
    ressalva?: string;
    evidencias?: string[];


    static getServico(servicoRedmine: string): string {
        const regex = /[0-9]{1,2}(\.[a-z])*/;
        let codigo: string = '';
        let result = regex.exec(servicoRedmine);
        if (result !== null) {
            codigo = result[0];
        }
        return codigo;
    }
}