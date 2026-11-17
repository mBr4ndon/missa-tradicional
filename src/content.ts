// Todo o texto do site vive aqui. Textos copiados do site original (Wix), sem alterações,
// exceto o ponto e vírgula final dos dois primeiros pontos de "Porquê a Missa Tradicional?".

export const site = {
  name: 'Missa Tradicional Portugal',
  shortName: 'Liberdade Missa Trad',
  email: 'missa.tradicional.portugal@gmail.com',
  location: 'Portugal',
  year: 2024,
}

export const routes = {
  home: '/',
  missa: '/a-missa',
  papas: '/os-papas-e-a-tradicao',
  porque: '/porque-a-missa-tradicional',
  mundo: '/a-tradicao-no-mundo',
  galeria: '/galeria',
}

type NavLeaf = { label: string; to: string; children?: undefined }
type NavGroup = { label: string; to?: undefined; children: { label: string; to: string }[] }

export const nav: (NavLeaf | NavGroup)[] = [
  { label: 'Principal', to: routes.home },
  {
    label: 'História',
    children: [
      { label: 'A Missa', to: routes.missa },
      { label: 'Os Papas e a Tradição', to: routes.papas },
    ],
  },
  { label: 'Porquê a Missa Tradicional?', to: routes.porque },
  { label: 'A Tradição no Mundo', to: routes.mundo },
  { label: 'Galeria', to: routes.galeria },
]

export const home = {
  title: 'Liberdade para a Missa Tradicional',
  subtitle:
    'Pela celebração pública da Santa Missa Tradicional em Portugal, continuaremos a rezar e a apelar aos bispos',
  cta: 'Porquê a Missa Tradicional?',
  // Resumo dos três pontos da página "Porquê a Missa Tradicional?"
  pillarsTitle: 'Porquê a Missa Tradicional?',
  pillarsLink: 'Ler mais',
  pillars: [
    {
      title: 'Sagrado e reverência',
      body: 'O silêncio, a música e o uso do latim, tal como as orações ao pé do altar, ilustram a separação entre sagrado e profano.',
    },
    {
      title: 'Comunhão na boca e de joelhos',
      body: 'Obrigatória no rito antigo, expressa a máxima reverência devida a Cristo realmente presente.',
    },
    {
      title: 'Catolicidade',
      body: 'O mesmo ritual em qualquer parte do mundo, como uma casa comum para todos os povos.',
    },
  ],
  explore: {
    title: 'A Missa',
    link: 'Conhecer a Missa',
  },
}

export const missa = {
  title: 'A Missa',
  paragraphs: [
    'A Missa tridentina, ou rito romano tradicional, é fruto do desenvolvimento orgânico e milenar da liturgia católica. Contendo partes que remontam aos primeiros séculos da Cristandade, e outras que foram sendo gradualmente introduzidas, é manifestação fiel da doutrina católica e expressão do culto agradável a Deus, constantemente aprovado ao longo da vida da Igreja.',
    'A designação tridentina diz respeito à cidade italiana de Trento, onde decorreu o XIX concílio ecuménico da Igreja Católica durante o século XVI. Na sequência deste concílio, o Papa São Pio V promulgou o Missal Romano de 1570. Este Missal, contendo alguns ajustes, preservou essencialmente o rito romano tal como fora já fixado por São Gregório Magno, no século VI, já aí se respeitando quanto remontava aos primeiros séculos. O uso do Missal Romano de 1570 foi alargado a todo o mundo, sem porém se impedir a celebração de outros antigos ritos.',
    'A última versão do Missal Romano antigo foi promulgada em 1962, ano de abertura do Concílio. O Missal Romano novo, também chamado de Novus Ordo Missae, foi promulgado em 1969. No entanto, na prática, o Missal antigo não foi abrogado e nunca deixou de ser usado em muitas comunidades em todo o mundo de rito latino.',
    'É importante notar que a Constituição Sacrosanctum Concilium, aprovada no Concílio Vaticano II, embora aludindo a algum uso do vernáculo na liturgia, determina que «deve conservar-se o uso do latim nos ritos latinos» e reconhece o canto gregoriano como «canto próprio da liturgia romana».',
  ],
  timeline: [
    {
      image: 'ultimaCeia' as const,
      alt: 'Última Ceia, pintura de Juan de Joanes',
      pre: '',
      name: 'Instituição da Eucaristia',
      dates: '33 AD',
      credit: 'de Juan de Joanes',
    },
    {
      image: 'saoPedro' as const,
      alt: 'São Pedro, pintura de Peter Rubens',
      pre: '',
      name: 'São Pedro',
      dates: '... - 64 AD',
      credit: 'de Peter Rubens',
    },
    {
      image: 'gregorioMagno' as const,
      alt: 'Papa São Gregório Magno, pintura de Rafael',
      pre: 'Papa',
      name: 'São Gregório Magno',
      dates: '540 - 604',
      credit: 'de Rafael',
    },
    {
      image: 'pioV' as const,
      alt: 'Capela de São Pio V, nos Santos João e Paulo, em Roma, de Bartolomeo Letterini',
      pre: 'Papa',
      name: 'São Pio V',
      dates: '1504 - 1572',
      credit: 'de Bartolomeo Letterini',
    },
  ],
}

