import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatalogoService {
  constructor() { }

  getServico(codigo: string): any {
    const regex = /[0-9]{1,2}(\.[a-z])*/;
    let c: string = '';
    let result = regex.exec(codigo);
    if (result !== null) {
      codigo = result[0];
    }
    const servico = this.servicosItem1.filter(
      (servico) => servico.codigo === codigo
    );
    return servico[0];
  }

  getServicoItem(codigo: string, item: number): any {
    const regex = /[0-9]{1,2}(\.[a-z])*/;
    let c: string = '';
    let result = regex.exec(codigo);
    if (result !== null) {
      codigo = result[0];
    }

    if (item == 1) {

      const servico = this.servicosItem1.filter(
        (servico) => servico.codigo === codigo
      );
      return servico[0];

    } else {

      const servico = this.servicosItem2.filter(
        (servico) => servico.codigo === codigo
      );
      return servico[0];
    }
  }

  private servicosItem1: any[] = [
    {
      codigo: '1.a',
      numero: 1,
      servico: 'Concepção da Solução de TI',
      id: 'a',
      complexidade: 'Baixa',
      escopo: 'Por Solução de TI.',
      het: 22,
      checkHet: true,
      entregaveis: 'Documento de Visão da Solução de TI, Atas de Reuniões.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com os usuários, esboço das possíveis soluções, elaboração de documentos de visão da solução de TI.',
    },
    {
      codigo: '1.b',
      numero: 1,
      servico: 'Concepção da Solução de TI',
      id: 'b',
      complexidade: 'Média',
      escopo: 'Por Solução de TI.',
      het: 29,
      checkHet: true,
      entregaveis: 'Documento de Visão da Solução de TI, Atas de Reuniões.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com os usuários, esboço das possíveis soluções, elaboração de documentos de visão da solução de TI.',
    },
    {
      codigo: '1.c',
      numero: 1,
      servico: 'Concepção da Solução de TI',
      id: 'c',
      complexidade: 'Alta',

      escopo: 'Por Solução de TI.',
      het: 36,
      checkHet: true,
      entregaveis: 'Documento de Visão da Solução de TI, Atas de Reuniões.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com os usuários, esboço das possíveis soluções, elaboração de documentos de visão da solução de TI.',
    },
    {
      codigo: '0',
      numero: 0,
      servico: 'Atividade para estimativa HET',
      id: '-',
      complexidade: 'Baixa',
      escopo: 'Por Solução de TI.',
      het: 0,
      checkHet: true,
      entregaveis: '',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Processos Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Atividade para subida de versão. Não contabilizar.',
    },
    {
      codigo: '2',
      numero: 2,
      servico: 'Planejamento do Projeto da Solução de TI',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Solução de TI.',
      het: 28,
      checkHet: true,
      entregaveis:
        'Planejamento do projeto, composto de atividades com estimativas e marcos, Estrutura Analítica do Projeto (EAP).',
      perfisExigidos: [
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo: 'Gerenciamento de Projetos',
      atividade:
        'Definição do planejamento de projeto, incluindo a elaboração da EAP, definição dos principais marcos do projeto, detalhamento das atividades do projeto em termos de tarefas, estimativa de prazos e definição de responsáveis, construção do cronograma.',
    },
    {
      codigo: '3',
      numero: 3,
      servico:
        'Levantamento, Análise e Detalhamento de Requisitos / Especificação',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Funcionalidade / Estória de Usuário.',
      het: 14,
      checkHet: true,
      entregaveis: 'Documento de Requisitos Detalhado.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com os usuários, definição dos atores, detalhamento de fluxos (principal, alternativos, exceções), detalhamento de regras de negócio.',
    },
    {
      codigo: '4',
      numero: 4,
      servico: 'Revisão / Evolução de Requisitos Existentes',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Funcionalidade / Estória de Usuário.',
      het: 8,
      checkHet: true,
      entregaveis: 'Documento de Requisitos revisado e atualizado.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com os usuários, estudo/análise dos Documentos de Requisitos Existentes, validações e/ou alterações nas regras de negócio levantadas, atualização das documentações relacionadas.',
    },
    {
      codigo: '5.a',
      numero: 5,
      servico: 'Definição de Arquitetura da Solução',
      id: 'a',
      complexidade: 'Baixa',

      escopo: 'Por Solução de TI.',
      het: 22,
      checkHet: true,
      entregaveis:
        'Documento de Arquitetura da Solução: descrição das definições técnicas da solução, requisitos não funcionais e diagramas de Contexto, Container e Componentes (C4 Model).',
      perfisExigidos: [
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção e Testes de Software, Apoio ao Desenvolvimento',
      atividade:
        'Análise e construção da arquitetura da solução. Como os componentes principais da solução estarão organizados, pode incluir componentes de software, servidores, serviços, interfaces, protocolos bem como o fluxo de atividades e interação entre os componentes.',
    },
    {
      codigo: '5.b',
      numero: 5,
      servico: 'Definição de Arquitetura da Solução',
      id: 'b',
      complexidade: 'Média',
      escopo: 'Por Solução de TI.',
      het: 29,
      checkHet: true,
      entregaveis:
        'Documento de Arquitetura da Solução: descrição das definições técnicas da solução, requisitos não funcionais e diagramas de Contexto, Container e Componentes (C4 Model).',
      perfisExigidos: [
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção e Testes de Software, Apoio ao Desenvolvimento',
      atividade:
        'Análise e construção da arquitetura da solução. Como os componentes principais da solução estarão organizados, pode incluir componentes de software, servidores, serviços, interfaces, protocolos bem como o fluxo de atividades e interação entre os componentes.',
    },
    {
      codigo: '5.c',
      numero: 5,
      servico: 'Definição de Arquitetura da Solução',
      id: 'c',
      complexidade: 'Alta',
      escopo: 'Por Solução de TI.',
      het: 36,
      checkHet: true,
      entregaveis:
        'Documento de Arquitetura da Solução: descrição das definições técnicas da solução, requisitos não funcionais e diagramas de Contexto, Container e Componentes (C4 Model).',
      perfisExigidos: [
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção e Testes de Software, Apoio ao Desenvolvimento',
      atividade:
        'Análise e construção da arquitetura da solução. Como os componentes principais da solução estarão organizados, pode incluir componentes de software, servidores, serviços, interfaces, protocolos bem como o fluxo de atividades e interação entre os componentes.',
    },
    {
      codigo: '6',
      numero: 6,
      servico: 'Modelagem Entidade Relacionamento da Solução de TI',
      id: '-',
      complexidade: 'Única',
      escopo: 'Por Entidade.',
      het: 2,
      checkHet: true,
      entregaveis: 'Modelo Entidade Relacionamento (MER), Diagrama de Classes.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Análise e modelagem das entidades do sistema e seus relacionamentos.',
    },
    {
      codigo: '7',
      numero: 7,
      servico: 'Documentação Customizada de Solução',
      id: '-',
      complexidade: 'Única',
      escopo: 'Por Documentação.',
      het: 8,
      checkHet: true,
      entregaveis: 'Documentação específica / customizada da Solução de TI.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Elaboração de documentações específicas / customizadas de soluções de TI que exijam um detalhamento diferenciado, não atendido pelos documentos padrões previstos no Processo de Desenvolvimento de Soluções de TI (PDSTI) da SEAD.',
    },
    {
      codigo: '8',
      numero: 8,
      servico:
        'Taxonomia / Classificação / Categorização de Documentos Corporativos em Soluções que Gerenciam Conteúdos Digitais',
      id: '-',
      complexidade: 'Única',
      escopo: 'Por Categoria de Documento.',
      het: 22,
      checkHet: true,
      entregaveis:
        'Projeto de Taxonomia / Classificação / Categorização dos Documentos elaborados.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com os usuários, listagem e análise dos diferentes tipos de documentos manipulados pela aplicação, definição de metadados, elaboração de planilhas / documentos de taxonomia, refinamento.',
    },
    {
      codigo: '9',
      numero: 9,
      servico: 'Modelagem de Processos',
      id: '-',
      complexidade: 'Única',
      escopo: 'A cada conjunto de 20 (vinte) atividades.',
      het: 22,
      checkHet: true,
      entregaveis:
        'Processo mapeado na notação BPMN em ferramenta destinada a este fim.',
      perfisExigidos: [
        {
          perfil: 'Analista de Processos Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software',
      atividade:
        'Reuniões com as áreas de negócio, análise e modelagem dos processos.',
    },
    {
      codigo: '10.a',
      numero: 10,
      servico: 'Estudo /Análise de Sistema Legado',
      id: 'a',
      complexidade: 'Baixa',

      escopo: 'Por hora de análise.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Documentações da Solução de TI resultantes do estudo realizado (requisitos, funcionalidades existentes, regras de negócio, fluxos do sistema, validações) com documentação sobre o resultado da análise.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Reuniões com usuários, reuniões com outros analistas, detalhamento de regras de negócio, print de telas (do sistema e de sistemas envolvidos), elaboração de documentação resultante da análise.',
    },
    {
      codigo: '10.b',
      numero: 10,
      servico: 'Estudo /Análise de Sistema Legado',
      id: 'b',
      complexidade: 'Média',

      escopo: 'Por hora de análise.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Documentações da Solução de TI resultantes do estudo realizado (requisitos, funcionalidades existentes, regras de negócio, fluxos do sistema, validações) com documentação sobre o resultado da análise.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Reuniões com usuários, reuniões com outros analistas, detalhamento de regras de negócio, print de telas (do sistema e de sistemas envolvidos), elaboração de documentação resultante da análise.',
    },
    {
      codigo: '10.c',
      numero: 10,
      servico: 'Estudo /Análise de Sistema Legado',
      id: 'c',
      complexidade: 'Alta',

      escopo: 'Por hora de análise.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Documentações da Solução de TI resultantes do estudo realizado (requisitos, funcionalidades existentes, regras de negócio, fluxos do sistema, validações) com documentação sobre o resultado da análise.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Reuniões com usuários, reuniões com outros analistas, detalhamento de regras de negócio, print de telas (do sistema e de sistemas envolvidos), elaboração de documentação resultante da análise.',
    },
    {
      codigo: '11',
      numero: 11,
      servico: 'Gerenciamento de Projeto de Solução de TI',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por hora de gerenciamento',
      het: 1,
      checkHet: false,
      entregaveis:
        'Relatórios de acompanhamento do  projeto, bem como as alterações que se  fizerem necessárias no planejamento inicial.',
      perfisExigidos: [
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo: 'Gerenciamento de Projetos',
      atividade:
        'Acompanhamento da execução do projeto a partir do que foi planejado, comunicação das informações importantes  a todos os envolvidos, identificação e tratamento das necessidades de mudança e replanejamento do projeto quando necessário.',
    },
    {
      codigo: '12.a',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'a',
      complexidade: 'Baixa',

      escopo:
        'Por Funcionalidade com até 04 (quatro) operações, envolvendo até 10 (dez) atributos cada uma. [+25% a cada nova operação].',
      het: 22,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.b',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'b',
      complexidade: 'Baixa',

      escopo:
        'Por Funcionalidade, com até 04 (quatro) operações, envolvendo de 11 (onze) a 20 (vinte) atributos cada uma. [+25% a cada nova operação].',
      het: 35,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.c',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'c',
      complexidade: 'Baixa',

      escopo:
        'Por Funcionalidade, com até 04 (quatro) operações, envolvendo acima de 20 (vinte) atributos cada uma. [+25% a cada nova operação].',
      het: 46,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.d',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'd',
      complexidade: 'Média',

      escopo:
        'Por Funcionalidade com até 04 (quatro) operações, envolvendo até 10 (dez) atributos cada uma. [+25% a cada nova operação].',
      het: 28,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.e',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'e',
      complexidade: 'Média',

      escopo:
        'Por Funcionalidade, com até 04 (quatro) operações, envolvendo de 11 (onze) a 20 (vinte) atributos cada uma. [+25% a cada nova operação].',
      het: 44,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.f',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'f',
      complexidade: 'Média',

      escopo:
        'Por Funcionalidade, com até 04 (quatro) operações, envolvendo acima de 20 (vinte) atributos cada uma. [+25% a cada nova operação].',
      het: 58,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.g',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'g',
      complexidade: 'Alta',

      escopo:
        'Por Funcionalidade com até 04 (quatro) operações, envolvendo até 10 (dez) atributos cada uma. [+25% a cada nova operação].',
      het: 33,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.h',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'h',
      complexidade: 'Alta',

      escopo:
        'Por Funcionalidade, com até 04 (quatro) operações, envolvendo de 11 (onze) a 20 (vinte) atributos cada uma. [+25% a cada nova operação].',
      het: 52,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '12.i',
      numero: 12,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Interface de Usuário (backend e frontend)',
      id: 'i',
      complexidade: 'Alta',

      escopo:
        'Por Funcionalidade, com até 04 (quatro) operações, envolvendo acima de 20 (vinte) atributos cada uma. [+25% a cada nova operação].',
      het: 69,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Interface de Usuário) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Interface de Usuário, contendo as ações previstas para o atendimento dos requisitos de negócio (por exemplo, ações básicas de inclusão, exclusão, pesquisa e edição de dados / informações - CRUD). Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento do frontend - interfaces e seus comportamentos.',
    },
    {
      codigo: '13.a',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'a',
      complexidade: 'Baixa',

      escopo: 'Por operação envolvendo até 10 (dez) atributos.',
      het: 9,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.b',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'b',
      complexidade: 'Baixa',

      escopo: 'Por operação envolvendo de 11 (onze) a 20 (vinte) atributos.',
      het: 14,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.c',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'c',
      complexidade: 'Baixa',

      escopo: 'Por operação envolvendo acima de 20 (vinte) atributos.',
      het: 18,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.d',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'd',
      complexidade: 'Média',

      escopo: 'Por operação envolvendo até 10 (dez) atributos.',
      het: 16,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.e',
      numero: 24,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'e',
      complexidade: 'Média',

      escopo: 'Por operação envolvendo de 11 (onze) a 20 (vinte) atributos.',
      het: 12,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.f',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'f',
      complexidade: 'Média',

      escopo: 'Por operação envolvendo acima de 20 (vinte) atributos.',
      het: 32,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.g',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'g',
      complexidade: 'Alta',

      escopo: 'Por operação envolvendo até 10 (dez) atributos.',
      het: 30,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.h',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'h',
      complexidade: 'Alta',

      escopo: 'Por operação envolvendo de 11 (onze) a 20 (vinte) atributos.',
      het: 42,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '13.i',
      numero: 13,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Serviço (backend e endpoint)',
      id: 'i',
      complexidade: 'Alta',

      escopo: 'Por operação envolvendo acima de 20 (vinte) atributos.',
      het: 57,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Serviço) implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Serviço contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo integração de sistemas. Este item contempla o desenvolvimento de componentes de backend (camadas de persistência, negócio e controle), suas validações básicas de dados (formato e obrigatoriedade), bem como o desenvolvimento dos endpoints visando publicar / expor os serviços para seu consumo por meio de outras aplicações.',
    },
    {
      codigo: '14.a',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'a',
      complexidade: 'Baixa',

      escopo:
        'Por relatório com até 10 (dez) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 16,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.b',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'b',
      complexidade: 'Baixa',

      escopo:
        'Por relatório, de 11 (onze) a 20 (vinte) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 22,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.c',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'c',
      complexidade: 'Baixa',

      escopo:
        'Por relatório, acima de 20 (vinte) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 35,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.d',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'd',
      complexidade: 'Média',

      escopo:
        'Por relatório com até 10 (dez) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 20,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.e',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'e',
      complexidade: 'Média',

      escopo:
        'Por relatório, de 11 (onze) a 20 (vinte) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 28,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.f',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'f',
      complexidade: 'Média',

      escopo:
        'Por relatório, acima de 20 (vinte) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 44,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.g',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'g',
      complexidade: 'Alta',

      escopo:
        'Por relatório com até 10 (dez) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 24,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.h',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'h',
      complexidade: 'Alta',

      escopo:
        'Por relatório, de 11 (onze) a 20 (vinte) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 34,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '14.i',
      numero: 14,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Relatório (backend e template)',
      id: 'i',
      complexidade: 'Alta',

      escopo:
        'Por relatório, acima de 20 (vinte) atributos, em até 03 (três) formatos (PDF, CSV, TXT, HTML, JSON ou outro similar).',
      het: 53,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Relatório) implementada, commits, capturas de tela, incluindo relatório gerado após sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade / Relatório contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo pesquisas, filtros, impressão e/ou exportação de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), templates visuais dos Relatórios, bem como o desenvolvimento do frontend - interfaces e seus comportamentos -, caso necessário. Pode incluir a execução do relatório, caso seja parte da demanda.',
    },
    {
      codigo: '15.a',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'a',
      complexidade: 'Baixa',

      escopo:
        'Por job, envolvendo até 04 (quatro) entidades/tabelas e/ou steps.',
      het: 10,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.b',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'b',
      complexidade: 'Baixa',

      escopo:
        'Por job, envolvendo de 05 (cinco) a 08 (oito) entidades/tabelas e/ou steps.',
      het: 16,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.c',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'c',
      complexidade: 'Baixa',

      escopo:
        'Por job, envolvendo acima de 08 (oito) entidades/tabelas e/ou steps.',
      het: 23,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.d',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'd',
      complexidade: 'Média',

      escopo:
        'Por job, envolvendo até 04 (quatro) entidades/tabelas e/ou steps.',
      het: 12,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.e',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'e',
      complexidade: 'Média',

      escopo:
        'Por job, envolvendo de 05 (cinco) a 08 (oito) entidades/tabelas e/ou steps.',
      het: 20,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.f',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'f',
      complexidade: 'Média',

      escopo:
        'Por job, envolvendo acima de 08 (oito) entidades/tabelas e/ou steps.',
      het: 36,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.g',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'g',
      complexidade: 'Alta',

      escopo:
        'Por job, envolvendo até 04 (quatro) entidades/tabelas e/ou steps.',
      het: 14,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.h',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'h',
      complexidade: 'Alta',

      escopo:
        'Por job, envolvendo de 05 (cinco) a 08 (oito) entidades/tabelas e/ou steps.',
      het: 24,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '15.i',
      numero: 15,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Batch (backend e jobs)',
      id: 'i',
      complexidade: 'Alta',

      escopo:
        'Por job, envolvendo acima de 08 (oito) entidades/tabelas e/ou steps.',
      het: 44,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Batch) implementada, commits, capturas de tela, incluindo resultado de sua execução, se for parte da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova Funcionalidade (Batch) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo processamentos em lote de dados. Este item contempla o desenvolvimento de componentes de backend (camadas  de acesso a dados, validações, conversões e processamentos), bem como o desenvolvimento dos jobs. Pode incluir a execução do job, caso seja parte da demanda.',
    },
    {
      codigo: '16',
      numero: 16,
      servico:
        'Implementação de Nova Funcionalidade do Tipo Dashboard (backend e frontend)',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por gráfico, a cada fonte de dados.',
      het: 6,
      checkHet: true,
      entregaveis:
        'Funcionalidade (Dashboard) com gráfico(s) implementado(s), commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de gráfico em Funcionalidade (Dashboard) contendo as ações previstas para o atendimento dos requisitos de negócio envolvendo consolidações e exibições gráficas de dados. Este item contempla o desenvolvimento de componentes de backend (camadas de acesso a dados), bem como o desenvolvimento do frontend - telas e gráficos.',
    },
    {
      codigo: '17.a',
      numero: 17,
      servico:
        'Implementação de novo Recurso do tipo Componente (backend ou frontend)',
      id: 'a',
      complexidade: 'Média',

      escopo:
        'Por Componente: Classes de suporte, classes de infraestrutura, clientes de serviços.',
      het: 8,
      checkHet: true,
      entregaveis:
        'Recurso (Componente) implementado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de novo Recurso (Componente) a ser utilizado em uma ou mais aplicações.',
    },
    {
      codigo: '17.b',
      numero: 17,
      servico:
        'Implementação de novo Recurso do tipo Componente (backend ou frontend)',
      id: 'b',
      complexidade: 'Alta',

      escopo:
        'Por Componente: Componentes reutilizáveis (componentes corporativos, componentes de tela).',
      het: 14,
      checkHet: true,
      entregaveis:
        'Recurso (Componente) implementado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de novo Recurso (Componente) a ser utilizado em uma ou mais aplicações.',
    },
    {
      codigo: '18.a',
      numero: 18,
      servico:
        'Implementação de Novo Recurso do Tipo Regra de Negócio (backend)',
      id: 'a',
      complexidade: 'Baixa',

      escopo: 'Por Regra de Negócio.',
      het: 2,
      checkHet: true,
      entregaveis: 'Recurso implementado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de novo Recurso (Regra de Negócio) a ser utilizado em uma ou mais aplicações.',
    },
    {
      codigo: '18.b',
      numero: 18,
      servico:
        'Implementação de Novo Recurso do Tipo Regra de Negócio (backend)',
      id: 'b',
      complexidade: 'Média',

      escopo: 'Por Regra de Negócio.',
      het: 4,
      checkHet: true,
      entregaveis: 'Recurso implementado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de novo Recurso (Regra de Negócio) a ser utilizado em uma ou mais aplicações.',
    },
    {
      codigo: '18.c',
      numero: 18,
      servico:
        'Implementação de Novo Recurso do Tipo Regra de Negócio (backend)',
      id: 'c',
      complexidade: 'Alta',

      escopo: 'Por Regra de Negócio.',
      het: 6,
      checkHet: true,
      entregaveis: 'Recurso implementado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de novo Recurso (Regra de Negócio) a ser utilizado em uma ou mais aplicações.',
    },
    {
      codigo: '19.a',
      numero: 19,
      servico:
        'Implementação de Página Web (HTML, css e javascript) - apenas frontend',
      id: 'a',
      complexidade: 'Única',

      escopo: 'Por página web baseada em template pré-existente.',
      het: 4,
      checkHet: true,
      entregaveis: 'Página web implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova página web (HTML, css e javascript) composta apenas da camada de frontend.',
    },
    {
      codigo: '19.b',
      numero: 19,
      servico:
        'Implementação de Página Web (HTML, css e javascript) - apenas frontend',
      id: 'b',
      complexidade: 'Única',

      escopo: 'Por página web com diagramação visual customizada.',
      het: 8,
      checkHet: true,
      entregaveis: 'Página web implementada, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de nova página web (HTML, css e javascript) composta apenas da camada de frontend.',
    },
    {
      codigo: '20.a',
      numero: 20,
      servico:
        'Automatização de Novos Processos Modelados na Disciplina BPM com Ferramenta BPMS',
      id: 'a',
      complexidade: 'Única',

      escopo: 'Por processo com até 05 (cinco) atividades.',
      het: 58,
      checkHet: true,
      entregaveis: 'Processo automatizado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de automatização de processos, contemplando os tipos de atividades previstos na notação de modelagem de processos da disciplina BPM (BPMS).',
    },
    {
      codigo: '20.b',
      numero: 20,
      servico:
        'Automatização de Novos Processos Modelados na Disciplina BPM com Ferramenta BPMS',
      id: 'b',
      complexidade: 'Única',

      escopo: 'Por processo de 06 (seis) a 10 (dez) atividades.',
      het: 72,
      checkHet: true,
      entregaveis: 'Processo automatizado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de automatização de processos, contemplando os tipos de atividades previstos na notação de modelagem de processos da disciplina BPM (BPMS).',
    },
    {
      codigo: '20.c',
      numero: 20,
      servico:
        'Automatização de Novos Processos Modelados na Disciplina BPM com Ferramenta BPMS',
      id: 'c',
      complexidade: 'Única',

      escopo: 'Por processo de 11 (onze) a 15 (quinze) atividades.',
      het: 110,
      entregaveis: 'Processo automatizado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de automatização de processos, contemplando os tipos de atividades previstos na notação de modelagem de processos da disciplina BPM (BPMS).',
    },
    {
      codigo: '20.d',
      numero: 20,
      servico:
        'Automatização de Novos Processos Modelados na Disciplina BPM com Ferramenta BPMS',
      id: 'd',
      complexidade: 'Única',

      escopo: 'Por processo acima de 15 (quinze) atividades.',
      het: 120,
      entregaveis: 'Processo automatizado, commits, capturas de tela.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Desenvolvimento completo de automatização de processos, contemplando os tipos de atividades previstos na notação de modelagem de processos da disciplina BPM (BPMS).',
    },
    {
      codigo: '21.a',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'a',
      complexidade: 'Única',

      escopo:
        'Por evento de inclusão, alteração ou exclusão de atributo em formulário, relatório ou serviço existentes, com os devidos ajustes nas camadas de frontend e backend.',
      het: 4,
      checkHet: true,
      entregaveis: 'Manutenção implementada, commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.b',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'b',
      complexidade: 'Única',

      escopo:
        'Por evento de inclusão, alteração ou exclusão de labels, tooltips ou outros elementos estáticos em telas ou relatórios existentes.',
      het: 1,
      checkHet: true,
      entregaveis: 'Manutenção implementada, commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.c',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'c',
      complexidade: 'Única',

      escopo:
        'Por evento de inclusão, alteração ou exclusão de validações de dados.',
      het: 1,
      checkHet: true,
      entregaveis: 'Manutenção implementada: commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.d',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'd',
      complexidade: 'Única',

      escopo:
        'Por evento de alteração ou exclusão de regra de negócio, por regra.',
      het: 2,
      checkHet: true,
      entregaveis: 'Manutenção implementada: commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.e',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'e',
      complexidade: 'Única',

      escopo:
        'Por evento de correção de erros (bugs) em componentes de backend ou frontend.',
      het: 2,
      checkHet: true,
      entregaveis: 'Manutenção implementada: commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.f',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'f',
      complexidade: 'Única',

      escopo:
        'Por evento de alteração de contratos de APIs/componentes ou adequação de SPIs/clientes.',
      het: 1,
      checkHet: true,
      entregaveis: 'Manutenção implementada: commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.g',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'g',
      complexidade: 'Única',

      escopo:
        'Por evento de exclusão de funcionalidade existente, com os devidos ajustes de impacto no sistema.',
      het: 4,
      checkHet: true,
      entregaveis: 'Manutenção implementada: commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Implementação da manutenção em sistema existente.',
    },
    {
      codigo: '21.h',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'h',
      complexidade: 'Baixa',

      escopo:
        'Por hora de análise exploratória de problemas em sistemas existentes.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Relatório com o diagnóstico obtido como resultado da análise.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Identificação de erros em aplicações (troubleshooting): análise, testes e debug para identificar as causas do problema / defeito.',
    },
    {
      codigo: '21.i',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'i',
      complexidade: 'Média',

      escopo:
        'Por hora de análise exploratória de problemas em sistemas existentes.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Relatório com o diagnóstico obtido como resultado da análise.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Identificação de erros em aplicações (troubleshooting): análise, testes e debug para identificar as causas do problema / defeito.',
    },
    {
      codigo: '21.j',
      numero: 21,
      servico:
        'Manutenções em Sistemas Existentes (corretivas, evolutivas, adaptativas ou perfectivas)',
      id: 'j',
      complexidade: 'Alta',

      escopo:
        'Por hora de análise exploratória de problemas em sistemas existentes.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Relatório com o diagnóstico obtido como resultado da análise.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Identificação de erros em aplicações (troubleshooting): análise, testes e debug para identificar as causas do problema / defeito.',
    },
    {
      codigo: '22',
      numero: 22,
      servico: 'Implementação de Testes Unitários Automatizados',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por recurso a ser testado.',
      het: 4,
      checkHet: true,
      entregaveis: 'Testes  Unitários Automatizados Implementados, commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Criação de testes utilizando ferramentas de automatização  de  testes  unitários  (Junit, Postman, SoapUI).',
    },
    {
      codigo: '23',
      numero: 23,
      servico: 'Elaboração de Roteiro de Testes',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Funcionalidade / Estória de Usuário.',
      het: 8,
      checkHet: true,
      entregaveis: 'Documento de Roteiro de Testes.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Planejamento e concepção dos cenários de testes, definições dos casos de sucesso e falhas, definição de massas de dados de testes.',
    },
    {
      codigo: '24',
      numero: 24,
      servico: 'Implementação de Testes Funcionais Automatizados',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Funcionalidade / Estória de Usuário.',
      het: 6,
      checkHet: true,
      entregaveis: 'Teste Funcional Automatizado Implementado, commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Criação de testes utilizando ferramentas de automatização de testes funcionais (Selenium).',
    },
    {
      codigo: '25',
      numero: 25,
      servico: 'Execução de Testes Funcionais Não Automatizados (Manuais)',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Funcionalidade / Estória de Usuário.',
      het: 4,
      checkHet: true,
      entregaveis: 'Relatório de Resultados dos Testes Manuais.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Execução de Testes Funcionais Manuais, com a produção de relatório comprobatório com  os  resultados  obtidos  durante  os testes.',
    },
    {
      codigo: '26',
      numero: 26,
      servico: 'Configuração / Preparação da Aplicação para Implantação',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Aplicação.',
      het: 6,
      checkHet: true,
      entregaveis: 'Arquivos de configuração, commits.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Criação  de  arquivos  de  profiles  para  a implantação em múltiplos ambientes, parametrizações,  configurações  de  log, segurança, configurações gerais.',
    },
    {
      codigo: '27',
      numero: 27,
      servico: 'Solicitação e Validação de Ambiente para a Implantação',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Aplicação, por Ambiente, a cada solicitação.',
      het: 1,
      checkHet: true,
      entregaveis: 'Atividades / Solicitações.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Solicitações de criação e configuração de ambientes para a implantação das aplicações, bem como sua validação.',
    },
    {
      codigo: '28',
      numero: 28,
      servico:
        'Configuração Padrão Relacionada à Integração Contínua para Aplicação',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Aplicação, por Ambiente, a cada configuração.',
      het: 1,
      checkHet: true,
      entregaveis: 'Configurações  realizadas  e solicitações atendidas.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },

      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Configuração de gerenciamento de versões, builds do Jenkins, configurações do Nexus.',
    },
    {
      codigo: '29',
      numero: 29,
      servico: 'Projeto customizado de Integração Contínua para Aplicação',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Aplicação.',
      het: 36,
      checkHet: true,
      entregaveis: 'Configurações  realizadas  e solicitações atendidas.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Concepção  e  configuração  de  rotinas  / scripts  customizados  para  a  Integração Contínua  de  Aplicações  que  possuam necessidades específicas.',
    },
    {
      codigo: '30',
      numero: 30,
      servico: 'Construção e Implantação (Deployment) de aplicação',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por implantação (deployment).',
      het: 1,
      checkHet: true,
      entregaveis:
        'Aplicação implantada no ambiente desejado ou artefato publicado em repositório específico.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Fechamento de versões, Merge Requests (sem revisão de código), Empacotamento e Implantação (deployment) dos sistemas nos ambientes de Desenvolvimento, Homologação ou Produção. Não se aplica a implantações em ambiente local (máquina do desenvolvedor)',
    },
    {
      codigo: '31',
      numero: 31,
      servico:
        'Configuração da Taxonomia / Classificação / Categorização de Documentos Corporativos na Ferramenta de Gerenciamento de Conteúdo Eletrônico',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Categoria de Documento.',
      het: 6,
      checkHet: true,
      entregaveis:
        'Taxonomia  /  Classificação  / Categorização dos Documentos  configurada  em ambiente de desenvolvimento e homologação.',
      perfisExigidos: [
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
      ],
      grupo:
        'Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Solicitação de criação de usuários e security groups, implementação da configuração dos metadados  por  categoria,  validação  e homologação da configuração realizada.',
    },
    {
      codigo: '32',
      numero: 32,
      servico: 'Operação assistida de Apoio às Soluções de TI',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por hora de operação em apoio/assistência.',
      het: 1,
      checkHet: false,
      entregaveis:
        'Registros de atendimentos de demandas por parte da área solicitante e quaisquer evidências de atendimento da demanda.',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Processos Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Apoio às diversas áreas da SEAD no tocante à utilização de Soluções de TI, dúvidas técnicas; execuções de atividades de apoio relacionadas à Tecnologia da Informação.',
    },
    {
      codigo: '33',
      numero: 33,
      servico: 'Elaboração e Execução de Scripts',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por script, a cada 04 (quatro) tabelas envolvidas no script.',
      het: 1,
      checkHet: true,
      entregaveis: 'Scripts SQL e NoSQL, resultado da execução.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade: 'Análise, elaboração e execução de Scripts SQL e NoSQL.',
    },
    {
      codigo: '34',
      numero: 34,
      servico:
        'Treinamentos / Workshops / Apresentações Técnicas / Repasse de Conhecimento',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por hora de treinamento, apresentação ou repasse tecnológico.',
      het: 2,
      checkHet: false,
      entregaveis: 'Slides e manuais (se aplicáveis).',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Processos Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Apresentações, treinamentos e workshops voltados  aos  membros  das  equipes  de desenvolvimento com o intuito de disseminar / repassar conhecimentos de negócio e conhecimentos técnicos, apresentar soluções corporativas, padrões, boas práticas e metodologias de',
    },
    {
      codigo: '35',
      numero: 35,
      servico: 'Elaboração de Manuais de Usuário',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Funcionalidade/Estória de Usuário.',
      het: 4,
      checkHet: true,
      entregaveis: 'Manuais de Usuários em formato HTML, PDF ou DOC.',
      perfisExigidos: [
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Elaboração de Manuais destinados aos Usuários das Soluções de TI.',
    },
    {
      codigo: '36',
      numero: 36,
      servico: 'Participação em Reuniões',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por Reunião de, no mínimo, 60 minutos.',
      het: 1,
      checkHet: false,
      entregaveis: 'Atas de Reunião',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Júnior',
          complexidade: 1,
        },
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Processos Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo: 'Todos os Grupos de Serviços',
      atividade:
        'Participação em Reuniões não contempladas na execução das atividades previstas neste Catálogo.',
    },
    {
      codigo: '37',
      numero: 37,
      servico: 'Prospecção Tecnológica',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por evento/demanda.',
      het: 36,
      checkHet: true,
      entregaveis:
        'Relatório Técnico (Alternativas de Soluções, Prós e Contras, viabilidade, solução escolhida e justificativa).',
      perfisExigidos: [
        {
          perfil: 'Desenvolvedor Pleno',
          complexidade: 1.5,
        },
        {
          perfil: 'Desenvolvedor Sênior',
          complexidade: 2.1,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
        {
          perfil: 'Analista de Testes Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Processos Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Arquiteto de Software Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Arquiteto SOA Sênior',
          complexidade: 2.6,
        },
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Gerente de Projetos Sênior',
          complexidade: 4.6,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Desenvolvimento, Manutenção, Arquitetura, Documentação e Testes de Software',
      atividade:
        'Pesquisas  e estudos para a adoção de novas  tecnologias  e  frameworks,  novos padrões de projeto etc.',
    },
    {
      codigo: '38',
      numero: 38,
      servico: 'Wireframe de Funcionalidade',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por tela da Funcionalidade/Estória de Usuário.',
      het: 2,
      checkHet: true,
      entregaveis:
        'Rascunho ou esboço de uma tela da Funcionalidade (um para cada tela da Funcionalidade)',
      perfisExigidos: [
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Design Gráfico, Interface do Usuário e Web Design (UX e UI)',
      atividade:
        'Elaboração de um rascunho ou esboço (protótipo não funcional), definindo como as informações devem estar organizadas em uma tela de sistema.',
    },
    {
      codigo: '39',
      numero: 39,
      servico: 'Prototipação de Funcionalidade',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por tela da Funcionalidade/Estória de Usuário.',
      het: 4,
      checkHet: true,
      entregaveis:
        'Protótipos funcionais de uma tela da Funcionalidade (um para cada tela da Funcionalidade)',
      perfisExigidos: [
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
        {
          perfil: 'Analista de Sistemas Pleno',
          complexidade: 2,
        },
        {
          perfil: 'Analista de Sistemas Sênior',
          complexidade: 2.7,
        },
      ],
      grupo:
        'Análise de Sistemas, Desenho de Processos e Engenharia de Requisitos de Software / Design Gráfico, Interface do Usuário e Web Design (UX e UI)',
      atividade:
        'Elaboração de protótipo funcional, definindo como as informações devem estar organizadas, quais serão os componentes visuais, as cores, a tipografia e imagens que estarão dispostos em uma tela de sistema.',
    },
    {
      codigo: '40',
      numero: 40,
      servico: 'Elaboração de Imagem',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por ícone ou imagem.',
      het: 2,
      checkHet: true,
      entregaveis:
        'Ícone ou imagem disponibilizada nos formatos PNG, JPG ou SVG (ou similares).',
      perfisExigidos: [
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
      ],
      grupo: 'Design Gráfico, Interface do Usuário e Web Design (UX e UI)',
      atividade:
        'Produção de ícone ou imagem, com base nas especificações de formato e tamanho, elaborado a partir de fontes preexistentes livres de direitos autorais, ou de uso formalmente autorizado, ou por meio do design criativo.',
    },
    {
      codigo: '41',
      numero: 41,
      servico: 'Elaboração de Vídeos/Animações',
      id: '-',
      complexidade: 'Única',

      escopo: 'Por minuto de vídeo/animação.',
      het: 6,
      checkHet: false,
      entregaveis:
        'Vídeo ou animação disponibilizados nos formatos AVI, MP4 ou similar.',
      perfisExigidos: [
        {
          perfil: 'Designer de UX Sênior',
          complexidade: 1.3,
        },
      ],
      grupo: 'Design Gráfico, Interface do Usuário e Web Design (UX e UI)',
      atividade:
        'Produção de vídeo ou animação, com base nas especificações de formato e tamanho, elaborado a partir de fontes preexistentes livres de direitos autorais, ou de uso formalmente autorizado, ou por meio do design criativo.',
    },
  ];

  private servicosItem2: any[] = [
    {
      codigo: "1.a",
      numero: 1,
      servico: "Instalar Ambiente de Middleware",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por ambiente.",
      het: 4,
      entregaveis: "Serviços de Middleware instalados, configurados e disponíveis; documentação dos procedimentos realizados; Relatório das\natividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          }
        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Serviço de entrega de instalação de ambiente de aplicação."
    },
    {
      codigo: "1.b",
      numero: 1,
      servico: "Instalar Ambiente de Middleware",
      id: "b",
      complexidade: "Média",
      escopo: "Por ambiente.",
      het: 6,
      entregaveis: "Serviços de Middleware instalados, configurados e disponíveis; documentação dos procedimentos realizados; Relatório das\natividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Serviço de entrega de instalação de ambiente de aplicação."
    },
    {
      codigo: "1.c",
      numero: 1,
      servico: "Instalar Ambiente de Middleware",
      id: "c",
      complexidade: "Alta",
      escopo: "Por ambiente.",
      het: 8,
      entregaveis: "Serviços de Middleware instalados, configurados e disponíveis; documentação dos procedimentos realizados; Relatório das\natividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Sênior",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Serviço de entrega de instalação de ambiente de aplicação."
    },
    {
      codigo: "2.a",
      numero: 2,
      servico: "Configurar e Gerenciar Ambiente de Ambiente de Middleware",
      id: "a",
      complexidade: "Única",
      escopo: "Por cada criação de data source ou criação de usuários locais ou restart de managed servers\nou restart de data sources.",
      het: "0,5",
      entregaveis: "Configuração realizada; servidores e aplicações operacionais; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Júnior",
          complexidade: 3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Serviço de entrega de arquitetura corporativa que permita a criação de serviços de negócios interoperáveis que podem facilmente serem reutilizados e compartilhados entre aplicações."
    },
    {
      codigo: "2.b",
      numero: 2,
      servico: "Configurar e Gerenciar Ambiente de Ambiente de Middleware",
      id: "b",
      complexidade: "Média",
      escopo: "Por ambiente.",
      het: 3,
      entregaveis: "Configuração realizada; servidores e aplicações operacionais; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Serviço de entrega de arquitetura corporativa que permita a criação de serviços de negócios interoperáveis que podem facilmente serem reutilizados e compartilhados entre aplicações."
    },
    {
      codigo: "2.c",
      numero: 2,
      servico: "Configurar e Gerenciar Ambiente de Ambiente de Middleware",
      id: "c",
      complexidade: "Alta",
      escopo: "Por ambiente.",
      het: 5,
      entregaveis: "Configuração realizada; servidores e aplicações operacionais; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Serviço de entrega de arquitetura corporativa que permita a criação de serviços de negócios interoperáveis que podem facilmente serem reutilizados e compartilhados entre aplicações."
    },
    {
      codigo: '3',
      numero: 3,
      servico: "Atualização / Deploy de Aplicação, Componentes e Microsserviços",
      id: "-",
      complexidade: "Única",
      escopo: "Por deploy.",
      het: "0,5",
      entregaveis: "Deploy realizado e aplicação operacional.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais\ne Virtualização",
      atividade: "Serviço de execução de atualização/deploy de aplicação."
    },
    {
      codigo: '4',
      numero: 4,
      servico: "Documentação Customizada de Solução",
      id: "-",
      complexidade: "Única",
      escopo: "Por documentação.",
      het: 8,
      entregaveis: "Documentação específica / customizada da Solução de TI.",
      perfisExigidos:
        [
          {
            perfil: "Analista de BI Pleno",
            complexidade: 3.1
          },
          {
            perfil: "Administrador de Dados Pleno",
            complexidade: 3.7
          },
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          },
          {
            perfil: "Analista Infraestrutura de Rede Pleno",
            complexidade: 3.5
          }
        ],
      grupo: "Sustentação e Suporte à Rede de\nComputadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e\nBusiness Intelligence (BI)",
      atividade: "Elaboração de documentações específicas / customizadas relacionadas com processo, modelos, serviços ou soluções de TI."
    },
    {
      codigo: "5.a",
      numero: 5,
      servico: "Análise  de Problemas Relacionados a Servidores de Middleware",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Relatório das atividades realizadas; documentação da solução do problemas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realizar uma análise  de Problemas que estejam impactando a performance de servidores de aplicações."
    },
    {
      codigo: "5.b",
      numero: 5,
      servico: "Análise  de Problemas Relacionados a Servidores de Middleware",
      id: "b",
      complexidade: "Média",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Relatório das atividades realizadas; documentação da solução do problemas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realizar uma análise  de Problemas que estejam impactando a performance de servidores de aplicações."
    },
    {
      codigo: "5.c",
      numero: 5,
      servico: "Análise  de Problemas Relacionados a Servidores de Middleware",
      id: "c",
      complexidade: "Alta",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Relatório das atividades realizadas; documentação da solução do problemas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realizar uma análise  de Problemas que estejam impactando a performance de servidores de aplicações."
    },
    {
      codigo: "6.a",
      numero: 6,
      servico: "Configurar e Gerenciar Solução de Arquitetura de Gerenciamento de Conteúdo",
      id: "a",
      complexidade: "Única",
      escopo: "Por restart de managed servers, criação de usuários locais,\nrestart de data sources.",
      het: "0,5",
      entregaveis: "Configuração realizada, ambiente e aplicação operacional; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realizar serviço gerenciamento e entrega de arquitetura de gerenciamento de conteúdo de documentos  permita set utilizado por outros serviços de negócios interoperáveis e  podendo facilmente serem reutilizados e compartilhados."
    },
    {
      codigo: "6.b",
      numero: 6,
      servico: "Configurar e Gerenciar Solução de Arquitetura de Gerenciamento de Conteúdo",
      id: "b",
      complexidade: "Única",
      escopo: "Por gestão de usuários integrados ao AD, integrações com active directory ou outras bases de autenticação ou atualização de versões de\nservidores aplicação.",
      het: 3,
      entregaveis: "Configuração realizada, ambiente e aplicação operacional; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realizar serviço gerenciamento e entrega de arquitetura de gerenciamento de conteúdo de documentos  permita set utilizado por outros serviços de negócios interoperáveis e  podendo facilmente serem reutilizados e compartilhados."
    },
    {
      codigo: "6.c",
      numero: 6,
      servico: "Configurar e Gerenciar Solução de Arquitetura de Gerenciamento de Conteúdo",
      id: "c",
      complexidade: "Única",
      escopo: "Por migrações de metadados entre ambientes, clusterização de ambientes; aplicação de\npatch atualizações.",
      het: 4,
      entregaveis: "Configuração realizada, ambiente e aplicação operacional; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realizar serviço gerenciamento e entrega de arquitetura de gerenciamento de conteúdo de documentos  permita set utilizado por outros serviços de negócios interoperáveis e  podendo facilmente serem reutilizados e compartilhados."
    },
    {
      codigo: "7.a",
      numero: 7,
      servico: "Criação, Configuração e Gerenciamento de APIs",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por API.",
      het: 2,
      entregaveis: "Configuração realizada e aplicação operacional.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Criação e gerenciamento de Dataservices - Int,  API´s, de Data Sources com acesso as diversas bases de dados e Atualização de versões de servidores aplicação."
    },
    {
      codigo: "7.b",
      numero: 7,
      servico: "Criação, Configuração e Gerenciamento de APIs",
      id: "b",
      complexidade: "Média",
      escopo: "Por API.",
      het: 4,
      entregaveis: "Configuração realizada e aplicação operacional.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Criação e gerenciamento de Dataservices - Int,  API´s, de Data Sources com acesso as diversas bases de dados e Atualização de versões de servidores aplicação."
    },
    {
      codigo: "7.c",
      numero: 7,
      servico: "Criação, Configuração e Gerenciamento de APIs",
      id: "c",
      complexidade: "Alta",
      escopo: "Por API.",
      het: 6,
      entregaveis: "Configuração realizada e aplicação operacional.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Criação e gerenciamento de Dataservices - Int,  API´s, de Data Sources com acesso as diversas bases de dados e Atualização de versões de servidores aplicação."
    },
    {
      codigo: "8.a",
      numero: 8,
      servico: "Configuração, Instalação e Manutenção em Equipamentos/Ativos de Redes (switch, roteador, access point, etc.)",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por ativo de rede ou equipamento.",
      het: 2,
      entregaveis: "Equipamento/Ativo de Rede configurado, instalado e/ou operacional; Relatório das atividades realizadas; criação ou atualização na documentação dos\nprocedimentos.",
      perfisExigidos:
        [
          {
            perfil: "Analista Infraestrutura de Rede Júnior",
            complexidade: 3
          }
        ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Serviços de instalação, configuração e manutenção de equipamentos de comunicação de dados, tais como: Roteadores, Switches, Access Point, etc."
    },
    {
      codigo: "8.b",
      numero: 8,
      servico: "Configuração, Instalação e Manutenção em Equipamentos/Ativos de Redes (switch, roteador, access point, etc.)",
      id: "b",
      complexidade: "Média",
      escopo: "Por ativo de rede ou equipamento.",
      het: 3,
      entregaveis: "Equipamento/Ativo de Rede configurado, instalado e/ou operacional; Relatório das atividades realizadas; criação ou atualização na documentação dos\nprocedimentos.",
      perfisExigidos:
        [
          {
            perfil: "Analista Infraestrutura de Rede Pleno",
            complexidade: 3.5
          }
        ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Serviços de instalação, configuração e manutenção de equipamentos de comunicação de dados, tais como: Roteadores, Switches, Access Point, etc."
    },
    {
      codigo: "8.c",
      numero: 8,
      servico: "Configuração, Instalação e Manutenção em Equipamentos/Ativos de Redes (switch, roteador, access point, etc.)",
      id: "c",
      complexidade: "Alta",
      escopo: "Por ativo de rede ou equipamento.",
      het: 4,
      entregaveis: "Equipamento/Ativo de Rede configurado, instalado e/ou operacional; Relatório das atividades realizadas; criação ou atualização na documentação dos\nprocedimentos.",

      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Serviços de instalação, configuração e manutenção de equipamentos de comunicação de dados, tais como: Roteadores, Switches, Access Point, etc."
    },
    {
      codigo: "9.a",
      numero: 9,
      servico: "Serviços de Gerenciamento e Monitoramento da Infraestrutura e Ativos de Rede",
      id: "a",
      complexidade: "Única",
      escopo: "Inclusão de ativo de rede em\nferramenta de monitoramento.",
      het: "0,5",
      entregaveis: "Item de infraestrutura ou Ativo de Rede gerenciado e/ou\nmonitorado; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],

      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Gerenciar e Monitorar a Infraestrutura e Ativos de Rede."
    },
    {
      codigo: "9.b",
      numero: 9,
      servico: "Serviços de Gerenciamento e Monitoramento da Infraestrutura e Ativos de Rede",
      id: "b",
      complexidade: "Única",
      escopo: "Criação de monitoramento de sistema / aplicação / serviço com mapeamento de todas as\ndependências.",
      het: 2,
      entregaveis: "Item de infraestrutura ou Ativo de Rede gerenciado e/ou\nmonitorado; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Gerenciar e Monitorar a Infraestrutura e Ativos de Rede."
    },
    {
      codigo: "9.c",
      numero: 9,
      servico: "Serviços de Gerenciamento e Monitoramento da Infraestrutura e Ativos de Rede",
      id: "c",
      complexidade: "Única",
      escopo: "Atualização de versões em ferramentas de monitoração ou gerenciamento de infraestrutura de rede, integração com outras soluções, instalação de novos\ncomponentes.",
      het: 4,
      entregaveis: "Item de infraestrutura ou Ativo de Rede gerenciado e/ou\nmonitorado; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Gerenciar e Monitorar a Infraestrutura e Ativos de Rede."
    },
    {
      codigo: "10.a",
      numero: 10,
      servico: "Análise de Problemas Relacionados a Infraestrutura de Redes",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Realizar análise do ambiente para identificar o problema  relacionado que impacta o funcionamento da infraestrutura de redes."
    },
    {
      codigo: "10.b",
      numero: 10,
      servico: "Análise de Problemas Relacionados a Infraestrutura de Redes",
      id: "b",
      complexidade: "Media",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Realizar análise do ambiente para identificar o problema  relacionado que impacta o funcionamento da infraestrutura de redes."
    },
    {
      codigo: "10.c",
      numero: 10,
      servico: "Análise de Problemas Relacionados a Infraestrutura de Redes",
      id: "c",
      complexidade: "Alta",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Relatório das atividades realizadas; criação ou atualização na documentação dos procedimentos.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Realizar análise do ambiente para identificar o problema  relacionado que impacta o funcionamento da infraestrutura de redes."
    },
    {
      codigo: "11.a",
      numero: 11,
      servico: "Instalação e Configuração de Sistemas Operacionais ou Serviços em Sistemas Operacionais",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por sistema ou serviço.",
      het: 2,
      entregaveis: "Serviço entregue e operacional; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Analista Infraestrutura de Rede Pleno",
          complexidade: 3.5
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Instalação e configuração de serviços em sistemas operacionais Linux/Unix e Windows, tais como: Banco de dados, aplicação, serviços de infraestrutura de rede (DHCP, DNS, AD, File Server, Proxy,\nfirewall, impressão, etc.)."
    },
    {
      codigo: "11.b",
      numero: 11,
      servico: "Instalação e Configuração de Sistemas Operacionais ou Serviços em Sistemas Operacionais",
      id: "b",
      complexidade: "Media",
      escopo: "Por sistema ou serviço.",
      het: 4,
      entregaveis: "Serviço entregue e operacional; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Instalação e configuração de serviços em sistemas operacionais Linux/Unix e Windows, tais como: Banco de dados, aplicação, serviços de infraestrutura de rede (DHCP, DNS, AD, File Server, Proxy,\nfirewall, impressão, etc.)."
    },
    {
      codigo: "11.c",
      numero: 11,
      servico: "Instalação e Configuração de Sistemas Operacionais ou Serviços em Sistemas Operacionais",
      id: "c",
      complexidade: "Alta",
      escopo: "Por sistema ou serviço.",
      het: 8,
      entregaveis: "Serviço entregue e operacional; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Instalação e configuração de serviços em sistemas operacionais Linux/Unix e Windows, tais como: Banco de dados, aplicação, serviços de infraestrutura de rede (DHCP, DNS, AD, File Server, Proxy,\nfirewall, impressão, etc.)."
    },
    {
      codigo: "12.a",
      numero: 12,
      servico: "Configurar e Gerenciar Ambiente de Storage",
      id: "a",
      complexidade: "Única",
      escopo: "Por gerenciamento de pools de armazenamento;\nalocação de pools de armazenamentos à soluções específicas;\ngerenciamento de balanceamento de uso de recursos em rede SAN; avaliação de solução de storage corporativa autônomas; avaliação de solução de interconexão de rede de armazenamento corporativas\n(SAN ou equivalentes).",
      het: 2,
      entregaveis: "Ambiente de Storage configurado; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, configurar e gerenciar ambiente de Storage."
    },
    {
      codigo: "12.b",
      numero: 12,
      servico: "Configurar e Gerenciar Ambiente de Storage",
      id: "b",
      complexidade: "Única",
      escopo: "Por implantação de solução de storage corporativa autônomas; implantação e interligação de novas soluções de storages à soluções existentes; implantação de solução de interconexão de rede de armazenamento corporativas (SAN ou equivalentes); Aplicação de patch;\nAtualização de versão, etc.",
      het: 4,
      entregaveis: "Ambiente de Storage configurado; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        {
          perfil: "Administrador de Sistemas Operacionais Pleno",
          complexidade: 3.3
        }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, configurar e gerenciar ambiente de Storage."
    },
    {
      codigo: "13.a",
      numero: 13,
      servico: "Administrar e Gerenciar Soluções de Backup",
      id: "a",
      complexidade: "Única",
      escopo: "Por configuração e monitoramento das tarefas de backup;\nrealização de backup de\narquivos / sistema operacional / banco de dados.",
      het: 1,
      entregaveis: "Ferramentas de backup configuradas; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          },
          {
            perfil: "Analista Infraestrutura de Rede Pleno",
            complexidade: 3.5
          }
        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte à Rede de Computadores",
      atividade: "Administrar, gerenciar, monitorar as tarefas e ambiente das soluções de backup."
    },
    {
      codigo: "13.b",
      numero: 13,
      servico: "Administrar e Gerenciar Soluções de Backup",
      id: "b",
      complexidade: "Única",
      escopo: "Por realização de restore de arquivos; avaliação de solução de backup corporativa; realizar testes de restore\nplanejados, garantir integridade\ne avaliar / readequar período de cópia.",
      het: 2,
      entregaveis: "Ferramentas de backup configuradas; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          },
          {
            perfil: "Analista Infraestrutura de Rede Pleno",
            complexidade: 3.5
          }
        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte à Rede de Computadores",
      atividade: "Administrar, gerenciar, monitorar as tarefas e ambiente das soluções de backup."
    },
    {
      codigo: "13.c",
      numero: 13,
      servico: "Administrar e Gerenciar Soluções de Backup",
      id: "c",
      complexidade: "Única",
      escopo: "Por implantação solução de backup corporativa integradas a soluções de hardware de armazenamento realtime e archive; aplicação de patch;\natualização de versão; etc.",
      het: 8,
      entregaveis: "Ferramentas de backup configuradas; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          },
          {
            perfil: "Analista Infraestrutura de Rede Sênior",
            complexidade: 3.7
          }
        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte à Rede de Computadores",
      atividade: "Administrar, gerenciar, monitorar as tarefas e ambiente das soluções de backup."
    },
    {
      codigo: "14.a",
      numero: 14,
      servico: "Configurar e Gerenciar Ambiente de Virtualização",
      id: "a",
      complexidade: "Única",
      escopo: "Por criação, configuração e monitoramento de maquinas virtuais; criação e remoção de\nSnapshots.",
      het: 1,
      entregaveis: "Ambiente de Virtualização configurado; Documentação dos procedimentos do\nserviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          }
        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar,Gerenciar, monitorar e manter o Ambiente de virtualização."
    },
    {
      codigo: "14.b",
      numero: 14,
      servico: "Configurar e Gerenciar Ambiente de Virtualização",
      id: "b",
      complexidade: "Única",
      escopo: "Por configuração de infraestrutura de virtualização (storage, network, segurança e etc); avaliação de infraestrutura completa de virtualização, on- premise ou nuvem;\navaliação de rotinas que garantam o correto funcionamento de toda\ninfraestrutura de virtualização.",
      het: 6,
      entregaveis: "Ambiente de Virtualização configurado; Documentação dos procedimentos do\nserviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          }
        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar,Gerenciar, monitorar e manter o Ambiente de virtualização."
    },
    {
      codigo: "14.c",
      numero: 14,
      servico: "Configurar e Gerenciar Ambiente de Virtualização",
      id: "c",
      complexidade: "Única",
      escopo: "Por implantação e homologação de infraestrutura completa de virtualização, on- premise ou nuvem; implantação e reconfiguração de rotinas que garantam o correto funcionamento de toda infraestrutura de virtualização; aplicação de patch e\natualização de versão.",
      het: 8,
      entregaveis: "Ambiente de Virtualização configurado; Documentação dos procedimentos do\nserviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Administrador de Sistemas Operacionais Pleno",
            complexidade: 3.3
          }

        ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar,Gerenciar, monitorar e manter o Ambiente de virtualização."
    },
    {
      codigo: '15',
      numero: 15,
      servico: "Suporte Presencial ou Remoto ao Usuário - Windows",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de atendimento.             Histórico da atividade\nexecutada.",
      het: 1,
      entregaveis: "Ambiente de Virtualização configurado; Documentação dos procedimentos do\nserviço; Relatório das atividades realizadas.",
      perfisExigidos:
        [
          {
            perfil: "Operador de Atendimento de 1º Nível",
            complexidade: 1
          },
          {
            perfil: "Técnico de Suporte",
            complexidade: 2
          }
        ],
      grupo: "Suporte Técnico Remoto e Presencial",
      atividade: "Serviço de manutenção e suporte a\nusuários, aplicações, estações de trabalho e periféricos."
    },
    {
      codigo: "16.a",
      numero: 16,
      servico: "Análise de Problemas Relacionados a Ambiente de Sistema Operacional",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas\nComputacionais Pleno", complexidade: 1 }
      ],

      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, identificar e corrigir problemas relacionados a servidores SO (Linux, Unix, Windows, etc.)."
    },
    {
      codigo: "16.b",
      numero: 16,
      servico: "Análise de Problemas Relacionados a Ambiente de Sistema Operacional",
      id: "b",
      complexidade: "Baixa",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas\nComputacionais Pleno", complexidade: 1 }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, identificar e corrigir problemas relacionados a servidores SO (Linux, Unix, Windows, etc.)."
    },
    {
      codigo: "16.c",
      numero: 16,
      servico: "Análise de Problemas Relacionados a Ambiente de Sistema Operacional",
      id: "c",
      complexidade: "Baixa",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Documentação dos procedimentos do serviço; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas\nComputacionais Sênior", complexidade: 2 }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, identificar e corrigir problemas relacionados a servidores SO (Linux, Unix, Windows, etc.)."
    },
    {
      codigo: "17.a",
      numero: 17,
      servico: "Análise  de Problemas Relacionados a Ambiente de Virtualização",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas\nComputacionais Pleno", complexidade: 1 }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, identificar e corrigir problemas relacionados ao ambiente de virtualização."
    },
    {
      codigo: "17.b",
      numero: 17,
      servico: "Análise  de Problemas Relacionados a Ambiente de Virtualização",
      id: "b",
      complexidade: "Media",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas\nComputacionais Pleno", complexidade: 1 }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, identificar e corrigir problemas relacionados ao ambiente de virtualização."
    },
    {
      codigo: "17.c",
      numero: 17,
      servico: "Análise  de Problemas Relacionados a Ambiente de Virtualização",
      id: "c",
      complexidade: "Alta",
      escopo: "Por hora de análise exploratória de problemas em sistemas existentes.",
      het: 1,
      entregaveis: "Problema identificado e corrigido; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas\nComputacionais Pleno", complexidade: 1 }
      ],
      grupo: "Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Monitorar, identificar e corrigir problemas relacionados ao ambiente de virtualização."
    },
    {
      codigo: "18.a",
      numero: 18,
      servico: "Configurar e Gerenciar a Infraestrutura de Segurança",
      id: "a",
      complexidade: "Única",
      escopo: "Por criação ou configuração de regra firewall, anti-vírus e balanceamento de aplicações.",
      het: "0,5",
      entregaveis: "Item de segurança configurado e/ou gerenciado; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar, gerenciar e monitorar o ambiente de Infraestrutura de Segurança garantindo a proteção das informações em seus atributos básicos (Confidencialidade, integridade, disponibilidade e autenticidade)."
    },
    {
      codigo: "18.b",
      numero: 18,
      servico: "Configurar e Gerenciar a Infraestrutura de Segurança",
      id: "b",
      complexidade: "Única",
      escopo: "Por processo de mapeamento das ameaças, mitigação dos riscos e execução das atividades corretivas, com foco na infraestrutura e objetivo principal de torná-la preparada para enfrentar tentativas de ataque; publicação de aplicação/serviço em solução de balanceamento de\naplicações.",
      het: 2,
      entregaveis: "Item de segurança configurado e/ou gerenciado; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar, gerenciar e monitorar o ambiente de Infraestrutura de Segurança garantindo a proteção das informações em seus atributos básicos (Confidencialidade, integridade, disponibilidade e autenticidade)."
    },
    {
      codigo: "18.c",
      numero: 18,
      servico: "Configurar e Gerenciar a Infraestrutura de Segurança",
      id: "c",
      complexidade: "Única",
      escopo: "Por análise de vulnerabilidades não publicadas e Resposta a incidentes; Por desenho de arquiteturas e soluções seguras, realização de testes de penetração e análises de risco;\netc.",
      het: 5,
      entregaveis: "Item de segurança configurado e/ou gerenciado; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar, gerenciar e monitorar o ambiente de Infraestrutura de Segurança garantindo a proteção das informações em seus atributos básicos (Confidencialidade, integridade, disponibilidade e autenticidade)."
    },
    {
      codigo: "18.d",
      numero: 18,
      servico: "Configurar e Gerenciar a Infraestrutura de Segurança",
      id: "d",
      complexidade: "Baixa",
      escopo: "Por componente instalado e configurado.",
      het: 2,
      entregaveis: "Item de segurança configurado e/ou gerenciado; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],

      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar, gerenciar e monitorar o ambiente de Infraestrutura de Segurança garantindo a proteção das informações em seus atributos básicos (Confidencialidade, integridade, disponibilidade e autenticidade)."
    },
    {
      codigo: "18.e",
      numero: 18,
      servico: "Configurar e Gerenciar a Infraestrutura de Segurança",
      id: "e",
      complexidade: "Média",
      escopo: "Por componente instalado e configurado.",
      het: 4,
      entregaveis: "Item de segurança configurado e/ou gerenciado; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar, gerenciar e monitorar o ambiente de Infraestrutura de Segurança garantindo a proteção das informações em seus atributos básicos (Confidencialidade, integridade, disponibilidade e autenticidade)."
    },
    {
      codigo: "18.f",
      numero: 18,
      servico: "Configurar e Gerenciar a Infraestrutura de Segurança",
      id: "f",
      complexidade: "Alta",
      escopo: "Por componente instalado e configurado.",
      het: 6,
      entregaveis: "Item de segurança configurado e/ou gerenciado; Documentação dos procedimentos da solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Configurar, gerenciar e monitorar o ambiente de Infraestrutura de Segurança garantindo a proteção das informações em seus atributos básicos (Confidencialidade, integridade, disponibilidade e autenticidade)."
    },
    {
      codigo: "19.a",
      numero: 19,
      servico: "Serviço de Apoio e Consultoria",
      id: "a",
      complexidade: "Média",
      escopo: "Por hora de consultoria.",
      het: 1,
      entregaveis: "Consultoria realizada; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Administração, monitoramento, configuração, atualização das ferramentas de monitoramento."
    },
    {
      codigo: "19.b",
      numero: 19,
      servico: "Serviço de Apoio e Consultoria",
      id: "b",
      complexidade: "Alta",
      escopo: "Por hora de consultoria.",
      het: 1,
      entregaveis: "Consultoria realizada; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Administração, monitoramento, configuração, atualização das ferramentas de monitoramento."
    },
    {
      codigo: "20.a",
      numero: 20,
      servico: "Análise de Problemas Relacionados a Infraestrutura de Segurança",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por análise onde o problema não afeta  o andamento normal da infraestrutura. (Baixo ou sem impacto)",
      het: 1,
      entregaveis: "Problema identificado e corrigido.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realização de análise onde problema não afeta o andamento normal da infraestrutura. (Baixo ou sem\nimpacto)"
    },
    {
      codigo: "20.b",
      numero: 20,
      servico: "Análise de Problemas Relacionados a Infraestrutura de Segurança",
      id: "b",
      complexidade: "Media",
      escopo: "Por análise onde o problema não afeta  o andamento normal da infraestrutura. (Baixo ou sem impacto)",
      het: 1,
      entregaveis: "Problema identificado e corrigido.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realização de análise onde problema afeta uma pequena parte da infraestrutura. (Médio impacto)"
    },
    {
      codigo: "20.c",
      numero: 20,
      servico: "Análise de Problemas Relacionados a Infraestrutura de Segurança",
      id: "c",
      complexidade: "Alta",
      escopo: "Por análise onde o problema não afeta  o andamento normal da infraestrutura. (Baixo ou sem impacto)",
      het: 1,
      entregaveis: "Problema identificado e corrigido.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização",
      atividade: "Realização de análise onde problema afeta toda a infraestrutura. (Alto impacto)"
    },
    {
      codigo: '21',
      numero: 21,
      servico: "Elaboração e Acompanhamento de Projetos de Infraestrutura e Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de elaboração/acompanhamento de projeto.",
      het: 1,
      entregaveis: "Relatórios de acompanhamento do projeto, bem como as alterações que se  fizerem necessárias no planejamento inicial.",
      perfisExigidos: [{ perfil: "Perfis Plenos", complexidade: 0 }],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Elaboração e acompanhamento de projetos de infraestrutura."
    },
    {
      codigo: '22',
      numero: 22,
      servico: "Levantar Requisitos de Soluções Analíticas",
      id: "-",
      complexidade: "Única",
      escopo: "Por funcionalidade / estória de usuário.",
      het: 14,
      entregaveis: "Ficha de conceituação de informações ou outra documentação requisito detalhado; Relatório das\natividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],

      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Preparar Material para Reunião e Participar de reuniões para auxiliar no levantamento do modelo necessário."
    },
    {
      codigo: '23',
      numero: 23,
      servico: "Análise Exploratória dos Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por análise de dados.",
      het: 24,
      entregaveis: "Documentação relativa aos dados / Variáveis disponíveis / Qualidade dos dados / Estratégias de tratamento/ Perfil dos dados; Relatório das\natividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Análise, testes estratégicos para definição de estratégia, geração de Perfil dos dados."
    },
    {
      codigo: '24',
      numero: 24,
      servico: "Modelagem / Desenvolvimento do Projeto de Machine Learning - Estão inclusas nessas atividades as subatividades: Engenharia de Recursos (Feature Engineering), Treinamento, Seleção do Modelo e\nAvaliação do Modelo",
      id: "-",
      complexidade: "Única",
      escopo: "Por modelagem até 10 (dez) variáveis.",
      het: 48,
      entregaveis: "Modelo Selecionado, treinado, assim como os retornos de erro e acertos; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Engenharia de Recursos (Feature Engineering), Treinamento,  Seleção do Modelo e Avaliação do Modelo."
    },
    {
      codigo: '25',
      numero: 25,
      servico: "Deploy do Modelo de Machine Learning",
      id: "-",
      complexidade: "Única",
      escopo: "Por disponibilização.",
      het: 4,
      entregaveis: "Disponibilização do Modelo para utilização direta ou integrada a outra solução; Relatório das\natividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Disponibilização do Modelo de Machine Learning a ser utilizado."
    },
    {
      codigo: "26.a",
      numero: 26,
      servico: "Implantar / Realizar Deploy de Solução Analítica",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por disponibilização.",
      het: 4,
      entregaveis: "Disponibilização da Solução para utilização direta ou integrada a outra solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Disponibilização da Solução para utilização."
    },
    {
      codigo: "26.b",
      numero: 26,
      servico: "Implantar / Realizar Deploy de Solução Analítica",
      id: "b",
      complexidade: "Média",
      escopo: "Por disponibilização.",
      het: 4,
      entregaveis: "Disponibilização da Solução para utilização direta ou integrada a outra solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Disponibilização da Solução para utilização."
    },
    {
      codigo: "26.c",
      numero: 26,
      servico: "Implantar / Realizar Deploy de Solução Analítica",
      id: "c",
      complexidade: "Alta",
      escopo: "Por disponibilização.",
      het: 4,
      entregaveis: "Disponibilização da Solução para utilização direta ou integrada a outra solução; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Disponibilização da Solução para utilização."
    },
    {
      codigo: '27',
      numero: 27,
      servico: "Desenvolver Visões em Solução Analítica - Dashboard, por Análise / Visão",
      id: "-",
      complexidade: "Única",
      escopo: "Por visão envolvendo até 10 (dez) entidades.",
      het: 6,
      entregaveis: "Disponibilização de Análise, em solução de visualização de dados, que permita analisar os dados processados e como será o comportamento desses dados na\nsolução; Relatório das\natividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Desenvolver, em solução Analítica, forma de visualização dos dados, mesmo que diferente da definitiva."
    },
    {
      codigo: "28.a",
      numero: 28,
      servico: "Testar / Avaliar Protótipos / Soluções Analíticas - Big Data, por Cenário",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por evento, até 10 (dez) entidades.",
      het: 6,
      entregaveis: "Relatório de testes e conformidade do comportamento dos dados; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Realizar testes com dados para validar o comportamento / processamento dos mesmos."
    },
    {
      codigo: "28.b",
      numero: 28,
      servico: "Testar / Avaliar Protótipos / Soluções Analíticas - Big Data, por Cenário",
      id: "b",
      complexidade: "Média",
      escopo: "Por evento, até 10 (dez) entidades.",
      het: 6,
      entregaveis: "Relatório de testes e conformidade do comportamento dos dados; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Realizar testes com dados para validar o comportamento / processamento dos mesmos."
    },
    {
      codigo: "28.c",
      numero: 28,
      servico: "Testar / Avaliar Protótipos / Soluções Analíticas - Big Data, por Cenário",
      id: "c",
      complexidade: "Alta",
      escopo: "Por evento, até 10 (dez) entidades.",
      het: 6,
      entregaveis: "Relatório de testes e conformidade do comportamento dos dados; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Realizar testes com dados para validar o comportamento / processamento dos mesmos."
    },
    {
      codigo: '29',
      numero: 29,
      servico: "Avaliar Qualidade de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por avaliação, até 10 (dez) entidade de dados.",
      het: 16,
      entregaveis: "Relatórios/Estatísticas Melhoria dos Dados Analisados; Modelagem e Scripts desenvolvidos (quando necessário) ; Relatório das atividades\nrealizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Sênior", complexidade: 4 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Analisar e avaliar os Dados propondo melhorias."
    },
    {
      codigo: '30',
      numero: 30,
      servico: "Implementação de Rotina ETL - Dados Gerais",
      id: "-",
      complexidade: "Única",
      escopo: "Por rotina, até 06 (seis) entidades fonte de dados.",
      het: 8,
      entregaveis: "Processo ETL criado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Análise e planejamento de rotina de ETL. Nesse caso deve ser avaliado o impacto no data lake ou DW."
    },
    {
      codigo: '31',
      numero: 31,
      servico: "Alteração de  Processos / Rotinas de ETL",
      id: "-",
      complexidade: "Única",
      escopo: "Por evento, até 06 (seis) entidades de dados.",
      het: 8,
      entregaveis: "Scripts/procedimentos de ETL alterados e documentação pertinente; Relatório das atividades\nrealizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Alteração e teste da rotina ou procedimento de ETL para adequação das regras de negócio e de apresentação necessárias."
    },
    {
      codigo: '32',
      numero: 32,
      servico: "Criar Modelos Físicos na Base de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por modelo, até 10 (dez) entidades.",
      het: 6,
      entregaveis: "Modelo dos Objetos de dados a serem criados na base de dados e documentação pertinente; Relatório das\natividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "A   partir dos modelos do AD gerar os modelos físicos no Banco de Dados dentro dos padrões definidos na Metodologia, sempre buscando as melhoras práticas e a melhor\nperformance."
    },
    {
      codigo: '33',
      numero: 33,
      servico: "Realizar Estudo e Prospecção de Novas Soluções",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora estudo.",
      het: 1,
      entregaveis: "Documentação dos testes realizados e apresentação de resultados; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],

      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte",
      atividade: "Testes diversos, de acordo com a demanda, e avaliação das funcionalidades."
    },
    {
      codigo: '34',
      numero: 34,
      servico: "Criação e Otimização Consultas - Necessidade Específica",
      id: "-",
      complexidade: "Única",
      escopo: "Por evento, até 10 (dez) entidades.",
      het: 4,
      entregaveis: "Script criado com Select / consulta\ndesejada; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Criar consulta."
    },
    {
      codigo: '35',
      numero: 35,
      servico: "Serviços de Central de\nAtendimento 1º Nível",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de atendimento.",
      het: 1,
      entregaveis: "Relatório das atividades\nrealizadas.",
      perfisExigidos: [{ perfil: "Operador de Atendimento de 1º Nível", complexidade: 1 }],
      grupo: "Suporte Técnico\nRemoto e Presencial",
      atividade: "Participar de reuniões para auxiliar."
    },
    {
      codigo: '36',
      numero: 36,
      servico: "Desenvolver Camada Semântica",
      id: "-",
      complexidade: "Única",
      escopo: "Por camada, a cada conjunto de 10 (dez) entidades.",
      het: 16,
      entregaveis: "Camada semântica e documentação pertinente; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Desenvolver e documentar camada semântica."
    },
    {
      codigo: "37.a",
      numero: 37,
      servico: "Implantar Serviço / Componente em Ambiente BI e Big Data",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por  serviço / componente.",
      het: 24,
      entregaveis: "Relatório de atividades; Serviços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e configurar softwares."
    },
    {
      codigo: "37.b",
      numero: 37,
      servico: "Implantar Serviço / Componente em Ambiente BI e Big Data",
      id: "b",
      complexidade: "Media",
      escopo: "Por  serviço / componente.",
      het: 24,
      entregaveis: "Relatório de atividades; Serviços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e configurar softwares."
    },
    {
      codigo: "37.c",
      numero: 37,
      servico: "Implantar Serviço / Componente em Ambiente BI e Big Data",
      id: "c",
      complexidade: "Alta",
      escopo: "Por  serviço / componente.",
      het: 24,
      entregaveis: "Relatório de atividades; Serviços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],

      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e configurar softwares."
    },
    {
      codigo: '38',
      numero: 38,
      servico: "Configurar e Gerenciar Arquitetura BI",
      id: "-",
      complexidade: "Única",
      escopo: "Por integração de soluções.",
      het: 16,
      entregaveis: "Relatório de atividades Serviços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Instalar e atualizar o ambiente de BI. Definir estrutura física, monitorar performance do ambiente, verificar logs de erros, etc."
    },
    {
      codigo: '39',
      numero: 39,
      servico: "Veificar diariamente o\nFuncionamento das Aplicações de BI",
      id: "-",
      complexidade: "Única",
      escopo: "Por atividade.",
      het: 1,
      entregaveis: "Relatório de atividades.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Dados",
      atividade: "Verificar e reparar os possíveis erros das soluções de BI."
    },
    {
      codigo: '40',
      numero: 40,
      servico: "Monitorar Camada de ETL e de Integração de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por atividade.",
      het: 1,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Monitorar camada de ETL e de integração em produção e, caso necessário, abrir incidente para solução de problemas encontrados."
    },
    {
      codigo: "41.a",
      numero: 41,
      servico: "Suporte Ecossistema BI",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por evento / manutenção.",
      het: 4,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Resolução de problemas encontrados, suporte aos usuários e desenvolvedores."
    },
    {
      codigo: "41.b",
      numero: 41,
      servico: "Suporte Ecossistema BI",
      id: "b",
      complexidade: "Média",
      escopo: "Por evento / manutenção.",
      het: 4,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Resolução de problemas encontrados, suporte aos usuários e desenvolvedores."
    },
    {
      codigo: "41.c",
      numero: 41,
      servico: "Suporte Ecossistema BI",
      id: "c",
      complexidade: "Alta",
      escopo: "Por evento / manutenção.",
      het: 4,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Resolução de problemas encontrados, suporte aos usuários e desenvolvedores."
    },
    {
      codigo: "42.a",
      numero: 42,
      servico: "Atualizar as Versões de Produtos que Compõem o Ambiente de BI",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por evento de configurações.",
      het: 8,
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente."
    },
    {
      codigo: "42.b",
      numero: 42,
      servico: "Atualizar as Versões de Produtos que Compõem o Ambiente de BI",
      id: "b",
      complexidade: "Média",
      escopo: "Por evento de configurações.",
      het: 8,
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente."
    },
    {
      codigo: "42.c",
      numero: 42,
      servico: "Atualizar as Versões de Produtos que Compõem o Ambiente de BI",
      id: "c",
      complexidade: "Alta",
      escopo: "Por evento de configurações.",
      het: 8,
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente."
    },
    {
      codigo: '43',
      numero: 43,
      servico: "Configurar/Gerenciar Segurança Ambiente BI",
      id: "-",
      complexidade: "Única",
      escopo: "Por ocorrências de  Inclusão de usuários em grupo de permissão ou\nconcessão de privilégios.",
      het: "0,5",
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e",
      atividade: "Criar grupos; usuários e conceder as devidas permissões  que garantam o acesso e  segurança do ambiente."
    },
    {
      codigo: '44',
      numero: 44,
      servico: "Criar e Manter Atualizado o Catálogo de Rotinas de Backup e Recuperação de Arquivos nas Ferramentas de\nBI e Big Data",
      id: "-",
      complexidade: "Única",
      escopo: "Por rotina.",
      het: "0,5",
      entregaveis: "Registro de execução dos backups de BD; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Sistemas Operacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Criar as rotinas que garantam o Backup de arquivos provenientes de ferramentas de BI e/ou afins; acompanhamento diário dos\nbackups."
    },
    {
      codigo: "45.a",
      numero: 45,
      servico: "Definir e manter as estruturas/objetos das Bases de Dados",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por evento ou manutenção das estruturas das bases de dados, até 10 (dez) objetos.",
      het: 2,
      entregaveis: "Objeto criado/alterado conforme documentação; Script criado e documentado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Criar/manter os objetos atendendo às necessidades das aplicações para o bom funcionamento, conforme sua respectiva documentação."
    },
    {
      codigo: "45.b",
      numero: 45,
      servico: "Definir e manter as estruturas/objetos das Bases de Dados",
      id: "b",
      complexidade: "Media",
      escopo: "Por evento ou manutenção das estruturas das bases de dados, até 10 (dez) objetos.",
      het: 2,
      entregaveis: "Objeto criado/alterado conforme documentação; Script criado e documentado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Criar/manter os objetos atendendo às necessidades das aplicações para o bom funcionamento, conforme sua respectiva documentação."
    },
    {
      codigo: "45.c",
      numero: 45,
      servico: "Definir e manter as estruturas/objetos das Bases de Dados",
      id: "c",
      complexidade: "Alta",
      escopo: "Por evento ou manutenção das estruturas das bases de dados, até 10 (dez) objetos.",
      het: 2,
      entregaveis: "Objeto criado/alterado conforme documentação; Script criado e documentado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Criar/manter os objetos atendendo às necessidades das aplicações para o bom funcionamento, conforme sua respectiva documentação."
    },
    {
      codigo: '46',
      numero: 46,
      servico: "Configurar e Gerenciar Arquitetura Big Data",
      id: "-",
      complexidade: "Única",
      escopo: "Por integração de soluções em instalação com distro; Avaliação e reconfiguração de uso de recursos para serviços\n(com ou sem distro).",
      het: 4,
      entregaveis: "Relatório das atividades realizadas;\nServiços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e atualizar o ambiente de Big Data. Definir estrutura física, monitorar performance do ambiente, verificar logs de erros, etc."
    },
    {
      codigo: '46',
      numero: 46,
      servico: "Configurar e Gerenciar Arquitetura Big Data",
      id: "-",
      complexidade: "Única",
      escopo: "Por resolução de problema de funcionamento e/ou performance em serviço especifico ou integração entre eles;\nAtualização de versão de ambiente Big Data (autônomo ou distro - single-node ou\ncluster).",
      het: 8,
      entregaveis: "Relatório das atividades realizadas;\nServiços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e atualizar o ambiente de Big Data. Definir estrutura física, monitorar performance do ambiente, verificar logs de erros, etc."
    },
    {
      codigo: '47',
      numero: 47,
      servico: "Configurar/Gerenciar Segurança ambiente Big Data",
      id: "-",
      complexidade: "Única",
      escopo: "Por ocorrência de  Inclusão de usuários em grupo de permissão e/ou concessão de privilégios.",
      het: "0,5",
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Criar grupos e usuários que garantam a segurança do ambiente Big Data."
    },
    {
      codigo: "48.a",
      numero: 48,
      servico: "Atualizar/Ajustar configuração de produtos que compõem o ambiente de Big Data",
      id: "a",
      complexidade: "Baixa",
      escopo: "A cada 02 (duas) alterações de configurações e/ou correções.",
      het: "0,5",
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualização  e Ajuste de parâmetros de configuração de produtos do ecossistemas de Big Data."
    },
    {
      codigo: "48.b",
      numero: 48,
      servico: "Atualizar/Ajustar configuração de produtos que compõem o ambiente de Big Data",
      id: "b",
      complexidade: "Media",
      escopo: "A cada 02 (duas) alterações de configurações e/ou correções.",
      het: "0,5",
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualização  e Ajuste de parâmetros de configuração de produtos do ecossistemas de Big Data."
    },
    {
      codigo: "48.c",
      numero: 48,
      servico: "Atualizar/Ajustar configuração de produtos que compõem o ambiente de Big Data",
      id: "c",
      complexidade: "Alta",
      escopo: "A cada 02 (duas) alterações de configurações e/ou correções.",
      het: "0,5",
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualização  e Ajuste de parâmetros de configuração de produtos do ecossistemas de Big Data."
    },
    {
      codigo: "49.a",
      numero: 49,
      servico: "Suporte Ecossistema Big Data",
      id: "a",
      complexidade: "Única",
      escopo: "A cada reativações fluxos de\ncarga e/ou Investigar inconformidade de dados.",
      het: "0,5",
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Resolução de problemas encontrados, suporte aos usuários (equipes de Análise de Dados, Arquitetura de Dados, Desenvolvimento)."
    },
    {
      codigo: "49.b",
      numero: 49,
      servico: "Suporte Ecossistema Big Data",
      id: "b",
      complexidade: "Única",
      escopo: "Por evento de manutenção na arquitetura de Dados/Desenvolvimento (inclusão/modificação de atributos, correção de fluxos de\ncarga).",
      het: 1,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Resolução de problemas encontrados, suporte aos usuários (equipes de Análise de Dados, Arquitetura de Dados, Desenvolvimento)."
    },
    {
      codigo: "50.a",
      numero: 50,
      servico: "Implantar serviço / componente em ambiente Big Data",
      id: "a",
      complexidade: "Única",
      escopo: "Por ativação de serviços single- node em distribuição e/ou Realização de deploy de rotina\nhomologada.",
      het: 2,
      entregaveis: "Relatório das atividades realizadas;\nServiços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e configurar softwares e rotinas de Big Data."
    },
    {
      codigo: "50.b",
      numero: 50,
      servico: "Implantar serviço / componente em ambiente Big Data",
      id: "b",
      complexidade: "Única",
      escopo: "A cada instalação de serviços multi-node (cluster) em\ndistribuição.",
      het: 3,
      entregaveis: "Relatório das atividades realizadas;\nServiços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e configurar softwares e rotinas de Big Data."
    },
    {
      codigo: "50.c",
      numero: 50,
      servico: "Implantar serviço / componente em ambiente Big Data",
      id: "c",
      complexidade: "Única",
      escopo: "A cada instalação e configuração de serviço multi- node (cluster) autônomo (sem distro) e com autenticação\nkerberos.",
      het: 6,
      entregaveis: "Relatório das atividades realizadas;\nServiços ativos e operacionais.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Instalar e configurar softwares e rotinas de Big Data."
    },
    {
      codigo: '51',
      numero: 51,
      servico: "Atuar na Resolução de Problemas Relacionados aos Modelos de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por evento, por modelo.",
      het: 2,
      entregaveis: "Ata de reunião com a equipe de Desenvolvimento.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Participar de reuniões para auxiliar no levantamento do modelo necessário."
    },
    {
      codigo: "52.a",
      numero: 52,
      servico: "Auxiliar na Construção do Modelo de Dados",
      id: "a",
      complexidade: "Baixa",
      escopo: "A cada reunião de no mínimo 30 (trinta) minutos.",
      het: "0,5",
      entregaveis: "Ata de reunião com a equipe de Desenvolvimento; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Participar de reuniões para auxiliar no levantamento do modelo necessário."
    },
    {
      codigo: "52.b",
      numero: 52,
      servico: "Auxiliar na Construção do Modelo de Dados",
      id: "b",
      complexidade: "Media",
      escopo: "A cada reunião de no mínimo 30 (trinta) minutos.",
      het: "0,5",
      entregaveis: "Ata de reunião com a equipe de Desenvolvimento; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Participar de reuniões para auxiliar no levantamento do modelo necessário."
    },
    {
      codigo: "52.c",
      numero: 52,
      servico: "Auxiliar na Construção do Modelo de Dados",
      id: "c",
      complexidade: "Alta",
      escopo: "A cada reunião de no mínimo 30 (trinta) minutos.",
      het: "0,5",
      entregaveis: "Ata de reunião com a equipe de Desenvolvimento; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Participar de reuniões para auxiliar no levantamento do modelo necessário."
    },
    {
      codigo: '53',
      numero: 53,
      servico: "Criar e Gerenciar Repositório de Modelos de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "A cada solicitação de criação de usuários;  concessão ou retirada de privilégios a usuários.",
      het: "0,5",
      entregaveis: "Software de administração de Modelo de Dados Funcional e relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Instalar, atualizar software de administração de Modelo de Dados, criar e gerenciar usuários do software."
    },
    {
      codigo: '54',
      numero: 54,
      servico: "Manter Política de Governança de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por documentação.",
      het: 4,
      entregaveis: "Documento sobre a política a ser adotada (parte integrante da Metodologia); Relatório\ndas atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Fazer reuniões, registrar atas e definir os padrões para a política de governança de dados em consenso com as equipes de Desenvolvimento\ne Administração de Banco de Dados."
    },
    {
      codigo: '55',
      numero: 55,
      servico: "Desenvolver Mapeamento Lógico de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por mapeamento, até 05 (cinco) novas entidades.",
      het: 2,
      entregaveis: "Processo atualizado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Discutir,  pesquisar sobre, escrever e atualiza processos de integração e qualidade de Dados."
    },
    {
      codigo: "56.a",
      numero: 56,
      servico: "Desenvolver Processos de Integração de Dados",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por processo, até 02 (duas) fontes de dados.",
      het: 4,
      entregaveis: "Processo atualizado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Discutir,  pesquisar sobre, escrever e atualiza processos de integração e qualidade de Dados."
    },
    {
      codigo: "56.b",
      numero: 56,
      servico: "Desenvolver Processos de Integração de Dados",
      id: "b",
      complexidade: "Média",
      escopo: "Por processo, até 02 (duas) fontes de dados.",
      het: 4,
      entregaveis: "Processo atualizado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Discutir,  pesquisar sobre, escrever e atualiza processos de integração e qualidade de Dados."
    },
    {
      codigo: "56.c",
      numero: 56,
      servico: "Desenvolver Processos de Integração de Dados",
      id: "c",
      complexidade: "Alta",
      escopo: "Por processo, até 02 (duas) fontes de dados.",
      het: 4,
      entregaveis: "Processo atualizado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Discutir,  pesquisar sobre, escrever e atualiza processos de integração e qualidade de Dados."
    },
    {
      codigo: '57',
      numero: 57,
      servico: "Desenvolver Processos que Buscam Garantir a Qualidade dos Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por processo, até 10 (dez) elementos de dados.",
      het: 4,
      entregaveis: "Processo atualizado; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Discutir,  pesquisar sobre, escrever e atualiza processos de integração e qualidade de Dados."
    },
    {
      codigo: '58',
      numero: 58,
      servico: "Gerenciar os Dados da Base Corporativa",
      id: "-",
      complexidade: "Única",
      escopo: "Por evento, com integração com até 05 (cinco) sistemas e em até 05 (cinco) atributos.",
      het: 2,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence",
      atividade: "Gerir os Modelos de Dados existentes."
    },
    {
      codigo: '59',
      numero: 59,
      servico: "Avaliar Modelo de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por avaliação, até 10 (dez) novas entidades.",
      het: 3,
      entregaveis: "Modelos de Dados revisados, documentação pertinente e relatório da avaliação, validando os padrões; Relatório das\natividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Avaliar Modelos de Dados feitos pelo Desenvolvimento. Checar padrões."
    },
    {
      codigo: '60',
      numero: 60,
      servico: "Criar Modelo de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por criação, até 10 (dez) novas entidades.",
      het: 4,
      entregaveis: "Modelos de Dados , documentação pertinente e relatório da avaliação, validando os padrões (nomenclatura, por\nexemplo).",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Criar e documentar Modelo de Dados observando os padrões adotados."
    },
    {
      codigo: '61',
      numero: 61,
      servico: "Documentar Padrões e Metodologia para Modelos de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por documentação.",
      het: 2,
      entregaveis: "Documento de padrões e metodologia para criação de Modelos de Dados atualizada; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Fazer reuniões, registrar atas e definir os padrões para a criação de Modelo de Dados em consenso com as equipes de  desenvolvimento, Administração de  Banco de Dados e\nSuporte Técnico."
    },
    {
      codigo: '62',
      numero: 62,
      servico: "Administrar Contas de Usuários e Senhas juntamente com as Políticas de Segurança e Acesso às Bases de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "A cada solicitação de atividades.",
      het: "0,5",
      entregaveis: "Usuários Cadastrados/Alterados; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Manter a estrutura de segurança com a criação de grupos e usuários para acesso aos Bancos de Dados com as atividades: reiniciar ou desbloquear contas de usuários;  criar/definir senhas de contas de usuários; conceder privilégios  a contas de usuários  nos diversos ambientes de\nbancos de dados."
    },
    {
      codigo: "63.a",
      numero: 63,
      servico: "Administrar Crescimento e Consumo de Recursos das Bases de Dados",
      id: "a",
      complexidade: "Única",
      escopo: "Por evento de monitoramento do crescimento físico e lógico dos objetos dos diversos bancos de dados.",
      het: 1,
      entregaveis: "Verificar periodicamente o volume utilizado pelo Banco de Dados, bem como o alocado, evitando- se de maneira preventiva problemas desta natureza; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Verificar periodicamente o volume utilizado pelo Banco de Dados, bem como o alocado, evitando-se de maneira preventiva problemas desta natureza."
    },
    {
      codigo: "63.b",
      numero: 63,
      servico: "Administrar Crescimento e Consumo de Recursos das Bases de Dados",
      id: "b",
      complexidade: "Única",
      escopo: "Por evento de redimensionamento das áreas físicas e lógicas das bases de dados, por sistema.",
      het: 4,
      entregaveis: "Verificar periodicamente o volume utilizado pelo Banco de Dados, bem como o alocado, evitando- se de maneira preventiva problemas desta natureza; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Verificar periodicamente o volume utilizado pelo Banco de Dados, bem como o alocado, evitando-se de maneira preventiva problemas desta natureza."
    },
    {
      codigo: "64.a",
      numero: 64,
      servico: "Administrar e Monitorar as Bases de Dados",
      id: "a",
      complexidade: "Única",
      escopo: "Por evento de administração diária de rotina, visualização e execução de relatórios para verificar disponibilidade.",
      het: 1,
      entregaveis: "Ambiente ativo e operacional; Relatório de verificação; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Verificar e adequar a estrutura do Banco de Dados evitando preventivamente problemas; Análise de Performance (analise de SQL, degradação em resposta, tuning diversos etc.)."
    },
    {
      codigo: "64.b",
      numero: 64,
      servico: "Administrar e Monitorar as Bases de Dados",
      id: "b",
      complexidade: "Única",
      escopo: "Por evento de indisponibilidade da aplicação com problema de acesso ou objetos da base de dados do ambiente de banco de\ndados.",
      het: 3,
      entregaveis: "Ambiente ativo e operacional; Relatório de verificação; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Verificar e adequar a estrutura do Banco de Dados evitando preventivamente problemas; Análise de Performance (analise de SQL, degradação em resposta, tuning diversos etc.)."
    },
    {
      codigo: "64.c",
      numero: 64,
      servico: "Administrar e Monitorar as Bases de Dados",
      id: "c",
      complexidade: "Única",
      escopo: "Por evento de indisponibilidade do ambiente de banco de dados (hardware).",
      het: 4,
      entregaveis: "Ambiente ativo e operacional; Relatório de verificação; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Verificar e adequar a estrutura do Banco de Dados evitando preventivamente problemas; Análise de Performance (analise de SQL, degradação em resposta, tuning diversos etc.)."
    },
    {
      codigo: "65.a",
      numero: 65,
      servico: "Alterar e Monitorar Scripts que Auxiliam na Administração das Bases de Dados",
      id: "a",
      complexidade: "Única",
      escopo: "Por processo alterado ou criado.",
      het: "0,5",
      entregaveis: "Scripts documentados; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Criar, alterar e monitorar Scripts que auxiliam a administração dos Bancos de Dados."
    },
    {
      codigo: '66',
      numero: 66,
      servico: "Definir e Manter Planos de Contingenciamento a Falhas",
      id: "-",
      complexidade: "Única",
      escopo: "Por documentação.",
      het: 2,
      entregaveis: "Documento de contingencia com definição das ações, processo de comunicação e os papéis de cada área ; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Discutir, pesquisar sobre, escrever e atualizar planos de contingenciamento a falhas."
    },
    {
      codigo: "67.a",
      numero: 67,
      servico: "Monitorar e Manter Objetos dos Sistemas Criados nas Bases de Dados",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por base de dados.",
      het: 1,
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualizar e corrigir falhas de objetos no ambiente aplicando as configurações e correções necessárias."
    },
    {
      codigo: "67.b",
      numero: 67,
      servico: "Monitorar e Manter Objetos dos Sistemas Criados nas Bases de Dados",
      id: "b",
      complexidade: "Media",
      escopo: "Por base de dados.",
      het: 1,
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualizar e corrigir falhas de objetos no ambiente aplicando as configurações e correções necessárias."
    },
    {
      codigo: "67.c",
      numero: 67,
      servico: "Monitorar e Manter Objetos dos Sistemas Criados nas Bases de Dados",
      id: "c",
      complexidade: "Alta",
      escopo: "Por base de dados.",
      het: 1,
      entregaveis: "Relatório das atualizações realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualizar e corrigir falhas de objetos no ambiente aplicando as configurações e correções necessárias."
    },
    {
      codigo: '68',
      numero: 68,
      servico: "Manter Documentação da Politica de Segurança dos Acessos às Bases de Dados e suas Respectivas Políticas de Segurança Lógica Atualizadas",
      id: "-",
      complexidade: "Única",
      escopo: "Por documentação.",
      het: 2,
      entregaveis: "Documentação da Políticas de segurança lógica e física atualizada",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Manter segurança de acesso aos Bancos de Dados; manter documentação política de segurança nas Bases de Dados;  criar , manter e monitoramento do plano de\nsegurança."
    },
    {
      codigo: '69',
      numero: 69,
      servico: "Monitorar e Prever Recursos de Hardware (capacity planning) para os Ambientes de Bases de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por ambiente.",
      het: 2,
      entregaveis: "Relatório de Necessidades de Recursos; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Monitorar e analisar como os recursos  disponíveis estão sendo alocados, a capacidade disponível e desempenho  e sugerir recursos para os ambientes de bases de dados existentes e futuros a serem\nimplementados."
    },
    {
      codigo: "70.a",
      numero: 70,
      servico: "Atualizar as Versões de Produtos que Compõem o Ambiente de Banco de Dados e/ou das Bases de Dados",
      id: "a",
      complexidade: "Baixa",
      escopo: "Por ambiente.",
      het: 24,
      entregaveis: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente; Relatório das atividades\nrealizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente."
    },
    {
      codigo: "70.b",
      numero: 70,
      servico: "Atualizar as Versões de Produtos que Compõem o Ambiente de Banco de Dados e/ou das Bases de Dados",
      id: "b",
      complexidade: "Média",
      escopo: "Por ambiente.",
      het: 24,
      entregaveis: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente; Relatório das atividades\nrealizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente."
    },
    {
      codigo: "70.c",
      numero: 70,
      servico: "Atualizar as Versões de Produtos que Compõem o Ambiente de Banco de Dados e/ou das Bases de Dados",
      id: "c",
      complexidade: "Alta",
      escopo: "Por ambiente.",
      het: 24,
      entregaveis: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente; Relatório das atividades\nrealizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 }
      ],
      grupo: "Sustentação e Suporte para os ambientes de base de dados e Business Intelligence (BI)",
      atividade: "Atualizar o ambiente aplicando as configurações necessárias e colocar o ambiente em produção novamente."
    },
    {
      codigo: '71',
      numero: 71,
      servico: "Treinamentos / Workshops\n/ Apresentações Técnicas / Repasse de Conhecimento",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de treinamento, apresentação ou repasse tecnológico.",
      het: 1,
      entregaveis: "Slides e manuais (se aplicáveis).",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Apresentações, treinamentos e workshops voltados para disseminar\n/ repassar conhecimentos técnicos de ferramentas utilizadas, novas tecnologias, padrões e metodologias empregadas."
    },
    {
      codigo: '72',
      numero: 72,
      servico: "Mapeamento de Processos",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de análise.",
      het: 1,
      entregaveis: "Processo mapeado e documentado.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Reuniões com as equipes, análise e modelagem dos processos."
    },
    {
      codigo: '73',
      numero: 73,
      servico: "Acompanhar Instalação e Manutenção de Serviços de Telecomunicações e Equipamentos de\nInfraestrutura",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de acompanhamento.",
      het: 1,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Instalação e/ou configuração dos circuitos de dados/links."
    },
    {
      codigo: '74',
      numero: 74,
      servico: "Gerenciar, Monitorar Sistemas Analógicos / Digitais, Sistema de Tarifação, Configuração ou Alteração de Funcionalidades de Ramais Analógicos Digitais, Relatórios Estatísticos, Gráficos e Backups",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de execução de serviços.",
      het: 1,
      entregaveis: "Relatórios de monitoramento, gerenciamento e ações executadas.",
      perfisExigidos: [
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 }
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores",
      atividade: "Monitorar, verificar e corrigir intercorrências, configurações relacionadas à sistemas de telefonia (analógicos e digitais) e atividades relacionadas à área de telecomunicações voz.\nConfigurações e exclusão de ramais, funcionalidades, regras e categorias de ramal (analógico e digital).\nMonitoramento, configurações, atualizações e correções de falhas relacionadas à sistema de tarifação, cadastro, alteração de dados de usuários/centro de custos, elaboração de relatórios gerenciais, gráficos estatísticos e realização de backups de banco de dados do sistema de tarifação. Demais configurações ao sistema centrais PABX. Apoiar atividade técnicas e de planejamento de telefonia entre as áreas de TIC da\ncontratante."
    },
    {
      codigo: '75',
      numero: 75,
      servico: "Manutenção em Equipamentos de Informática",
      id: "-",
      complexidade: "Única",
      escopo: "Por equipamento.",
      het: 4,
      entregaveis: "Solicitação de serviço solucionada; Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Técnico de Suporte", complexidade: 2 }
      ],
      grupo: "Suporte Técnico Remoto e Presencial",
      atividade: "Solucionar problemas de: Perda de relação de confiança, Instalação de programas, troca de bateria da BIOS, manutenção no patch line, substituição de periféricos e estabilizadores e no-breaks , configuração de periféricos, desbloqueio de senha local, remanejamento de conjunto de equipamentos (monitor, computador, teclado, mouse e estabilizador), executar imagem em computadores de ponto eletrônico, backup, limpeza física. Os serviços poderão ser realizados via acesso remoto quando\nhouver a possibilidade."
    },
    {
      codigo: '76',
      numero: 76,
      servico: "Controle Processamento de Arquivos, Planejamento de Planos de Execução, Execução e Acompanhamento de Jobs e Scripts",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora de execução de serviços.",
      het: 1,
      entregaveis: "Relatório de arquivos processados. Plano de execução, Relatório de jobs ou rotinas executadas.",
      perfisExigidos: [
        { perfil: "Não Aplicável", complexidade: 0 }
      ],
      grupo: "Não Aplicável",
      atividade: "Montagem do plano de execução diário das rotinas levando em consideração ordem de execução, recursos computacionais a serem executado dentre outros referentes ao ambiente Mainframe. Execução  e acompanhamento do processamento de Jobs e rotinas solicitadas pelos analistas responsável, em ambiente\nMainframe."
    },
    {
      codigo: '77',
      numero: 77,
      servico: "Monitoramento de Serviços Infraestrutura",
      id: "-",
      complexidade: "Única",
      escopo: "Por hora monitoramento.",
      het: 1,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Operador de Atendimento de 1º Nível", complexidade: 1 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Suporte Técnico Remoto e\nPresencial, Sustentação e Suporte à Rede de\nComputadores",
      atividade: "Monitorar os serviços de TIC e Infraestrutura."
    },
    {
      codigo: '78',
      numero: 78,
      servico: "Health Checking do Ambiente de Redes, Storage, Backup, Segurança, Sistemas Operacionais, Middleware, Virtualização e Banco de Dados",
      id: "-",
      complexidade: "Única",
      escopo: "Por ambiente.",
      het: 2,
      entregaveis: "Relatório das atividades realizadas.",
      perfisExigidos: [
        { perfil: "Administrador de Dados Pleno", complexidade: 3.7 },
        { perfil: "Analista de BI Pleno", complexidade: 3.1 },
        { perfil: "Administrador de Sistemas Computacionais Pleno", complexidade: 3.3 },
        { perfil: "Analista Infraestrutura de Rede Pleno", complexidade: 3.5 },
      ],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Monitoramento do ambiente, emissão de relatórios."
    },
    {
      codigo: '79',
      numero: 79,
      servico: "Instalação,  remanejamento,\nretirada de ponto lógico",
      id: "-",
      complexidade: "Única",
      escopo: "Por ponto lógico",
      het: 1,
      entregaveis: "Ponto lógico instalado,\nremanejado ou retirado",
      perfisExigidos: [
        { perfil: "Técnico de Suporte", complexidade: 2 }],

      grupo: "Suporte Técnico\nRemoto e Presencial",
      atividade: "Instalação e Remanejamento de\nponto lógico, desde sua crimpagem no patch panel, lançamento de cabeamento estruturado, e crimpagem na tomada lógica, com a devida identificação. Retirada de ponto lógico. Remanejamento de\nPatch Cord no Rack."
    },
    {
      codigo: '80',
      numero: 80,
      servico: "Montagem e Instalação de equipamento em Rack de Telecomunicações",
      id: "-",
      complexidade: "Única",
      escopo: "Por Equipamento",
      het: 1,
      entregaveis: "Roteador, Switch, organizador de cabo, patch panel, régua elétrica e\nbandeja instalados",
      perfisExigidos: [
        { perfil: "Técnico de Suporte", complexidade: 2 }],
      grupo: "Suporte Técnico Remoto e Presencial",
      atividade: "Instalação de ativos de rede e passivos de rede no rack, com fixação e identificação."
    },
    {
      codigo: '81',
      numero: 81,
      servico: "Manutenção em quipamentos de Telefonia Fixa e Móvel",
      id: "-",
      complexidade: "Única",
      escopo: "Solicitação de serviço Por Equipamento                   1        solucionada; Relatório das\natividades realizadas",
      het: 1,
      entregaveis: "Roteador, Switch, organizador de cabo, patch panel, régua elétrica e\nbandeja instalados",
      perfisExigidos: [
        { perfil: "Técnico de Suporte", complexidade: 2 }],
      grupo: "Suporte Técnico Remoto e Presencial",
      atividade: "Instalação e Substituição de telefones fixos, manutenção e\nconfiguração de Telefones Móveis."
    },
    {
      codigo: '82',
      numero: 82,
      servico: "Instalação e montagem de Bloco e Telefonia no Distribuidor Geral",
      id: "-",
      complexidade: "Única",
      escopo: "Por par metálico",
      het: 1,
      entregaveis: "Bloco de Ligação Interna Instalado",
      perfisExigidos: [
        { perfil: "Técnico de Suporte", complexidade: 2 }],
      grupo: "Suporte Técnico Remoto e Presencial",
      atividade: "Passagem de cabeamento metálico do Patch Voice até o Bloco de Ligação Interno, com a interconexão com o Bloco de Ligação Externo da Operadora, com a devida\nidentificação."
    },
    {
      codigo: '83',
      numero: 83,
      servico: "Participação em Reuniões",
      id: "-",
      complexidade: "Única",
      escopo: "Por Reunião",
      het: 1,
      entregaveis: "Atas de Reunião",
      perfisExigidos: [{ perfil: "Perfis Juniores, Plenos e Seniores.", complexidade: 0 }],
      grupo: "Sustentação e Suporte à Rede de Computadores / Sustentação e Suporte à Ambientes de Sistemas Operacionais e Virtualização / Sustentação e Suporte para os ambientes de base de dados e Business Intelligence\n(BI)",
      atividade: "Participação em Reuniões não contempladas na execução das atividades previstas neste Catálogo."
    }
  ]
}
