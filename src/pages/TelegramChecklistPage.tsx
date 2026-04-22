import React, { useState } from 'react';

interface ChecklistItem {
  id: number;
  text: string;
  category: string;
}

const checklistItems: ChecklistItem[] = [
  { id: 1, text: 'Включить двухфакторную аутентификацию', category: 'АККАУНТ' },
  { id: 2, text: 'Установить пароль на приложение', category: 'АККАУНТ' },
  { id: 3, text: 'Проверить активные сеансы и закрыть чужие', category: 'АККАУНТ' },
  { id: 4, text: 'Привязать резервный email', category: 'АККАУНТ' },
  { id: 5, text: 'Скрыть номер телефона от всех', category: 'ПРИВАТНОСТЬ' },
  { id: 6, text: 'Ограничить кто может видеть фото профиля', category: 'ПРИВАТНОСТЬ' },
  { id: 7, text: 'Отключить «Последний раз онлайн» для чужих', category: 'ПРИВАТНОСТЬ' },
  { id: 8, text: 'Запретить добавлять в группы всем подряд', category: 'ПРИВАТНОСТЬ' },
  { id: 9, text: 'Отключить пересылку сообщений с именем', category: 'ПРИВАТНОСТЬ' },
  { id: 10, text: 'Не переходить по ссылкам от незнакомцев', category: 'УГРОЗЫ' },
  { id: 11, text: 'Проверить права у установленных ботов', category: 'УГРОЗЫ' },
  { id: 12, text: 'Не давать ботам доступ к контактам', category: 'УГРОЗЫ' },
  { id: 13, text: 'Включить автоудаление сообщений в чатах', category: 'ДАННЫЕ' },
  { id: 14, text: 'Удалить переписки с личными данными', category: 'ДАННЫЕ' },
  { id: 15, text: 'Проверить облачный чат «Избранное»', category: 'ДАННЫЕ' },
  { id: 16, text: 'Настроить время удаления аккаунта при неактивности', category: 'ДАННЫЕ' },
  { id: 17, text: 'Использовать секретные чаты для важного', category: 'ШИФРОВАНИЕ' },
  { id: 18, text: 'Проверить, что секретный чат не скриншотится', category: 'ШИФРОВАНИЕ' },
];

const tips = [
  'Секретные чаты шифруются E2E — используй их для важных разговоров',
  'Боты видят всё, что им пишешь — доверяй только проверенным',
  'Фейковые «Telegram» в списке могут красть сессию',
  'Регулярно проверяй активные сеансы в настройках',
  'Пароль на приложение — первый барьер при краже телефона',
];

interface TelegramChecklistPageProps {
  onNavigate: (page: string) => void;
}