export const papas = {
  title: 'Os Papas e a Tradição',
  before: [
    'Em 1984, no pontificado do Papa João Paulo II, com o indulto da carta circular Quattuor abhinc annos, da Sagrada Congregação para o Culto Divino, permitia-se a utilização do Missal Romano de 1962. Mais tarde, em 1988, com a publicação da Carta Apostólica Ecclesia Dei, o Papa encorajou os bispos a concederem o uso desta faculdade em benefício do fiéis:',
  ],
  quote:
    'em toda a parte deverá ser respeitado o espírito de todos aqueles que se sentem ligados à tradição litúrgica latina, mediante uma ampla e generosa aplicação das directrizes […] para o uso do Missal Romano segundo a edição típica de 1962',
  quoteSource: 'Papa JOÃO PAULO II, Carta Apostólica Ecclesia Dei (1988)',
  after: [
    'A partir de 1988, surgiram vários institutos religiosos e sociedades de vida apostólica de direito local e pontifício dedicados à salvação das almas segundo o carisma tradicional, isto é, fazendo uso do Missal Romano antigo e conferindo os sacramentos na forma antiga.',
    'Dentre estes grupos, pode citar-se a Fraternidade de São Pedro (FSSP), o Instituto de Cristo Rei e Sumo Sacerdote (ICRSS) e o Instituto do Bom Pastor (IBP). Também houve muitos bispos, em particular na Europa, que concederam esta faculdade a sacerdotes diocesanos.',
    'Em 2007, com a publicação da carta apostólica Summorum Pontificum, o Papa Bento XVI alargou ainda mais a possibilidade de celebração da Missa tridentina ao permitir que os párocos acedessem aos pedidos dos fiéis que a desejassem, e reconhecendo a plena liberdade de a celebrar.',
    'Na carta apostólica Traditionis Custodes, de 2021, o Papa Francisco regula o uso do Missal Romano de 1962, introduzindo algumas restrições. Contudo, não só esta faculdade continua a existir como o documento em causa não se aplica  aos institutos reigiosos e sociedades de vida apostólica de direito pontifício, como esclareceu o Santo Padre em 2022.',
  ],
  popes: [
    { image: 'joaoPauloII' as const, alt: 'Papa João Paulo II', name: 'João Paulo II', dates: '1920 - 2005' },
    { image: 'bentoXVI' as const, alt: 'Papa Bento XVI', name: 'Bento XVI', dates: '1927 - 2022' },
    { image: 'francisco' as const, alt: 'Papa Francisco', name: 'Francisco', dates: '1936 - ' },
  ],
}

