import React, { useEffect, useState } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [typed, setTyped] = useState('');
  const fullText = 'ЗАЩИТИ СЕБЯ В СЕТИ_';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTyped(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 70);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pixel-grid-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Hero */}
        <div className="mb-6">
          <div className="font-pixel mb-2" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
            {'>'} СИСТЕМА БЕЗОПАСНОСТИ v2.0
          </div>
          <h1 className="font-pixel leading-relaxed pixel-glow" style={{ color: 'var(--pixel-blue)', fontSize: '14px', minHeight: 24 }}>
            {typed}
          </h1>
        </div>

        <div className="pixel-divider-stepped mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          {/* Shield avatar */}
          <div className="pixel-card p-6 flex flex-col items-center gap-4" style={{ background: 'var(--pixel-bg-section)' }}>
            <div style={{ width: 80, height: 80 }} className="pixel-float">
              <svg width="80" height="80" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"
                style={{ imageRendering: 'pixelated' }}>
                <rect x="3" y="1" width="10" height="1" fill="#5b8dee"/>
                <rect x="2" y="2" width="12" height="1" fill="#5b8dee"/>
                <rect x="2" y="3" width="12" height="6" fill="#5b8dee"/>
                <rect x="3" y="9" width="10" height="2" fill="#5b8dee"/>
                <rect x="4" y="11" width="8" height="2" fill="#5b8dee"/>
                <rect x="5" y="13" width="6" height="1" fill="#5b8dee"/>
                <rect x="6" y="14" width="4" height="1" fill="#5b8dee"/>
                <rect x="7" y="15" width="2" height="1" fill="#5b8dee"/>
                <rect x="5" y="5" width="2" height="2" fill="#ffffff"/>
                <rect x="7" y="7" width="2" height="2" fill="#ffffff"/>
                <rect x="9" y="4" width="2" height="4" fill="#ffffff"/>
                <rect x="3" y="2" width="3" height="3" fill="#c8dcff" opacity="0.6"/>
              </svg>
            </div>
            <div className="font-pixel text-center" style={{ fontSize: '8px', color: 'var(--pixel-blue)' }}>
              CYBER<br />GUARD
            </div>
            <div style={{ border: '2px dashed var(--pixel-border-dim)', width: '100%' }} />
            <div className="font-mono-pixel text-xs text-center" style={{ color: 'var(--pixel-text-dim)' }}>
              УРОВЕНЬ: ЭКСПЕРТ<br />
              РЕЖИМ: ЗАЩИТА
            </div>
          </div>

          {/* About */}
          <div className="pixel-card p-6 md:col-span-2">
            <div className="font-pixel mb-3" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
              // О ПРОЕКТЕ
            </div>
            <h2 className="font-pixel mb-4" style={{ fontSize: '11px', color: 'var(--pixel-blue)', lineHeight: 2 }}>
              ИНФОБЕЗОПАСНОСТЬ<br />В СОЦСЕТЯХ
            </h2>
            <p className="font-mono-pixel mb-4" style={{ fontSize: '13px', color: 'var(--pixel-text)', lineHeight: 1.9 }}>
              Узнай, как защитить личные данные в Telegram,
              VK, YouTube и TikTok. Чеклисты, инструменты
              и пошаговые рекомендации — чтобы твой аккаунт
              был под надёжной защитой.
            </p>
            <div className="pixel-divider" />
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'ПЛАТФОРМ', value: '4+' },
                { label: 'УГРОЗ', value: '50+' },
                { label: 'СОВЕТОВ', value: '80+' },
                { label: 'ЧЕКЛИСТОВ', value: '12+' },
              ].map((stat) => (
                <div key={stat.label} className="pixel-stat">
                  <div className="font-pixel" style={{ fontSize: '16px', color: 'var(--pixel-blue)' }}>
                    {stat.value}
                  </div>
                  <div className="font-mono-pixel text-xs mt-1" style={{ color: 'var(--pixel-text-dim)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Угрозы + базовая защита */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

          <div className="pixel-card p-6">
            <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
              // ТОП УГРОЗ
            </div>
            {[
              { name: 'ВЗЛОМ АККАУНТА', level: 95, icon: '⚠️' },
              { name: 'ФИШИНГ', level: 88, icon: '🎣' },
              { name: 'УТЕЧКА ДАННЫХ', level: 80, icon: '💧' },
              { name: 'СЛЕЖКА', level: 72, icon: '👁️' },
            ].map((threat) => (
              <div key={threat.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-pixel" style={{ fontSize: '7px', color: 'var(--pixel-text)' }}>
                    {threat.icon} {threat.name}
                  </span>
                  <span className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-text-dim)' }}>
                    {threat.level}%
                  </span>
                </div>
                <div className="pixel-progress-outer" style={{ borderColor: 'var(--pixel-pink-dark)', background: 'var(--pixel-pink-light)' }}>
                  <div
                    className="pixel-progress-inner"
                    style={{
                      width: `${threat.level}%`,
                      background: 'linear-gradient(90deg, var(--pixel-pink-dark) 0%, var(--pixel-purple) 100%)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pixel-card-pink p-6">
            <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-pink-dark)' }}>
              // БАЗОВАЯ ЗАЩИТА
            </div>
            <ul className="space-y-3">
              {[
                '🔐 Включи двухфакторную аутентификацию',
                '🔑 Уникальный пароль для каждого сайта',
                '📵 Не переходи по ссылкам в личках',
                '👤 Закрой профиль от посторонних',
                '📍 Отключи геолокацию в постах',
                '🛡️ Проверяй права приложений',
              ].map((item) => (
                <li key={item} className="font-mono-pixel text-sm" style={{ color: 'var(--pixel-text)', lineHeight: 1.7 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="pixel-divider-pink mb-6" />
        <div className="flex flex-wrap gap-4 justify-center">
          <button className="pixel-btn" onClick={() => onNavigate('checklists')}>
            [ ЧЕКЛИСТЫ ]
          </button>
          <button className="pixel-btn-pink" onClick={() => onNavigate('tools')}>
            [ ИНСТРУМЕНТЫ ]
          </button>
          <button className="pixel-btn-outline" onClick={() => onNavigate('test')}>
            [ ТЕСТ БЕЗОПАСНОСТИ ]
          </button>
        </div>

      </div>
    </div>
  );
};

export default HomePage;
