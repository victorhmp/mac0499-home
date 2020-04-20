---
title: Proposta de Trabalho
date: '2020-04-20'
description: 'Descrição do que se pretende fazer no trabalho.'
---

## Introdução

---

### Documentação de _software_

O tema central do trabalho que será desenvolvido ao longo do ano é a documentação de _software_. Algo presente em todos os sistemas de _software_, em formas variadas, desde especificações de requisitos de um sistema, documentações utilizadas para justificar e detalhar a arquitetura de sistemas de _software_, que são os tipos de documentação mais "distantes" do código-fonte de um dado sistema, até documentações de uso de APIs e comentários em código, o mais próximo possível do código-fonte.

Apesar da grande importância de uma documentação para a utilização e manutênção de um sistema de _software_, estudos comprovam que, de maneira geral, engenheiros de _software_ não costumam atualizar documentações tão frequentemente, ou mesmo suficientemente, quanto mudanças no código são feitas, e existe uma percepção na comunidade de que o trabalho em melhoras de documentação são custosas e não trazem tanto benefício quanto a implementação de novas funcionalidades ou resolução de _bugs,_ por isso não são feitas com tanta frequência, e até vistas como "perda de tempo" por alguns desenvolvedores [1].

Em estudos realizados para compreender o motivo dessa visão, foram levantadas diferenças significativas quanto a percepção e a disposição de manutênção por parte de engenheiros de _software_ de acordo com o nível de abstração e de detalhe das diversas documentações que um dado sistema possui. Esse será o primeiro ponto de interesse deste trabalho. Vamos estudar qual a relevância da documentação de _software_ - no seu sentido mais amplo, em _softwares_ de diversas naturezas - para a sua utilização, de acordo com estudos já realizados.

### Importância da documentação em _software open-source_

Neste trabalho vamos focar especialmente na documentação de _software open-source,_ ou seja, _softwares_ de código-aberto em que, em geral, têm sua manutenção realizada não apenas por um time responsável, mas por uma comunidade de desenvolvedores.

Projetos de _software open-source_ possuem diferenças fundamentais a _softwares_ de código-fechado (_closed-source_) quando ao seu processo de manutenção, controle de qualidade e sua documentação [2]. Uma delas é a falta de processos bem estabelecidos quanto a documentação, sendo esta abordada de diversas maneiras de acordo com as particularidades de cada projeto.

