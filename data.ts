
import { Beverage, Cocktail, QuizQuestion } from './types';

export const MOCK_BEVERAGES: Beverage[] = [
  {
    id: 'whisky-scotch',
    name: 'Whisky Escocês',
    category: 'Destilado',
    description: 'Um destilado de malte envelhecido em barris de carvalho, conhecido por sua complexidade e variedade de sabores.',
    imageUrl: 'https://picsum.photos/seed/whisky/400/300',
    origin: 'Escócia',
    fabrication: 'Destilação de grãos maltados (geralmente cevada), seguida de envelhecimento em barris de carvalho por no mínimo 3 anos.',
    types: ['Single Malt', 'Blended Malt', 'Single Grain', 'Blended Grain', 'Blended Scotch'],
    tastingNotes: 'Variam de defumado e turfoso (Islay) a frutado e floral (Speyside). Notas comuns incluem caramelo, baunilha, especiarias e madeira.',
    consumptionSuggestions: ['Puro', 'Com gelo ("on the rocks")', 'Com um pingo d\'água', 'Em coquetéis como Old Fashioned ou Whisky Sour'],
    history: 'A produção de whisky na Escócia data de pelo menos o século XV, evoluindo de uma bebida rústica para o sofisticado destilado conhecido hoje.'
  },
  {
    id: 'rum-caribenho',
    name: 'Rum Caribenho',
    category: 'Destilado',
    description: 'Destilado feito a partir de subprodutos da cana-de-açúcar, como melaço, ou diretamente do caldo de cana.',
    imageUrl: 'https://picsum.photos/seed/rum/400/300',
    origin: 'Caribe (diversas ilhas como Jamaica, Barbados, Cuba)',
    fabrication: 'Fermentação do melaço ou caldo de cana, seguida de destilação. Pode ser envelhecido ou não.',
    types: ['Rum Branco (Prata)', 'Rum Dourado (Ouro)', 'Rum Escuro (Preto/Anejo)', 'Rum Spiced', 'Rum Agrícola'],
    tastingNotes: 'Notas de melaço, caramelo, baunilha, frutas tropicais e especiarias. Varia muito com o estilo e envelhecimento.',
    consumptionSuggestions: ['Puro (especialmente runs envelhecidos)', 'Em coquetéis clássicos como Mojito, Daiquiri, Cuba Libre, Piña Colada'],
    history: 'O rum tem uma história rica ligada à colonização do Caribe e à cultura marítima, sendo uma bebida popular entre piratas e marinheiros.'
  },
  {
    id: 'vinho-tinto-cabernet',
    name: 'Vinho Tinto Cabernet Sauvignon',
    category: 'Fermentado',
    description: 'Um dos vinhos tintos mais populares do mundo, conhecido por seus taninos firmes e sabores de frutas escuras.',
    imageUrl: 'https://picsum.photos/seed/vinho/400/300',
    origin: 'Bordeaux, França (originalmente), mas cultivado globalmente.',
    fabrication: 'Fermentação de uvas Cabernet Sauvignon. Frequentemente envelhecido em carvalho.',
    types: ['Varietal (apenas Cabernet Sauvignon)', 'Blend (com Merlot, Cabernet Franc, etc.)'],
    tastingNotes: 'Cassis, amora, cereja preta, cedro, tabaco, pimentão verde (em climas mais frios).',
    consumptionSuggestions: ['Carnes vermelhas grelhadas ou assadas, queijos curados.'],
    history: 'Originou-se no século XVII em Bordeaux, França, como um cruzamento entre Cabernet Franc e Sauvignon Blanc.'
  },
];

