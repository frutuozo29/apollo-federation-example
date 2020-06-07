const organizations = [
  {
    id: 1,
    name: 'Fortes Tecnologia em Sistemas',
    cnpj: '17.666.571/0001-62'
  },
  {
    id: 2,
    name: 'Softplan Planejamento e Sistemas',
    cnpj: '54.723.153/0001-96'
  }
]

const users = [
  {
    id: 1,
    name: 'Renan Frutuozo',
    email: 'renan@gmail.com',
    password: 'naner',
    org_id: 2
  },
  {
    id: 2,
    name: 'Jorge Miranda',
    email: 'jorge@gmail.com',
    password: 'egroj',
    org_id: 1
  },
  {
    id: 3,
    name: 'Leonardo Cesar',
    email: 'leonardo@gmail.com',
    password: 'odranoel',
    org_id: 2
  },
  {
    id: 4,
    name: 'Rodolffo Frutuozo',
    email: 'rodolffo@gmail.com',
    password: 'offlodor',
    org_id: 1
  }
]

module.exports = {
  organizations,
  users
}