import React, { useEffect, useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [typed, setTyped] = useState('');
  const fullText = 'ПРИВЕТ, СОЗДАТЕЛЬ КОНТЕНТА_';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pixel-grid-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Hero greeting */}
        <div className="mb-8">
          <div className="font-pixel" style={{ color: 'var(--pixel-green)', fontSize: '10px', opacity: 0.6, marginBottom: 8 }}>
            {'>'} ЗАГРУЗКА ПРОФИЛЯ...
          </div>
          <h1 className="font-pixel leading-relaxed" style={{ color: 'var(--pixel-green)', fontSize: '14px', minHeight: 24 }}>
            {typed}
          </h1>
        </div>

        <div className="pixel-divider-stepped mb-8" />

        {/* Main layout: avatar + info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Avatar block */}
          <div className="pixel-card p-6 pixel-corner flex flex-col items-center gap-4">
            {/* Pixel avatar */}
            <div style={{ width: 80, height: 80, position: 'relative' }}>
              <svg width="80" height="80" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                style={{ imageRendering: 'pixelated' }}>
                {/* pixel person */}
                <rect x="5" y="1" width="6" height="6" fill="#00ff41"/>
                <rect x="4" y="2" width="1" height="4" fill="#00ff41"/>
                <rect x="11" y="2" width="1" height="4" fill="#00ff41"/>
                <rect x="6" y="3" width="1" height="1" fill="#0a0a0a"/>
                <rect x="9" y="3" width="1" height="1" fill="#0a0a0a"/>
                <rect x="6" y="5" width="4" height="1" fill="#0a0a0a"/>
                <rect x="4" y="7" width="8" height="5" fill="#00cc33"/>
                <rect x="3" y="8" width="2" height="4" fill="#00cc33"/>
                <rect x="11" y="8" width="2" height="4" fill="#00cc33"/>
                <rect x="4" y="12" width="3" height="3" fill="#00ff41"/>
                <rect x="9" y="12" width="3" height="3" fill="#00ff41"/>
              </svg>
            </div>
            <div className="font-pixel text-center" style={{ fontSize: '8px', color: 'var(--pixel-green)' }}>
              КОНТЕНТ<br />МАСТЕР
            </div>
            <div style={{ border: '1px solid var(--pixel-border-dim)', width: '100%' }} />
            <div className="font-mono-pixel text-xs text-center" style={{ color: 'var(--pixel-green)', opacity: 0.7 }}>
              LVL: PRO<br />
              CLASS: SMM
            </div>
          </div>

          {/* Resume / about block */}
          <div className="pixel-card p-6 md:col-span-2 pixel-corner">
            <div className="font-pixel mb-4" style={{ fontSize: '10px', color: 'var(--pixel-green)', opacity: 0.6 }}>
              // MY RESUME
            </div>
            <h2 className="font-pixel mb-4" style={{ fontSize: '12px', color: 'var(--pixel-green)' }}>
              PIXEL MEDIA HUB
            </h2>
            <p className="font-mono-pixel mb-4" style={{ fontSize: '13px', color: 'var(--pixel-green)', opacity: 0.85, lineHeight: 1.8 }}>
              Твой штаб по развитию социальных сетей.
              Здесь — инструменты, чеклисты, советы и всё,
              что нужно для роста в Telegram, VK, YouTube и TikTok.
            </p>
            <div className="pixel-divider" />
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'ПЛАТФОРМ', value: '4+' },
                { label: 'ЧЕКЛИСТОВ', value: '12+' },
                { label: 'СОВЕТОВ', value: '80+' },
                { label: 'ИНСТРУМЕНТОВ', value: '20+' },
              ].map((stat) => (
                <div key={stat.label} className="pixel-stat">
                  <div className="font-pixel" style={{ fontSize: '16px', color: 'var(--pixel-green)' }}>
                    {stat.value}
                  </div>
                  <div className="font-mono-pixel text-xs mt-1" style={{ color: 'var(--pixel-green)', opacity: 0.6 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills / platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          {/* PLATFORMS */}
          <div className="pixel-card p-6 pixel-corner">
            <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
              // PLATFORMS
            </div>
            {[
              { name: 'TELEGRAM', level: 90, icon: '✈' },
              { name: 'VK', level: 80, icon: '◆' },
              { name: 'YOUTUBE', level: 75, icon: '▶' },
              { name: 'TIKTOK', level: 70, icon: '♪' },
            ].map((platform) => (
              <div key={platform.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-pixel" style={{ fontSize: '8px', color: 'var(--pixel-green)' }}>
                    {platform.icon} {platform.name}
                  </span>
                  <span className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-green)', opacity: 0.6 }}>
                    {platform.level}%
                  </span>
                </div>
                <div className="pixel-progress-outer">
                  <div
                    className="pixel-progress-inner"
                    style={{ width: `${platform.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* LIKINGS */}
          <div className="pixel-card p-6 pixel-corner">
            <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
              // LIKINGS
            </div>
            <ul className="space-y-3">
              {[
                '► Регулярный контент',
                '► Аутентичность',
                '► Аналитика и цифры',
                '► Работа с аудиторией',
                '► Коллаборации',
                '► Тренды платформ',
              ].map((item) => (
                <li key={item} className="font-mono-pixel text-sm" style={{ color: 'var(--pixel-green)', opacity: 0.85 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="pixel-divider-stepped mb-8" />
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="pixel-btn" onClick={() => onNavigate('checklists')}>
            [ ОТКРЫТЬ ЧЕКЛИСТЫ ]
          </button>
          <button className="pixel-btn" onClick={() => onNavigate('tools')}>
            [ ИНСТРУМЕНТЫ ]
          </button>
          <button className="pixel-btn" onClick={() => onNavigate('test')}>
            [ ПРОЙТИ ТЕСТ ]
          </button>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
