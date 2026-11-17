// Todo o texto do site vive aqui. Editar este ficheiro é suficiente para mudar conteúdos.

export const site = {
  name: 'Missa Tradicional Portugal',
  shortName: 'Liberdade Missa Trad',
  email: 'missa.tradicional.portugal@gmail.com',
  location: 'Portugal',
  year: 2024,
}

export const nav = [
  { id: 'principal', label: 'Principal' },
  { id: 'historia', label: 'História' },
  { id: 'porque', label: 'Porquê a Missa Tradicional?' },
  { id: 'mundo', label: 'A Tradição no Mundo' },
  { id: 'galeria', label: 'Galeria' },
]

export const hero = {
  latin: 'Introibo ad altare Dei.',
  portuguese: 'Subirei ao altar de Deus.',
  note: 'Palavras com que o sacerdote inicia a Missa, nas orações ao pé do altar.',
}

// Texto retirado da página "Porquê a Missa Tradicional?" do site actual.
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
      body: 'Somos seres encarnados e o corpo, além da alma, tem também a obrigação de expressar a máxima reverência devida a Deus, sendo que nas sagradas espécies está Cristo realmente presente em Corpo, Alma e Divindade, o próprio Deus realmente presente sob as aparências de pão e vinho. De facto, falhando essa máxima reverência, há o risco de se desvanecer em muitos a fé no dogma da Presença Real, como vários inquéritos mostram estar a acontecer.',
    },
    {
      title: 'Catolicidade, universalidade da fé e do modo de rezar',
      body: 'O ritual, não sendo deixado à escolha de cada sacerdote, é igual em qualquer parte do mundo, como uma casa comum para todos os povos. Além disso, a escolha de músicas tradicionais, o canto gregoriano, contribui, tal como o latim, para afirmar essa identidade católica comum entre nações, e afirma também a união com os santos do passado e com os nossos próprios antepassados, rezando e cantando nós como eles o faziam, pois a fé é a mesma.',
    },
  ],
  premise:
    'Sendo a premissa que o que fazemos, o modo como rezamos, influencia aquilo em que acreditamos, e que, se as atitudes mudarem, as pessoas tenderão a mudar também aquilo em que acreditam, então:',
  quote:
    'Aquilo que para as gerações anteriores era sagrado, permanece sagrado e grande também para nós, e não pode ser de improviso totalmente proibido ou mesmo prejudicial. Faz-nos bem a todos conservar as riquezas que foram crescendo na fé e na oração da Igreja, dando-lhes o justo lugar.',
  quoteSource:
    'Papa Bento XVI, Carta aos Bispos que acompanha o motu proprio Summorum Pontificum (2007)',
}

// Secções cujo conteúdo ainda tem de ser migrado do Wix.
export const pending = [
  { id: 'historia', title: 'História', sub: 'A Missa · Os Papas e a Tradição' },
  { id: 'mundo', title: 'A Tradição no Mundo', sub: '' },
  { id: 'galeria', title: 'Galeria', sub: '' },
]

export const colours = [
  { id: 'branco', label: 'Branco', value: '#9A7B2F' },
  { id: 'vermelho', label: 'Vermelho', value: '#8E1B24' },
  { id: 'verde', label: 'Verde', value: '#2F5D43' },
  { id: 'roxo', label: 'Roxo', value: '#4B2E6B' },
  { id: 'rosa', label: 'Rosa', value: '#B0607A' },
]
