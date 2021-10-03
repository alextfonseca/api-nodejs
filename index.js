const express = require("express");
const app = express();

const PORT = process.env.PORT || 3333;

const cities = {
  cities: [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1583275479278-7bc72a16c2ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Rio de Janeiro",
      about:
        "O Rio de Janeiro é uma grande cidade brasileira à beira-mar, famosa pelas praias de Copacabana e Ipanema, pela estátua de 38 metros de altura do Cristo Redentor, no topo do Corcovado, e pelo Pão de Açúcar, um pico de granito com teleféricos até seu cume. A cidade também é conhecida pelas grandes favelas. O empolgante Carnaval, com carros alegóricos, fantasias extravagantes e sambistas, é considerado o maior do mundo.",
      events: "11",
      points: "67",
      restaurants: "20",
    },

    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1565112015001-f2c5404173b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=435&q=80",
      name: "São Paulo",
      about:
        "São Paulo, centro financeiro do Brasil, está entre as cidades mais populosas do mundo, com diversas instituições culturais e uma rica tradição arquitetônica. Há prédios simbólicos como a catedral neogótica, o Edifício Martinelli, um arranha-céu inaugurado em 1929, e o Edifício Copan, com suas linhas curvas projetadas pelo arquiteto modernista Oscar Niemeyer. A igreja em estilo colonial do Pátio do Colégio marca o local onde os padres jesuítas fundaram a cidade em 1554.",
      events: "30",
      points: "50",
      restaurants: "200",
    },

    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1537183340651-0d300970b07b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Santos",
      about:
        "Santos, uma cidade costeira no estado de São Paulo, no sul do Brasil, é uma importante extensão do porto marítimo que vai do continente à ilha de São Vicente. O centro urbano da ilha faz fronteira com a Baía de Santos, conhecida pela sua extensa praia e pelo jardim adjacente de 5,3 km de comprimento. O Museu do Café, que ocupa uma bolsa de mercadorias de 1922 preservada na zona histórica, explora o papel fundamental da área para o comércio de café do Brasil. ",
      events: "15",
      points: "80",
      restaurants: "30",
    },

    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1625426078245-6911839409dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Brasilia",
      about:
        "Brasília, inaugurada como capital do Brasil em 1960, é uma cidade planeada que se distingue pela sua arquitetura branca e moderna, essencialmente concebida por Oscar Niemeyer. Disposta em forma de avião, a sua fuselagem é o Eixo Monumental, 2 avenidas amplas flanqueadas por um enorme parque. No cockpit encontra-se a Praça dos Três Poderes, cujo nome provém das 3 agências do governo que a rodeiam.",
      events: "6",
      points: "30",
      restaurants: "10",
    },

    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1616642325314-fe17e194b380?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Curitiba",
      about:
        "Curitiba é a capital do estado do Paraná, na região sul do Brasil. A Torre Panorâmica, que tem um observatório em sua parte superior, destaca-se na silhueta da cidade. Conhecida como centro cultural, Curitiba abriga vários espaços para apresentações, como a Ópera de Arame, uma estrutura de aço tubular com telhado transparente, e o enorme Centro Cultural Teatro Guaíra, que apresenta uma programação variada. ",
      events: "19",
      points: "89",
      restaurants: "67",
    },

    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1612383892465-153167840470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Recife",
      about:
        "Recife, a capital do estado de Pernambuco, no nordeste do Brasil, distingue-se pelos seus vários rios, pontes, ilhéus e penínsulas. Recife Antigo, na própria ilha junto ao porto, é o centro histórico da cidade antiga que data do século XVI. A sul, a popular Praia de Boa Viagem é protegida por recifes e está ladeada de blocos de apartamentos elevados, hotéis modernos e restaurantes. ",
      events: "35",
      points: "55",
      restaurants: "63",
    },

    {
      id: "7",
      image:
        "https://images.unsplash.com/photo-1604522564556-12cd5f53c390?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80",
      name: "Manaus",
      about:
        "Manaus, nos bancos do Rio Negro no noroeste do Brasil, é a capital do vasto estado do Amazonas. Trata-se de um ponto de partida importante próximo à Floresta Amazônica. A leste da cidade, o Rio Negro, escuro, converge para o Rio Solimões, barrento, resultando em um fenômeno visual incrível chamado de Encontro das Águas. A combinação dos afluentes forma o Rio Amazonas.",
      events: "41",
      points: "62",
      restaurants: "62",
    },

    {
      id: "8",
      image:
        "https://images.unsplash.com/photo-1605708645864-1b6a2a172086?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=775&q=80",
      name: "Belo Horizonte",
      about:
        "O Belo Horizonte é a capital do estado de Minas Gerais, no sudeste do Brasil. Rodeada de montanhas, a cidade é conhecida pelo enorme Estádio Mineirão. Construído em 1965, o estádio alberga também o Museu Brasileiro do Futebol. Nas proximidades encontra-se a Lagoa da Pampulha e o Conjunto Arquitetónico da Pampulha, que inclui a Igreja de São Francisco de Assis, cujo teto é ondulado e que foi concebida pelo arquiteto modernista brasileiro Oscar Niemeyer. ",
      events: "34",
      points: "62",
      restaurants: "43",
    },

    {
      id: "9",
      image:
        "https://images.unsplash.com/photo-1587142281950-877f8c3ad44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
      name: "Florianópolis",
      about:
        "Florianópolis, a capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento. É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha. A sua Lagoa da Conceição, uma lagoa de água salgada, é popular para a prática de windsurf e para excursões de barco. A Ponte Pedro Ivo Campos faz a ligação entre a ilha e a zona comercial continental. ",
      events: "14",
      points: "87",
      restaurants: "45",
    },

    {
      id: "10",
      image:
        "https://images.unsplash.com/photo-1605046048855-0b0d1c415676?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80",
      name: "São Roque",
      about:
        "São Roque é um município brasileiro do interior do estado de São Paulo, situado na Região Metropolitana de Sorocaba, na Mesorregião Macro Metropolitana Paulista e na Microrregião de Sorocaba. Localiza-se à latitude 23º31 45Sul e à longitude 47º08 07 Oeste com altitude de 771 metros",
      events: "11",
      points: "68",
      restaurants: "34",
    },

    {
      id: "11",
      image:
        "https://images.unsplash.com/photo-1604878434055-2ea819d5cbd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
      name: "Arraial do Cabo",
      about:
        "Arraial do Cabo é um município brasileiro situado na Região dos Lagos do estado do Rio de Janeiro. Trata-se de uma cidade costeira, possuindo uma altitude média de apenas oito metros.",
      events: "29",
      points: "87",
      restaurants: "49",
    },
  ],
};

app.get("/:id", (req, res) => {
  const id = req.params.id - 1;

  res.json(cities.cities[id]);
});

app.get("/", (req, res) => {
  res.json(cities.cities);
});

app.listen(PORT, () => {
  return;
});