Uma pesquisa realizada por mim sobre as diferentes abordagens por diversos projetos _open-source_ está disponível em [Pesquisa preliminar](https://linux.ime.usp.br/~victorhmp/mac0499-preliminar.pdf).

Uma necessidade particular desse tipo de projeto é a da criação de uma comunidade saudável e acessível para contribuidores, e é nessa parte que esperamos observar um papel central de uma boa documentação, com base nos resultados aprensentados em [3].

### Cultura de documentação

Outro tópico que vamos abordar durante esse trabalho é a importância e o processo de criação de uma "cultura de documentação", ou seja, uma cultura que incentive e valorize a criação e manutenção de documentação de _software_ por parte do time _core_ [2] de um projeto _open-source_ e sua comunidade.

Esse tópico será de extrema importância quando formos avaliar a evolução do _software_ que utilizaremos como caso de estudo na parte final do trabalho.

### VTEX IO

O VTEX IO é uma plataforma de desenvolvimento low-code e cloud-native que busca permitir que desenvolvedores entreguem soluções de negócio de maneira mais rápida e eficiente, sem se preocupar com infraestrutura ou processos de build de suas aplicações. Ela é utilizada para desenvolvimento de projetos de _front-end_ modernos, aplicações que extendem o ambiente de _admin_ da VTEX para auxiliar lojistas a melhorarem sua performance de venda, até aplicações _back-end_ com uso de [_Node.js_](https://nodejs.org/) e [_GraphQL_](https://graphql.org/). O desenvolvimento de todas as aplicações é fortemente opinionado por _frameworks_ que garantem um desenvolvimento rápido e seguro.

Durante os últimos 14 meses, tenho trabalhado diratamente com o VTEX IO, sendo que durante os últimos 7 desses meses, tenho trabalhado no time que desenvolve o VTEX IO, mais especificamente o time que desenvolve o _framework_ de criação de lojas, chamado _Store Framework_, composto por diversas aplicações _open-source_. Durante esse tempo, tive um papel muito ativo na criação de uma cultura de documentação entre todos os desenvolvedores da plataforma, com a ajuda de _designers, technical writters_ e _project managers_. Um dos passos mais importantes na criação de tal cultura foi a criação de um **sistema de documentação**, dentro do próprio VTEX IO para conseguir centralizar uma documentação até então escassa e despersa. Todo o desenvolvimento e arquitetura desse sistema foi feito por mim com a ajuda de engenheiros da VTEX, e agora a documentação do VTEX IO pode ser encontrada em [VTEX IO Docs](https://vtex.io/docs). Mais detalhes desse sistema pode ser encontrado na pesquisa preliminar citada na sessão anterior, disponível em [Pesquisa preliminar](https://linux.ime.usp.br/~victorhmp/mac0499-preliminar.pdf), e serão descritos em detalhe na monografia.

Vamos utilizar o VTEX IO como um caso de estudo, e pretendemos avaliar o efeito que a criação de uma cultura de desenvolvimento, principalmente entre o time _core_ de desenvolvimento de um projeto _open-source,_ tem impactado o sucesso do projeto e o engajamento da comunidade.

## Objetivos

---

Os principais objetivos que estamos buscanco atingir são os seguintes:

- Investigar qual a relevância empregada a documentação por engenheiros de _software_, e como sua ela é utilizada;
- Qual seu papel no sucesso de um projeto _open-source_;
- Nos basear no caso de estudo do VTEX IO para avaliar o efeito que a criação de uma cultura, principalmente entre o time _core_ de desenvolvimento de um projeto _open-source_, que incentive a criação e manutenção dessa documentação impacta o sucesso de tal projeto.

## Cronograma aproximado de atividades

---

As atividades que esperamos realizar durante o trabalho, visando a obtenção dos objetivos definidos acima são as seguintes, junto com estimativas dos meses de trabalho em cada uma delas:

1. [*março - maio*] Estudo de soluções existentes de documentação;
2. [*março - maio*] Estudo de artigos sobre como a documentação de _software_ é vista e utilizada por engenheiros de _software_ e desenvolvedores em geral;
3. [*abril - junho*] Estudo sobre como a documentação de projetos _open-source_ de sucesso são mantidas, como evoluem, o quão suficiente elas são, e qual a sua importância no sucesso desses projetos, principalmente no crescimento de suas comunidades;
4. [*julho - agosto*] Iniciar estudo de caso com a coleta de estatísticas sobre o uso da documentação do VTEX IO;
5. [*agosto - setembro*] Buscar entender a evolução da documentação do VTEX IO e o impacto que a criação do sistema de documentação e consequente implantação da nova cultura de desenvolvimento tiveram no crescimento e engajamento da sua comunidade;
6. [*maio - novembro*] Escrever monografia;
7. [*novembro*] Elaborar pôster para apresentação do trabalho final.

## Referências

---

[1] T. C. Lethbridge, J. Singer and A. Forward, "How software engineers use documentation: the state of the practice," in IEEE Software, vol. 20, no. 6, pp. 35-39, Nov.-Dec. 2003.

[2] M. Aberdour, "Achieving Quality in Open-Source Software," in IEEE Software, vol. 24, no. 1, pp. 58-64, Jan.-Feb. 2007.

[3] A. Mockus, R. Fielding, and J. Herbsleb, “Two Case Studies of Open Source Software Development: Apache and Mozilla,” ACM Trans. Software Eng. and Methodology (TOSEM), vol. 11, no. 3, 2002, pp. 309–346.
