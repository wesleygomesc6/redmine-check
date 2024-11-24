import { CatalogoServicoModel } from "./CatalogoServicoModel";

export class TarefaModel {
    numero!: number;
    titulo!: string;
    descricao!: string;
    servico!: CatalogoServicoModel;
    servicoRedmine!: string;
    status!: string;
    projeto!: string;
    tempoExecucao!: number;
    ustRedmine!: number;
    executor!: {
        nome: string,
        perfil: string,
        complexidade: number,
        deflator?: string,
        fcpDeflator?: number
    };
    dataAbertura!: Date;
    dataFechamento!: Date;
    alteracoes!: any[];
    evidencias!: any[];

    static getPerfis(custom_fields: any[]): any {
        const perfis: any[] = custom_fields.filter((cf: any) => cf.id == 162 || cf.id == 157);

        let resultado = {
            perfil: perfis.filter((p: any) => p.id == 162).map((res: any) => ({ perfil: this.converterIniciais(res.value.slice(0, -11)), complexidade: res.value.slice(-3) }))[0],
            deflator: perfis.filter((p: any) => p.id == 157).map((res: any) => ({ deflator: this.converterIniciais(res.value.slice(0, -11)), fcpDeflator: res.value.slice(-3) }))[0]
        }
        return resultado;
    }

    static converterIniciais(frase:string) {
        // Regex para encontrar palavras (sequências de letras) em minúsculas
        // Seguida por um ou mais espaços ou início da string (^)
        const regex = /\b\w/g;
    
        // Função de substituição para converter a primeira letra de cada palavra em maiúscula
        return frase.toLowerCase().replace(regex, match => match.toUpperCase());
    }

    static getDescricaoServico(issue: any): string {
        const value = issue.custom_fields.filter(
            (element: any) => element.id == 109
        )[0].value;
        return value;
    }
    static getServico(issue: any): string {
        const value = this.getDescricaoServico(issue);
        const regex = /[0-9]{1,2}(\.[a-z])*/;
        let codigo: string = '';
        let result = regex.exec(value);
        if (result !== null) {
            codigo = result[0];
        }
        return codigo;
    }
}