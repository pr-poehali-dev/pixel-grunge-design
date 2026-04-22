import React, { useState } from 'react';

interface ChecklistItem {
  id: number;
  text: string;
  category: string;
}

const checklistItems: ChecklistItem[] = [
  { id: 1, text: 'Выбрать нишу и целевую аудиторию', category: 'СТАРТ' },
  { id: 2, text: 'Придумать уникальное название канала', category: 'СТАРТ' },
  { id: 3, text: 'Написать описание (до 255 символов)', category: 'СТАРТ' },
  { id: 4, text: 'Загрузить качественную аватарку', category: 'СТАРТ' },
  { id: 5, text: 'Настроить ссылку (username)', category: 'СТАРТ' },
  { id: 6, text: 'Опубликовать приветственный пост', category: 'КОНТЕНТ' },
  { id: 7, text: 'Составить контент-план на 2 недели', category: 'КОНТЕНТ' },
  { id: 8, text: 'Настроить реакции на постах', category: 'КОНТЕНТ' },
  { id: 9, text: 'Добавить закреплённое сообщение', category: 'КОНТЕНТ' },
  { id: 10, text: 'Включить защиту от копирования', category: 'НАСТРОЙКИ' },
  { id: 11, text: 'Подключить бота для аналитики', category: 'НАСТРОЙКИ' },
  { id: 12, text: 'Настроить автоответчик (бот)', category: 'НАСТРОЙКИ' },
  { id: 13, text: 'Разместить канал в 3 каталогах', category: 'ПРОДВИЖЕНИЕ' },
  { id: 14, text: 'Сделать взаимопиар с коллегами', category: 'ПРОДВИЖЕНИЕ' },
  { id: 15, text: 'Опубликовать пост во ВКонтакте со ссылкой', category: 'ПРОДВИЖЕНИЕ' },
  { id: 16, text: 'Настроить кнопки под постами', category: 'МОНЕТИЗАЦИЯ' },
  { id: 17, text: 'Выйти на 100 подписчиков', category: 'МОНЕТИЗАЦИЯ' },
  { id: 18, text: 'Изучить Telegram Ads', category: 'МОНЕТИЗАЦИЯ' },
];

const tips = [
  'Постить в одно и то же время каждый день',
  'Использовать эмодзи в заголовках',
  'Делать посты до 800 символов',
  'Опросы = рост вовлечённости',
  'Отвечай на комментарии первые 30 мин',
];

interface TelegramChecklistPageProps {
  onNavigate: (page: string) => void;
}

const TelegramChecklistPage: React.FC<TelegramChecklistPageProps> = ({ onNavigate }) => {
  const [checked, setChecked] = useState<Set<number>>(new Set([2, 4]));

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
  const progressBar = '='.repeat(progressSteps) + '>'.repeat(progressSteps < 20 ? 1 : 0) + ' '.repeat(Math.max(0, 19 - progressSteps));

  const categories = [...new Set(checklistItems.map((i) => i.category))];

  return (
    <div className="pixel-grid-bg min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Breadcrumb */}
        <div className="font-pixel mb-4 flex items-center gap-2" style={{ fontSize: '8px', color: 'var(--pixel-green)', opacity: 0.6 }}>
          <button onClick={() => onNavigate('checklists')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'inherit', opacity: 0.7 }}>
            /ЧЕКЛИСТЫ
          </button>
          <span>/</span>
          <span>TELEGRAM</span>
        </div>

        <h1 className="font-pixel mb-2 pixel-glow" style={{ fontSize: '16px', color: 'var(--pixel-green)' }}>
          ✈ ЧЕКЛИСТ TELEGRAM
        </h1>
        <div className="font-mono-pixel mb-6" style={{ fontSize: '12px', color: 'var(--pixel-green)', opacity: 0.6 }}>
          {checked.size}/{checklistItems.length} выполнено
        </div>

        {/* Progress bar */}
        <div className="pixel-card p-4 mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="font-pixel" style={{ fontSize: '8px', color: 'var(--pixel-green)', opacity: 0.7 }}>ПРОГРЕСС</span>
            <span className="font-pixel" style={{ fontSize: '10px', color: 'var(--pixel-green)' }}>{progress}%</span>
          </div>
          <div className="pixel-progress-outer mb-2">
            <div
              className="pixel-progress-inner"
              style={{ width: `${progress}%`, transition: 'width 0.3s steps(10)' }}
            />
          </div>
          <div className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-green)', opacity: 0.5 }}>
            [{progressBar}] {progress}%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Checklist */}
          <div className="md:col-span-2 space-y-6">
            {categories.map((cat) => (
              <div key={cat} className="pixel-card pixel-corner p-5">
                <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
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
                        <div
                          className={`pixel-checkbox mt-1 flex-shrink-0 ${checked.has(item.id) ? 'checked' : ''}`}
                        />
                        <span
                          className="font-mono-pixel text-sm"
                          style={{
                            color: 'var(--pixel-green)',
                            opacity: checked.has(item.id) ? 0.4 : 0.9,
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

            {/* Download */}
            <div className="flex gap-3">
              <button className="pixel-btn" style={{ fontSize: '9px' }}>
                [ СКАЧАТЬ PDF ]
              </button>
              <button
                className="pixel-btn"
                style={{ fontSize: '9px' }}
                onClick={() => setChecked(new Set())}
              >
                [ СБРОСИТЬ ]
              </button>
            </div>
          </div>

          {/* Tips sidebar */}
          <div className="space-y-4">
            <div className="pixel-card pixel-corner p-5">
              <div className="font-pixel mb-4" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
                // СОВЕТЫ
              </div>
              <ul className="space-y-4">
                {tips.map((tip, idx) => (
                  <li key={idx} className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-green)', opacity: 0.8, lineHeight: 1.7 }}>
                    <span style={{ color: 'var(--pixel-green)', opacity: 0.4 }}>
                      {String(idx + 1).padStart(2, '0')}.{' '}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stats mini */}
            <div className="pixel-card p-5">
              <div className="font-pixel mb-3" style={{ fontSize: '9px', color: 'var(--pixel-green)', opacity: 0.6 }}>
                // СТАТИСТИКА
              </div>
              <div className="space-y-3">
                <div className="pixel-stat">
                  <div className="font-pixel" style={{ fontSize: '14px', color: 'var(--pixel-green)' }}>
                    {checked.size}
                  </div>
                  <div className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-green)', opacity: 0.5 }}>
                    ВЫПОЛНЕНО
                  </div>
                </div>
                <div className="pixel-stat">
                  <div className="font-pixel" style={{ fontSize: '14px', color: 'var(--pixel-green)' }}>
                    {checklistItems.length - checked.size}
                  </div>
                  <div className="font-mono-pixel text-xs" style={{ color: 'var(--pixel-green)', opacity: 0.5 }}>
                    ОСТАЛОСЬ
                  </div>
                </div>
              </div>
            </div>

            <button className="pixel-btn w-full text-center" style={{ fontSize: '8px' }} onClick={() => onNavigate('checklists')}>
              [ ← НАЗАД ]
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TelegramChecklistPage;
