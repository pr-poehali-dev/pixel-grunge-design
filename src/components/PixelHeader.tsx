import React from 'react';

interface PixelHeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navItems = [
  { id: 'home', label: 'ГЛАВНАЯ' },
  { id: 'recommendations', label: 'РЕКОМЕНДАЦИИ' },
  { id: 'tools', label: 'ИНСТРУМЕНТЫ' },
  { id: 'checklists', label: 'ЧЕКЛИСТЫ' },
  { id: 'test', label: 'ТЕСТ' },
];

const PixelHeader: React.FC<PixelHeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="pixel-grid-bg pixel-flicker" style={{ borderBottom: '2px solid var(--pixel-green)' }}>
      <div className="max-w-6xl mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-3" style={{ borderBottom: '1px solid var(--pixel-border-dim)' }}>
          <div className="font-pixel text-xs" style={{ color: 'var(--pixel-green)' }}>
            <span style={{ opacity: 0.5 }}>SYS:</span> PIXEL_MEDIA_v2.0
          </div>
          <div className="font-mono-pixel text-xs flex gap-4" style={{ color: 'var(--pixel-green)', opacity: 0.6 }}>
            <span>MEM: 64K</span>
            <span className="pixel-cursor">READY</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="py-4 overflow-x-auto">
          <ul className="flex gap-1 min-w-max">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={`font-pixel text-xs px-3 py-2 transition-none pixel-glitch ${
                    currentPage === item.id ? 'nav-active' : ''
                  }`}
                  style={{
                    color: currentPage === item.id ? 'var(--pixel-bg)' : 'var(--pixel-green)',
                    background: currentPage === item.id ? 'var(--pixel-green)' : 'transparent',
                    border: '1px solid var(--pixel-border-dim)',
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
