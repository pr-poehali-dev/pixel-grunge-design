import React from 'react';

interface ChecklistsPageProps {
  onNavigate: (page: string) => void;
}

const platforms = [
  {
    id: 'telegram',
    name: 'TELEGRAM',
    icon: '✈️',
    desc: 'Приватность, боты, пароли на чаты',
    items: 24,
    cardClass: 'pixel-card',
    tagClass: 'pixel-tag',
    accent: 'var(--pixel-blue)',
  },
  {
    id: 'vk',
    name: 'ВКОНТАКТЕ',
    icon: '◆',
    desc: 'Настройки приватности, удаление данных',
    items: 20,
    cardClass: 'pixel-card-pink',
    tagClass: 'pixel-tag-pink',
    accent: 'var(--pixel-pink-dark)',
  },
  {
    id: 'youtube',
    name: 'YOUTUBE',
    icon: '▶',
    desc: 'История просмотров, безопасность аккаунта',
    items: 18,
    cardClass: 'pixel-card-purple',
    tagClass: 'pixel-tag-purple',
    accent: 'var(--pixel-purple-dark)',
  },
  {
    id: 'tiktok',
    name: 'TIKTOK',
    icon: '♪',
    desc: 'Защита от слежки, контроль данных',
    items: 16,
    cardClass: 'pixel-card',
    tagClass: 'pixel-tag',
    accent: 'var(--pixel-blue)',
  },
];

const ChecklistsPage: React.FC<ChecklistsPageProps> = ({ onNavigate }) => {
  return (
    <div className="pixel-grid-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        <div className="mb-2">
          <div className="font-pixel" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
            {'>'} /CHECKLISTS
          </div>
        </div>
        <h1 className="font-pixel mb-6 pixel-glow" style={{ fontSize: '18px', color: 'var(--pixel-blue)' }}>
          ЧЕКЛИСТЫ
        </h1>

        <div className="pixel-divider-stepped mb-8" />

        {/* What is it */}
        <div className="pixel-card p-6 mb-8" style={{ background: 'var(--pixel-bg-section)' }}>
          <div className="font-pixel mb-3" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
            // ЧТО ЭТО?
          </div>
          <p className="font-mono-pixel mb-4" style={{ fontSize: '14px', color: 'var(--pixel-text)', lineHeight: 1.9 }}>
            Пошаговые чеклисты по защите аккаунтов в каждой
            социальной сети. Проверь свои настройки, закрой
            уязвимости и убедись, что твои данные в безопасности.
            Каждый пункт — конкретное действие.
          </p>
          <div className="pixel-divider" />
          <div className="flex flex-wrap gap-3">
            {['БЕСПЛАТНО', 'ОБНОВЛЯЕТСЯ', 'PDF ЭКСПОРТ', 'ПРОГРЕСС'].map((tag) => (
              <span key={tag} className="pixel-tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
          // ВЫБЕРИ ПЛАТФОРМУ:
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, idx) => (
            <div key={platform.id} className={platform.cardClass} style={{ position: 'relative', overflow: 'hidden' }}>
              <div style={{ height: 4, background: platform.accent }} />
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="font-pixel mb-2" style={{ fontSize: '22px', color: platform.accent }}>
                      {platform.icon}
                    </div>
                    <div className="font-pixel" style={{ fontSize: '11px', color: platform.accent }}>
                      █ {platform.name}
                    </div>
                  </div>
                  <div className="font-pixel" style={{ fontSize: '8px', color: 'var(--pixel-text-dim)' }}>
                    #{String(idx + 1).padStart(2, '0')}
                  </div>
                </div>

                <p className="font-mono-pixel mb-4" style={{ fontSize: '13px', color: 'var(--pixel-text)', opacity: 0.8 }}>
                  {platform.desc}
                </p>

                <div className="flex items-center gap-3 mb-5">
                  <div className="pixel-progress-outer" style={{ flex: 1, height: 14, borderColor: platform.accent, background: 'var(--pixel-blue-light)' }}>
                    <div className="pixel-progress-inner" style={{ width: '0%', background: platform.accent }} />
                  </div>
                  <span className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-text-dim)', whiteSpace: 'nowrap' }}>
                    0/{platform.items}
                  </span>
                </div>

                <button
                  className="pixel-btn w-full text-center"
                  onClick={() => onNavigate(platform.id === 'telegram' ? 'checklist-telegram' : platform.id)}
                  style={{ fontSize: '9px', background: platform.accent, borderColor: platform.accent }}
                >
                  [ ОТКРЫТЬ ]
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pixel-divider-stepped mt-8" />
        <div className="font-mono-pixel text-xs text-center mt-4" style={{ color: 'var(--pixel-text-dim)' }}>
          {'>'} 4 ПЛАТФОРМЫ // 78 ПУНКТОВ // ВЕРСИЯ 2.0
        </div>

      </div>
    </div>
  );
};

export default ChecklistsPage;
