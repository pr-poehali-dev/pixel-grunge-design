import React from 'react';

interface PixelHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'ГЛАВНАЯ' },
  { id: 'recommendations', label: 'СОВЕТЫ' },
  { id: 'tools', label: 'ИНСТРУМЕНТЫ' },
  { id: 'checklists', label: 'ЧЕКЛИСТЫ' },
  { id: 'test', label: 'ТЕСТ' },
];

const PixelHeader: React.FC<PixelHeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header style={{ background: '#ffffff', borderBottom: '3px solid var(--pixel-blue)', boxShadow: '0 4px 0 var(--pixel-shadow)' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3" style={{ borderBottom: '2px dashed var(--pixel-border-dim)' }}>
          <div className="font-pixel" style={{ color: 'var(--pixel-blue)', fontSize: '11px' }}>
            🛡️ CYBER<span style={{ color: 'var(--pixel-pink-dark)' }}>SAFE</span>
          </div>
          <div className="font-mono-pixel text-xs flex gap-4" style={{ color: 'var(--pixel-text-dim)' }}>
            <span>ЗАЩИТА ДАННЫХ</span>
            <span className="pixel-cursor" style={{ color: 'var(--pixel-blue)' }}>ОНЛАЙН</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="py-3 overflow-x-auto">
          <ul className="flex gap-2 min-w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`font-pixel pixel-glitch ${currentPage === item.id ? 'nav-active' : ''}`}
                  style={{
                    fontSize: '8px',
                    padding: '8px 12px',
                    border: '2px solid var(--pixel-border-dim)',
                    background: currentPage === item.id ? 'var(--pixel-blue)' : 'transparent',
                    color: currentPage === item.id ? '#ffffff' : 'var(--pixel-text)',
                    cursor: 'pointer',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default PixelHeader;
