import React, { useState } from 'react';
import PixelHeader from '@/components/PixelHeader';
import HomePage from '@/pages/HomePage';
import ChecklistsPage from '@/pages/ChecklistsPage';
import TelegramChecklistPage from '@/pages/TelegramChecklistPage';

const PlaceholderPage: React.FC<{ title: string; onNavigate: (p: string) => void }> = ({ title, onNavigate }) => (
  <div className="pixel-grid-bg min-h-screen">
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="font-pixel mb-4" style={{ fontSize: '10px', color: 'var(--pixel-green)', opacity: 0.6 }}>
        {'>'} /PAGE_NOT_BUILT
      </div>
      <h1 className="font-pixel mb-6 pixel-glow" style={{ fontSize: '18px', color: 'var(--pixel-green)' }}>
        {title}
      </h1>
      <div className="pixel-card pixel-corner p-8 text-center">
        <div className="font-pixel mb-4" style={{ fontSize: '32px', color: 'var(--pixel-green)' }}>?</div>
        <div className="font-mono-pixel mb-6" style={{ fontSize: '14px', color: 'var(--pixel-green)', opacity: 0.7 }}>
          СТРАНИЦА В РАЗРАБОТКЕ...<span className="pixel-cursor" />
        </div>
        <button className="pixel-btn" onClick={() => onNavigate('home')} style={{ fontSize: '9px' }}>
          [ ← НА ГЛАВНУЮ ]
        </button>
      </div>
    </div>
  </div>
);

const Index = () => {
  const [page, setPage] = useState('home');

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <HomePage onNavigate={setPage} />;
      case 'checklists':
        return <ChecklistsPage onNavigate={setPage} />;
      case 'checklist-telegram':
        return <TelegramChecklistPage onNavigate={setPage} />;
      case 'recommendations':
        return <PlaceholderPage title="РЕКОМЕНДАЦИИ" onNavigate={setPage} />;
      case 'tools':
        return <PlaceholderPage title="ИНСТРУМЕНТЫ" onNavigate={setPage} />;
      case 'test':
        return <PlaceholderPage title="ТЕСТ" onNavigate={setPage} />;
      default:
        return <HomePage onNavigate={setPage} />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--pixel-bg)' }} className="pixel-flicker">
      <PixelHeader currentPage={page} onNavigate={setPage} />
      <main>{renderPage()}</main>
      <footer style={{ borderTop: '2px solid var(--pixel-border-dim)', padding: '16px', textAlign: 'center' }}>
        <div className="font-pixel" style={{ fontSize: '8px', color: 'var(--pixel-green)', opacity: 0.4 }}>
          PIXEL_MEDIA © 2025 // ALL RIGHTS RESERVED // v2.0.0
        </div>
      </footer>
    </div>
  );
};

export default Index;