export const porque = {
  title: 'Porquê a Missa Tradicional?',
  intro:
    'A Santa Missa, como ritual que envolve o Santo Sacrifício do altar, deve proporcionar um culto agradável a Deus que seja o mais reverente possível em face da transcendência de Deus Criador, atraindo tantas graças quanto possível e suscitando o crescimento dos fiéis na virtude da religião e na devoção. A Missa antiga, pelo seu ritual, tem características que permitem isto mesmo, tais como as seguintes:',
  points: [
    {
      title: 'Ênfase do sagrado e da reverência',
      body: 'Segundo São Tomás de Aquino, algumas formas de enfatizar o sagrado são o silêncio, a música e o uso do latim (note-se que podem ser feitas leituras em Português). Também as orações ao pé do altar ilustram a separação entre sagrado e profano.',
    },
    {
      title: 'Comunhão na boca e de joelhos, obrigatória no rito antigo',
      body: 'Somos seres encarnados e o corpo, além da alma, tem também a obrigação de expressar a máxima reverência devida a Deus, sendo que nas sagradas espécies está Cristo realmente presente em Corpo, Alma e Divindade, o próprio Deus realmente presente sob as aparências de pão e vinho. De facto, falhando essa máxima reverência, há o risco de se desvanecer em muitos a fé no dogma da  Presença Real, como vários inquéritos mostram estar a acontecer.',
    },
    {
      title: 'Catolicidade, universalidade da fé e do modo de rezar',
      body: 'O ritual, não sendo deixado à escolha de cada sacerdote, é igual em qualquer parte do mundo, como uma casa comum para todos os povos. Além disso,  a escolha de músicas tradicionais, o canto gregoriano, contribui, tal como o latim, para afirmar essa identidade católica comum entre nações, e afirma também a união com os santos do passado e com os nossos próprios antepassados, rezando e cantando nós como eles o faziam, pois a fé é a mesma.',
    },
  ],
  premise:
    'Sendo a premissa que o que fazemos, o modo como rezamos, influencia aquilo em que acreditamos, e que, se as atitudes mudarem, as pessoas tenderão a mudar também aquilo em que acreditam, então:',
  quote:
    'Aquilo que para as gerações anteriores era sagrado, permanece sagrado e grande também para nós, e não pode ser de improviso totalmente proibido ou mesmo prejudicial. Faz-nos bem a todos conservar as riquezas que foram crescendo na fé e na oração da Igreja, dando-lhes o justo lugar.',
  quoteSource:
    'Papa BENTO XVI, Carta aos Bispos que acompanha o motu proprio Summorum Pontificum (2007)',
}

