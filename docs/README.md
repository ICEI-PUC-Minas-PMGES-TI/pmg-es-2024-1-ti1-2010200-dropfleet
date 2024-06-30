# Documentação do Projeto Dropfleet

Esta pasta contém a documentação detalhada do projeto Dropfleet, desenvolvido como parte da disciplina de Trabalho Interdisciplinar 1 dos cursos de Tecnologia da Informação da PUC Minas. O projeto visa simplificar o rastreamento de pedidos no e-commerce, especialmente para aqueles envolvidos em dropshipping.

A documentação do projeto inclui as seguintes seções:

1. Introdução
2. Contexto
3. Concepção
4. Metodologia
5. Solução
6. FAQ (Questões frequentes)
7. Referências Bibliográficas

O template para o site é estruturado e permite que a equipe evolua a documentação do projeto à medida que avance no desenvolvimento.

# Orientações gerais

Esta seção traz explicações breves sobre o conjunto de artefatos que precisam ser incluídos na documentação do projeto com uma conjunto de links importantes para que se entenda como criar cada coisa. 

## Problema

O problema central que o projeto Dropfleet visa resolver é a dificuldade no rastreamento de pedidos no comércio eletrônico, especialmente para os praticantes de dropshipping. A falta de ferramentas eficazes para acompanhar o status dos pedidos pode comprometer a experiência do cliente e a eficiência operacional das lojas virtuais. O contexto inclui um aumento significativo no volume de compras online, destacando a necessidade de uma solução que integre serviços de rastreamento de maneira intuitiva e eficiente.

**Links Úteis**:

