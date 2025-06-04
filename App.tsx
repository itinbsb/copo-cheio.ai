
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CocktailsPage from './pages/CocktailsPage';
import PantryPage from './pages/PantryPage';
import BeverageDetailPage from './pages/BeverageDetailPage';
import CocktailDetailPage from './pages/CocktailDetailPage';
import AIAssistantPage from './pages/AIbebe'; // Corrected import path
import QuizPage from './pages/QuizPage'; // New Quiz Page
import { MOCK_BEVERAGES, MOCK_COCKTAILS } from './data';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen bg-neutral-900 text-neutral-100 flex flex-col font-sans">
        <Header />
        <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<HomePage beverages={MOCK_BEVERAGES} />} />
            <Route path="/beverage/:id" element={<BeverageDetailPage beverages={MOCK_BEVERAGES} />} />
            <Route path="/cocktails" element={<CocktailsPage cocktails={MOCK_COCKTAILS} />} />
            <Route path="/cocktail/:id" element={<CocktailDetailPage cocktails={MOCK_COCKTAILS} />} />
            <Route path="/pantry" element={<PantryPage />} />
            <Route path="/ai-assistant" element={<AIAssistantPage />} />
            <Route path="/quiz" element={<QuizPage />} /> {/* New Route for Quiz */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;