export const MOCK_COCKTAILS: Cocktail[] = [
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    ingredients: [
      { name: 'Cachaça', quantity: '60ml' },
      { name: 'Limão Tahiti', quantity: '1 unidade' },
      { name: 'Açúcar', quantity: '2 colheres de bailarina (ou a gosto)' },
    ],
    instructions: 'Corte o limão em gomos, removendo a parte branca central. Macere levemente com o açúcar em um copo baixo. Adicione a cachaça e gelo em cubos. Mexa bem.',
    glassware: 'Copo baixo (Old Fashioned)',
    garnish: 'Rodela de limão ou um gomo',
    difficulty: 'Fácil',
    imageUrl: 'https://picsum.photos/seed/caipirinha/400/300',
    history: 'A Caipirinha é o coquetel nacional do Brasil, com origens incertas, mas popularizada no início do século XX. Acredita-se que tenha evoluído de receitas caseiras para gripes e resfriados.'
  },
  {
    id: 'negroni',
    name: 'Negroni',
    ingredients: [
      { name: 'Gin', quantity: '30ml' },
      { name: 'Campari', quantity: '30ml' },
      { name: 'Vermute Rosso (Doce)', quantity: '30ml' },
    ],
    instructions: 'Adicione todos os ingredientes a um copo de mistura com gelo. Mexa bem até gelar. Coe para um copo baixo com gelo novo (ou uma pedra grande de gelo).',
    glassware: 'Copo baixo (Old Fashioned)',
    garnish: 'Casca de laranja',
    difficulty: 'Médio',
    imageUrl: 'https://picsum.photos/seed/negroni/400/300',
    history: 'Acredita-se que o Negroni foi criado em Florença, Itália, por volta de 1919, quando o Conde Camillo Negroni pediu ao bartender para fortalecer seu coquetel Americano, substituindo a água com gás por gin.'
  },
  {
    id: 'mojito',
    name: 'Mojito',
    ingredients: [
      { name: 'Rum Branco', quantity: '60ml' },
      { name: 'Suco de Limão Fresco', quantity: '30ml' },
      { name: 'Açúcar', quantity: '2 colheres de bailarina (ou xarope simples)' },
      { name: 'Hortelã Fresca', quantity: '8-10 folhas' },
      { name: 'Água com Gás', quantity: 'Completar' },
    ],
    instructions: 'Em um copo alto, macere levemente as folhas de hortelã com o açúcar e o suco de limão. Adicione o rum e encha o copo com gelo picado. Complete com água com gás e mexa suavemente.',
    glassware: 'Copo alto (Highball)',
    garnish: 'Ramo de hortelã e fatia de limão',
    difficulty: 'Médio',
    imageUrl: 'https://picsum.photos/seed/mojito/400/300',
    history: 'O Mojito é um coquetel cubano clássico, com origens que remontam ao século XVI. Popularizou-se internacionalmente no século XX, especialmente através de Ernest Hemingway.'
  },
];

export const MOCK_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    questionText: 'Qual destilado é o principal ingrediente da Caipirinha?',
    options: ['Vodka', 'Rum', 'Cachaça', 'Gin'],
    correctAnswer: 'Cachaça',
  },
  {
    id: 'q2',
    questionText: 'De qual país o Whisky Escocês (Scotch Whisky) é originário?',
    options: ['Irlanda', 'Estados Unidos', 'Japão', 'Escócia'],
    correctAnswer: 'Escócia',
  },
  {
    id: 'q3',
    questionText: 'Qual dos seguintes é um tipo de Rum?',
    options: ['IPA', 'Blanco', 'Cabernet Sauvignon', 'Single Malt'],
    correctAnswer: 'Blanco', // Assuming Blanco for Tequila, but Rum can be Branco (White)
  },
  {
    id: 'q4',
    questionText: 'O coquetel Negroni é classicamente composto por Gin, Campari e qual outro ingrediente?',
    options: ['Vermute Seco', 'Vermute Rosso (Doce)', 'Licor de Laranja', 'Água Tônica'],
    correctAnswer: 'Vermute Rosso (Doce)',
  },
  {
    id: 'q5',
    questionText: 'Qual é a principal matéria-prima do Rum?',
    options: ['Agave', 'Cevada', 'Cana-de-açúcar', 'Uvas'],
    correctAnswer: 'Cana-de-açúcar',
  }
];