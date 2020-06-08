# Bem vindo ao apollo-federation-example 👋
[![Twitter: frutuozo29](https://img.shields.io/twitter/follow/frutuozo29.svg?style=social)](https://twitter.com/frutuozo29)

> Projeto criado para demostrar como conectar varios microservices em um endpoint graphql e demostrar a utilização de JWT para autenticação dos microservices conectados, limitando suas consultas para retornar registros apenas da organização que cada usuário está associado

![](/afe.png)

## Instalação

#### afe-gateway
```sh
cd afe-gateway
npm install / yarn install
```

#### afe-auth
```sh
cd afe-auth
npm install / yarn install
```

#### afe-customers
```sh
cd afe-customers
npm install / yarn install
```


## Uso
> **Antes de rodar os projetos afe-auth e afe-gateway você deve renomear o arquivo .env.example que fica dentro de cada pasta do projeto para .env**. É necessário rodar os projetos **afe-auth** e **afe-customers** antes de rodar o afe-gateway, para que o gateway carregue corretamente os schemas dos microservices.

#### afe-auth
```sh
cd afe-auth
npm start / yarn start
```

#### afe-customers
```sh
cd afe-customers
npm start / yarn start
```

#### afe-gateway
```sh
cd afe-gateway
npm start / yarn start
```

Feito isso abra a url http://localhost:4000 para visualizar o playground!

## Autor

👤 **Renan Frutuozo**

* Website: https://renanfrutuozo.me
* Twitter: [@frutuozo29](https://twitter.com/frutuozo29)
* Github: [@frutuozo29](https://github.com/frutuozo29)
* LinkedIn: [@Renan Frutuozo](https://linkedin.com/in/renan-frutuozo-125a899b/)

## Mostre seu apoio

Dê um ⭐️ se este projeto ajudou você!