export const mundo = {
  title: 'A Tradição no Mundo',
  intro:
    'Portugal é ainda um país muito parco em apostolados tradicionais, principalmente nas regiões Norte, Sul e insulares, apesar dos pedidos de fiéis ao longos dos anos. Cabe destacar o enorme contraste do nosso país em relação a vários outros, nomeadamente àqueles de maioria protestante:',
  countryTable: {
    head: ['País', 'Denominação Predominante', 'N. Locais com Missa', 'N. Católicos (milhões)', 'População Católica'],
    rows: [
      ['Polónia', 'Catolicismo', '108', '33,0', '85,8%'],
      ['Itália', 'Catolicismo', '134', '50,5', '83,0%'],
      ['França', 'Catolicismo', '203', '39,0', '58,5%'],
      ['Portugal', 'Catolicismo', '2', '8,9', '84,5%'],
      ['Países Baixos', 'Protestantismo', '11', '3,9', '23,3%'],
      ['Reino Unido', 'Protestantismo', '95', '5,0', '7,7%'],
    ],
    highlight: 'Portugal',
    note: 'Nota: estes dados referem-se apenas a Missas celebradas em igrejas paroquiais ou em apostolados reconhecidos por bispos diocesanos ou pela Santa Sé',
    source: { label: 'www.latinmassdir.org', href: 'http://www.latinmassdir.org/', date: '(Abril de 2024)' },
  },
  institutes:
    'Actualmente, para além das Missas Tradicionais celebradas por sacerdotes diocesanos, existem vários institutos ou sociedades de vida apostólica de direito local e pontifício dedicados à salvação das almas segundo o carisma tradicional. Dentre estes grupos, podem citar-se a Fraternidade Sacerdotal de São Pedro (FSSP), o Instituto de Cristo Rei e Sumo Sacerdote (ICRSS) e o Instituto do Bom Pastor (IBP).',
  mapsTitle: 'Alguns locais onde é celebrada a Missa antiga na Europa',
  mapsSource: { label: 'www.latinmass.com', href: 'http://www.latinmass.com/', date: '(Junho de 2024)' },
  maps: [
    { image: 'mapaDiocesanas' as const, caption: 'Igrejas ou Capelas Diocesanas' },
    { image: 'mapaFSSP' as const, caption: 'Apostolados FSSP' },
    { image: 'mapaICRSS' as const, caption: 'Apostolados ICRSS' },
  ],
  fssp: {
    title: 'FSSP',
    paragraphs: [
      'A Fraternidade foi fundada em 1988 após a publicação da carta apostólica Ecclesia Dei. Dos membros fundadores, contavam-se doze sacerdotes e alguns seminaristas. Pouco depois, um bispo alemão cedeu à Fraternidade uma casa em Wigratzbad, na Baviera, a pedido do Cardeal Ratzinger. Aqui se estabeleceu o seminário da FSSP na Europa, havendo sido fundado outro nos Estados Unidos.',
      'Os membros da Fraternidade desempenham as suas funções sacerdotais em casas e apostolados que lhes são confiados por bispos diocesanos. Os sacerdotes vivem em pequenas comunidades espalhadas pelo mundo, com particular destaque para a Europa. A FSSP conta actualmente, em todo o mundo, com 368 sacerdotes e 201 seminaristas. A média etária dos 569 membros é 39 anos (Novembro de 2023).',
      'É notável o número de vocações portuguesas no seminário de Wigratzbad, considerando que a implantação da Tradição no nosso país não é ainda muito conhecida. Rezamos pela graça de acolher os futuros sacerdotes e pela fundação de apostolados tradicionais em todo o Portugal.',
    ],
    seminaristas: {
      title: 'N. de seminaristas em Wigratzbad',
      subtitle: '(nacionalidades mais representadas)',
      rows: [
        ['França', '36'],
        ['Alemanha', '10'],
        ['Espanha', '9'],
        ['Portugal', '8'],
        ['Itália', '7'],
        ['Polónia', '6'],
        ['Suíça', '5'],
      ],
      highlight: 'Portugal',
      source: { label: 'www.fssp.org', href: 'http://www.fssp.org/', date: '(Novembro de 2023)' },
    },
    photos: [
      { image: 'ratzingerFSSP' as const, caption: 'Card. Ratzinger celebra Missa antiga com a FSSP (1999)' },
      { image: 'audienciaFSSP' as const, caption: 'Representantes da FSSP em audiência com o Santo Padre (2024)' },
      { image: 'wigratzbad' as const, caption: 'Seminário de Wigratzbad' },
    ],
  },
  icrss: {
    title: 'ICRSS',
    paragraphs: [
      'O Instituto foi erigido canonicamente em 1990, tendo passado a sociedade de direito pontifício com a aprovação do Papa Bento XVI. O Seminário de São Filipe Néri, situado perto de Florença, contava em 2023 com 108 seminaristas. O Instituto congrega ainda 147 sacerdotes, entre os quais 2 portugueses, presentes em vários países.',
      'Para além do trabalho missionário que realiza em África desde a sua fundação, o ICRSS também permite a consagração à vida conventual através das Irmãs Adoradoras do Coração Real de Jesus. O Cardeal Raymond Burke, sendo próximo do Instituto, celebra o rito antigo nas suas capelas com alguma frequência.',
    ],
    photos: [
      { image: 'burkeGricigliano' as const, caption: 'Card. Burke visita o Seminário de São Filipe Néri, Gricigliano' },
      { image: 'audienciaICRSS' as const, caption: 'Representantes do ICRSS são recebidos pelo Santo Padre' },
      { image: 'oficioDivino' as const, caption: 'Ofício Divino no Seminário de São Filipe Néri' },
    ],
  },
  ibp: {
    title: 'IBP',
    paragraphs: [
      'O Instituto do Bom Pastor foi fundado em 2006 como sociedade de vida apostólica de direito pontifício. Presente em nove países, contava em 2023 com 61 sacerdotes e 46 seminaristas. Na sua fundação, o IBP foi explicitamente encarregue de desenvolver algumas críticas construtivas a certas reformas nascidas do Concílio Vaticano II.',
      'O Seminário de São Vicente de Paulo está sediado na diocese de Chartres, acolhendo futuros sacerdotes de diversas nacionalidades, nomeadamente portugueses. Os sacerdotes do Instituto desempenham as suas funções sobretudo em igrejas diocesanas. Em Lisboa, por exemplo, estão presentes na paróquia de São Nicolau.',
    ],
    photos: [
      { image: 'superiorIBP' as const, caption: 'O superior-geral do IBP encontra-se com o Santo Padre' },
      { image: 'seminarioSaoVicente' as const, caption: 'Seminário de São Vicente de Paulo' },
      { image: 'saoNicolau' as const, caption: 'Celebração na Paróquia de São Nicolau, Lisboa' },
    ],
  },
}

export const galeria = {
  title: 'Galeria',
  images: [
    'galeria01', 'galeria02', 'galeria03', 'galeria04', 'galeria05', 'galeria06',
    'galeria07', 'galeria08', 'galeria09', 'galeria10', 'galeria11', 'galeria12',
  ] as const,
}

export const colours = [
  { id: 'branco', label: 'Branco', value: '#8C6D17' },
  { id: 'vermelho', label: 'Vermelho', value: '#8E1B24' },
  { id: 'verde', label: 'Verde', value: '#2F5D43' },
  { id: 'roxo', label: 'Roxo', value: '#4B2E6B' },
  { id: 'rosa', label: 'Rosa', value: '#9C4A66' },
]