const TelegramChecklistPage: React.FC<TelegramChecklistPageProps> = ({ onNavigate }) => {
  const [checked, setChecked] = useState<Set<number>>(new Set([1, 5]));

  const toggle = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const progress = Math.round((checked.size / checklistItems.length) * 100);
  const progressSteps = Math.round((progress / 100) * 20);
  const progressBar = '='.repeat(progressSteps) + (progressSteps < 20 ? '>' : '') + ' '.repeat(Math.max(0, 19 - progressSteps));

  const categories = [...new Set(checklistItems.map((i) => i.category))];

  return (
    <div className="pixel-grid-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div className="font-pixel mb-4 flex items-center gap-2" style={{ fontSize: '8px', color: 'var(--pixel-text-dim)' }}>
          <button onClick={() => onNavigate('checklists')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--pixel-blue)', fontFamily: 'inherit', fontSize: 'inherit' }}>
            /ЧЕКЛИСТЫ
          </button>
          <span>/</span>
          <span>TELEGRAM</span>
        </div>

        <h1 className="font-pixel mb-2 pixel-glow" style={{ fontSize: '14px', color: 'var(--pixel-blue)' }}>
          ✈️ ЗАЩИТА TELEGRAM
        </h1>
        <div className="font-mono-pixel mb-6" style={{ fontSize: '12px', color: 'var(--pixel-text-dim)' }}>
          {checked.size}/{checklistItems.length} пунктов выполнено
        </div>

        {/* Progress */}
        <div className="pixel-card p-4 mb-8" style={{ background: 'var(--pixel-bg-section)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel" style={{ fontSize: '8px', color: 'var(--pixel-text-dim)' }}>ПРОГРЕСС ЗАЩИТЫ</span>
            <span className="font-pixel" style={{ fontSize: '10px', color: 'var(--pixel-blue)' }}>{progress}%</span>
          </div>
          <div className="pixel-progress-outer mb-2">
            <div className="pixel-progress-inner" style={{ width: `${progress}%`, transition: 'width 0.3s steps(10)' }} />
          </div>
          <div className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-text-dim)' }}>
            [{progressBar}] {progress}%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Checklist */}
          <div className="md:col-span-2 space-y-5">
            {categories.map((cat) => (
              <div key={cat} className="pixel-card p-5">
                <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
                  // {cat}
                </div>
                <ul className="space-y-3">
                  {checklistItems
                    .filter((item) => item.category === cat)
                    .map((item) => (
                      <li
                        key={item.id}
                        className="flex items-start gap-3 cursor-pointer"
                        onClick={() => toggle(item.id)}
                        style={{ userSelect: 'none' }}
                      >
                        <div className={`pixel-checkbox mt-1 ${checked.has(item.id) ? 'checked' : ''}`} />
                        <span
                          className="font-mono-pixel text-sm"
                          style={{
                            color: 'var(--pixel-text)',
                            opacity: checked.has(item.id) ? 0.4 : 1,
                            textDecoration: checked.has(item.id) ? 'line-through' : 'none',
                            lineHeight: 1.6,
                          }}
                        >
                          {item.text}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}

            <div className="flex gap-3 flex-wrap">
              <button className="pixel-btn" style={{ fontSize: '9px' }}>
                [ СКАЧАТЬ PDF ]
              </button>
              <button
                className="pixel-btn-outline"
                style={{ fontSize: '9px' }}
                onClick={() => setChecked(new Set())}
              >
                [ СБРОСИТЬ ]
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <div className="pixel-card-pink p-5">
              <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-pink-dark)' }}>
                // СОВЕТЫ
              </div>
              <ul className="space-y-4">
                {tips.map((tip, idx) => (
                  <li key={idx} className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-text)', lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--pixel-pink-dark)', fontFamily: 'Press Start 2P, monospace', fontSize: '8px' }}>
                      {String(idx + 1).padStart(2, '0')}.{' '}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pixel-card p-5">
              <div className="font-pixel mb-3" style={{ fontSize: '9px', color: 'var(--pixel-text-dim)' }}>
                // СТАТИСТИКА
              </div>
              <div className="space-y-3">
                <div className="pixel-stat">
                  <div className="font-pixel" style={{ fontSize: '14px', color: 'var(--pixel-blue)' }}>
                    {checked.size}
                  </div>
                  <div className="font-mono-pixel text-xs mt-1" style={{ color: 'var(--pixel-text-dim)' }}>
                    ВЫПОЛНЕНО
                  </div>
                </div>
                <div className="pixel-stat-pink">
                  <div className="font-pixel" style={{ fontSize: '14px', color: 'var(--pixel-pink-dark)' }}>
                    {checklistItems.length - checked.size}
                  </div>
                  <div className="font-mono-pixel text-xs mt-1" style={{ color: 'var(--pixel-text-dim)' }}>
                    ОСТАЛОСЬ
                  </div>
                </div>
              </div>
            </div>

            <button className="pixel-btn-outline w-full text-center" style={{ fontSize: '8px' }} onClick={() => onNavigate('checklists')}>
              [ ← НАЗАД ]
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TelegramChecklistPage;
