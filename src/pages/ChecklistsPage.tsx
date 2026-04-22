import React from 'react';

interface ChecklistsPageProps {
  onNavigate: (page: string) => void;
}

const platforms = [
  {
    id: 'telegram',
    name: 'TELEGRAM',
    icon: '✈',
    desc: 'Каналы, боты, воронки',
    items: 24,
    color: '#00ff41',
  },
  {
    id: 'vk',
    name: 'VK',
    icon: '◆',
    desc: 'Группы, таргет, контент',
    items: 20,
    color: '#00ff41',
  },
  {
    id: 'youtube',
    name: 'MAX (YOUTUBE)',
    icon: '▶',
    desc: 'Видео, SEO, монетизация',
    items: 18,
    color: '#00ff41',
  },
  {
    id: 'tiktok',
    name: 'TIKTOK',
    icon: '♪',
    desc: 'Вирусность, тренды, рост',
    items: 16,
    color: '#00ff41',
  },
];

const ChecklistsPage: React.FC<ChecklistsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pixel-grid-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-2">
          <div className="font-pixel" style={{ fontSize: '10px', color: 'var(--pixel-green)', opacity: 0.6 }}>
            {'>'} /CHECKLISTS
          </div>
        </div>
        <h1 className="font-pixel mb-6 pixel-glow" style={{ fontSize: '20px', color: 'var(--pixel-green)' }}>
          ЧЕКЛИСТЫ
        </h1>

        <div className="pixel-divider-stepped mb-8" />

        {/* What is it */}
        <div className="pixel-card p-6 pixel-corner mb-8">
          <div className="font-pixel mb-3" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
            // ЧТО ЭТО?
          </div>
          <p className="font-mono-pixel" style={{ fontSize: '14px', color: 'var(--pixel-green)', opacity: 0.85, lineHeight: 2 }}>
            Пиксельные чеклисты — пошаговые руководства для старта
            и развития твоих соцсетей. Каждый пункт проверен
            на реальных каналах и аккаунтах. Отмечай выполненное,
            следи за прогрессом, качай свои платформы.
          </p>
          <div className="pixel-divider" />
          <div className="flex flex-wrap gap-3">
            {['БЕСПЛАТНО', 'ОБНОВЛЯЕТСЯ', 'PDF ЭКСПОРТ', 'ПРОГРЕСС'].map((tag) => (
              <span key={tag} className="font-pixel"
                style={{
                  fontSize: '8px',
                  border: '1px solid var(--pixel-green)',
                  padding: '4px 8px',
                  color: 'var(--pixel-green)',
                  opacity: 0.8,
                }}>
                [{tag}]
              </span>
            ))}
          </div>
        </div>

        {/* Platform cards */}
        <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
          // ВЫБЕРИ ПЛАТФОРМУ:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, idx) => (
            <div key={platform.id} className="pixel-card pixel-corner" style={{ position: 'relative', overflow: 'hidden' }}>
              {/* Top accent line */}
              <div style={{ height: 3, background: 'var(--pixel-green)', marginBottom: 0 }} />

              <div className="p-6">
                {/* Icon + name */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-pixel mb-2" style={{ fontSize: '24px', color: 'var(--pixel-green)' }}>
                      {platform.icon}
                    </div>
                    <div className="font-pixel" style={{ fontSize: '11px', color: 'var(--pixel-green)' }}>
                      █ {platform.name}
                    </div>
                  </div>
                  <div className="font-pixel text-right" style={{ fontSize: '8px', color: 'var(--pixel-green)', opacity: 0.5 }}>
                    #{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                <p className="font-mono-pixel mb-4" style={{ fontSize: '13px', color: 'var(--pixel-green)', opacity: 0.7 }}>
                  {platform.desc}
                </p>

                {/* Items count */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="pixel-progress-outer" style={{ flex: 1, height: 12 }}>
                    <div className="pixel-progress-inner" style={{ width: '0%' }} />
                  </div>
                  <span className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-green)', opacity: 0.6, whiteSpace: 'nowrap' }}>
                    0/{platform.items}
                  </span>
                </div>

                {/* CTA */}
                <button
                  className="pixel-btn w-full text-center"
                  onClick={() => onNavigate(platform.id === 'telegram' ? 'checklist-telegram' : platform.id)}
                  style={{ fontSize: '9px' }}
                >
                  [ ОТКРЫТЬ ]
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pixel-divider-stepped mt-8" />
        <div className="font-mono-pixel text-xs text-center mt-4" style={{ color: 'var(--pixel-green)', opacity: 0.4 }}>
          {'>'} ИТОГО 4 ПЛАТФОРМЫ // 78 ПУНКТОВ // ВЕРСИЯ 2.0
        </div>

      </div>
    </div>
  );
};

export default ChecklistsPage;
