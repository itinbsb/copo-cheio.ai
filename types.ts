export interface Beverage {
  id: string;
  name: string;
  category: 'Destilado' | 'Fermentado' | 'Licor' | 'Outro';
  description: string;
  imageUrl: string;
  origin?: string;
  fabrication?: string;
  types?: string[];
  tastingNotes?: string;
  consumptionSuggestions?: string[];
  history?: string;
}

export interface CocktailIngredient {
  name: string;
  quantity: string;
}

export interface Cocktail {
  id: string;
  name: string;
  ingredients: CocktailIngredient[];
  instructions: string;
  glassware?: string;
  garnish?: string;
  difficulty?: 'Fácil' | 'Médio' | 'Difícil';
  imageUrl: string;
  history?: string;
}

export interface SuggestedCocktail {
  name: string;
  ingredients: string[]; // Array of strings like "Vodka - 50ml"
  instructions: string;
}

// Used for API response parsing if ingredients are structured
export interface PantryApiCocktailIngredient {
  item: string;
  amount: string;
}
export interface PantryApiCocktail {
  name: string;
  ingredients: PantryApiCocktailIngredient[] | string[]; // Support both structured and simple string array
  instructions: string;
}

export type AIPersona = 'Itin' | 'Beca';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'system';
  text: string;
  timestamp: Date;
  persona?: AIPersona; // Indicates which AI persona sent the message
}

// New types for Quiz feature
export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctAnswer: string; // This should exactly match one of the options
}

// New types for My Notes feature
export interface NoteItem {
  itemId: string; // ID of the beverage or cocktail
  text: string;
}

export interface NotesContextType {
  getNote: (itemId: string) => string | undefined;
  saveNote: (itemId: string, text: string) => void;
  deleteNote: (itemId: string) => void;
}