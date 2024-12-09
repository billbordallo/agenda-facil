# Agenda Fácil (Front-End)

_versão: 1.0_

Este projeto tem como objetivo criar o _front-end_ de um sistema de agendamento para profissionais liberais que atendem em domicílio. 

O sistema permite visualizar todos os agendamentos cadastrados, listar os serviços oferecidas pelo profissional, alterar o status de um agendamento e também realizar a sua exclusão. Além disso, ainda é possível fazer a busca de agendamentos por data e realizar a inclusão de novos agendamentos (de forma simulada).

Não há _back-end_ neste protótipo. Portanto, o carregamento dos dados de agendamentos e serviços é feito a partir de dois arquivos `.json` localizados na pasta `public` (`agendamentos.json` e `servicos.json`).

## Tecnologia

O _front-end_ foi desenvolvido com [Vite](https://vite.dev/) + [React](https://react.dev/). Elementos da biblioteca [Material Design 2](https://m2.material.io/) também foram utilizados em partes da aplicação.

## Layout (Figma)

O layout do projeto foi criado utilizando o Figma e pode ser acessado através do link: [https://www.figma.com/design/2Rdw1P5OIMXh88OaxQCxE6/MVP-03---Fabiano-Bordallo?node-id=0-1&m=dev](https://www.figma.com/design/2Rdw1P5OIMXh88OaxQCxE6/MVP-03---Fabiano-Bordallo?node-id=0-1&m=dev).

Para acessar diretamente o protótipo navegável no Figma, use o link: [https://www.figma.com/proto/2Rdw1P5OIMXh88OaxQCxE6/MVP-03---Fabiano-Bordallo?page-id=0%3A1&node-id=5-3&node-type=frame&viewport=2740%2C971%2C1.24&t=ogF7jbo9cMl1jvHn-1&scaling=contain&content-scaling=fixed](https://www.figma.com/proto/2Rdw1P5OIMXh88OaxQCxE6/MVP-03---Fabiano-Bordallo?page-id=0%3A1&node-id=5-3&node-type=frame&viewport=2740%2C971%2C1.24&t=ogF7jbo9cMl1jvHn-1&scaling=contain&content-scaling=fixed)

## Instalação da aplicação

É necessário ter o NPM instalado em seu computador ([veja aqui](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) as instruções para instalação do NPM).

Abra um terminal e faça um clone deste repositório:

`git clone https://github.com/billbordallo/agenda-facil.git`

Em seguida, acesse a pasta `agenda-facil`...

`cd agenda-facil`

... e rode o comando abaixo no terminal:

`npm install`

## Rodando a aplicação

Após a instalação, rode o comando abaixo no seu terminal:

`npm run dev`

Após rodar o comando acima, a aplicação deve estar disponível em seu ambiente local no endereço http://127.0.0.1:5173/ ou http://localhost:5173/

## Sobre o projeto

Este MVP foi desenvolvido por [Fabiano Bordallo](https://github.com/billbordallo) como trabalho final para a Sprint _Desenvolvimento Front-End Avançado_, da **Pós-Graduação em Desenvolvimento Full Stack**, da PUC-RIO, finalizada em dezembro de 2024.