- [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
- [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
- [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

Objetivos
Objetivo Geral: Desenvolver um software que simplifique o rastreamento de pedidos no comércio eletrônico, melhorando a eficiência operacional e a experiência do cliente.

Objetivos Específicos:

- Integrar-se facilmente com plataformas de e-commerce existentes.
- Oferecer uma interface intuitiva para acompanhar o status dos pedidos em tempo real.

**Links Úteis**:

- [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

A importância de desenvolver a solução proposta pelo projeto Dropfleet reside na necessidade de melhorar a gestão logística e reduzir custos operacionais para os proprietários de e-commerce. A solução visa otimizar processos, garantir transparência no rastreamento de pedidos e aumentar a satisfação do cliente.

**Links Úteis**:

- [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

O público-alvo do projeto Dropfleet são os proprietários de lojas virtuais que praticam dropshipping e precisam de uma solução eficiente para gerenciar e monitorar seus pedidos. Os usuários têm conhecimentos variados em tecnologia e esperam uma solução que seja fácil de integrar e usar em suas operações diárias.

**Links Úteis**:

- [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
- [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)

## Personas

![image](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/c960e6bf-0bd1-40cf-8892-dd1e911bc407)


**Links Úteis**:

- [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
- [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
- [Rock Content](https://rockcontent.com/blog/personas/)
- [Criar personas (Hotmart)](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)

## Histórias de Usuários

**História de Usuário 1**: Visualização de Status de Pedidos
Eu, como João, empreendedor de e-commerce,
desejo visualizar o status atualizado de todos os pedidos em tempo real,
para que eu possa acompanhar de forma eficiente o andamento dos processos logísticos e tomar ações rápidas quando necessário.

**Critérios de Aceitação**:
- Deve ser possível visualizar o status de cada pedido individualmente.
- Os status devem ser atualizados automaticamente conforme as mudanças no sistema.
- Deve haver filtros para facilitar a busca de pedidos específicos por status, data, ou cliente

**História de Usuário 2**: Integração com Plataformas de E-commerce
Eu, como Maria, startuper de tecnologia,
desejo uma integração simplificada entre nossa solução e diferentes plataformas de e-commerce (Shopify, WooCommerce, etc.),
para que eu possa oferecer aos nossos clientes uma solução que seja fácil de implementar e compatível com suas plataformas existentes.

**Critérios de Aceitação**:
- Deve ser possível configurar a integração com diferentes plataformas de e-commerce através de APIs ou plugins.
- A integração deve suportar a sincronização bidirecional de dados para garantir precisão nas informações.
- Deve ser fácil para os clientes configurarem e gerenciarem a integração sem necessidade de conhecimento técnico avançado.

**História de Usuário 3**: Automação de Processos de Rastreamento
Eu, como João, empreendedor de e-commerce,
desejo automatizar o rastreamento de pedidos desde a compra até a entrega final ao cliente,
para que eu possa reduzir erros manuais, melhorar a precisão das informações de logística e proporcionar uma melhor experiência ao cliente.

**Critérios de Aceitação**
- A solução deve monitorar automaticamente o status de cada pedido em todas as etapas do processo logístico.
- Deve ser possível configurar notificações automáticas para clientes sobre o status de seus pedidos.
- Deve haver um painel de controle intuitivo para que eu possa verificar o progresso de cada pedido de forma clara e rápida.

**Links Úteis**:

- [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
- [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos
![Screenshot 2024-06-30 203029](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/cadfe9ce-ef96-4afa-ab01-931437683c99)
![Screenshot 2024-06-30 203037](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/fd746d2b-b45e-4381-ae91-4fbb4056fc94)



- [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
  correspondem a uma funcionalidade que deve estar presente na plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança ou outro (ex: suporte a dispositivos iOS e Android).

Lembre-se que cada requisito deve corresponder à uma e somente uma característica alvo da sua solução. Além disso, certifique-se de que todos os aspectos capturados nas Histórias de Usuário foram cobertos.

**Links Úteis**:

- [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
- [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## User Flow

O fluxo de usuário (User Flow) no projeto Dropfleet é crucial para mapear as interações dos usuários com a plataforma, desde o momento em que acessam o sistema até o acompanhamento completo do status dos pedidos. O objetivo é garantir uma experiência intuitiva e eficiente, alinhando as expectativas dos usuários com as funcionalidades oferecidas.

**Links Úteis**:

- [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
- [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
- [Top 25 User Flow Tools &amp; Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)

## Wireframes

![index](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/f7577d12-2f10-4a7f-9ccc-7e1213750f8e)
![Screenshot 2024-06-30 195009](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/af48292f-bf78-487c-9f01-beb4b0172029)
![Screenshot 2024-06-30 195015](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/60428a34-6233-46ca-83f8-00a9f317199f)
![Screenshot 2024-06-30 195022](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/b7fc86b2-b2e9-4b3b-990c-9f42be8e3f72)
![parte dos meus rastreios](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/a7154acb-ff5e-42f5-9df7-4b46867351ce)
![Screenshot 2024-06-30 195028](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/b6a7de0d-dd4a-4233-aaf4-5f401acb7e64)
![faq](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/19217c9a-897d-4b25-ae43-37e9526eb21b)
![entrnado](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/b906477f-a1ad-4fb8-859e-b07a74c47c99)
![entrnado](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/8e067b32-ae8e-4a00-8358-e56602a39aa7)
![parte dos meus rastreios](https://github.com/ICEI-PUC-Minas-PMGES-TI/pmg-es-2024-1-ti1-2010200-dropfleet/assets/164039275/2e72adab-2087-4686-bc32-176485cc92b6)






**Links Úteis**:

- [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
- [Figma](https://www.figma.com/)
- [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
- [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)

## Gestão de Projetos

A gestão de projetos no projeto Dropfleet é baseada em metodologias ágeis, especificamente o Scrum, para garantir um desenvolvimento iterativo e colaborativo. A utilização de ferramentas como o GitHub para gestão de código fonte e issues é fundamental para acompanhar o progresso e coordenar as tarefas entre os membros da equipe.

**Links Úteis**:

- [Sobre Projects - GitHub Docs](https://docs.github.com/pt/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects)
- [Gestão de projetos com GitHub | balta.io](https://balta.io/blog/gestao-de-projetos-com-github)
- [(460) GitHub Projects - YouTube](https://www.youtube.com/playlist?list=PLiO7XHcmTsldZR93nkTFmmWbCEVF_8F5H)
- [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
- [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)
