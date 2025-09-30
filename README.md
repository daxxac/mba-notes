# MBA Study Materials | Dasha's IMBA Notes

Comprehensive MBA study materials covering Finance, Management, Marketing, Operations & more. Free business education resources from International MBA program.

## 📚 What's here

Since August 2024, I've been studying at **Bar-Ilan University** on a special track **IMBA + Cyber Security**, and here I collect some of my study notes.

- **📊 Corporate Finance** - Advanced financial analysis, valuation, and corporate decision-making
- **🎯 Game Theory** - Strategic thinking and decision-making in competitive environments  
- **🌍 Cross-Cultural Negotiations** - International business negotiations and cultural intelligence
- **💰 Principles of Finance** - Fundamental finance concepts and financial statement analysis
- **🇮🇱 Middle East Economics** - Economic development and regional dynamics with focus on Israel's transformation

## Локальная разработка

### Требования
- Node.js 20.0 или выше
- npm

### Установка и запуск

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm start

# Сборка для продакшена
npm run build

# Предварительный просмотр сборки
npm run serve
```

## Деплой

Сайт автоматически деплоится на `mba.daxxac.dev` при пуше в ветку `main` через GitHub Actions.

### Настройка деплоя

1. Создайте репозиторий на GitHub
2. Добавьте remote origin:
   ```bash
   git remote add origin https://github.com/daxxac/mba-notes.git
   ```
3. Запушьте код:
   ```bash
   git push -u origin main
   ```
4. В настройках репозитория включите GitHub Pages
5. Настройте DNS для домена `mba.daxxac.dev`

## Структура проекта

```
docs/
├── intro.md                           # Главная страница
├── corporate-finance.md               # Корпоративные финансы
├── game-theory.md                     # Теория игр
├── cross-cultural-negotiations.md     # Межкультурные переговоры
├── principles-of-finance.md           # Принципы финансов
├── middle-east-economics.md           # Экономика Ближнего Востока
└── operations/
    └── cross-cultural-negotiations.md # Дополнительные материалы по переговорам
```

## Добавление новых конспектов

1. Создайте новый файл в соответствующей папке
2. Добавьте метаданные в начале файла:
   ```markdown
   ---
   sidebar_position: 1
   ---
   ```
3. Обновите `sidebars.ts` при необходимости
4. Зафиксируйте изменения в Git

## Технологии

- [Docusaurus](https://docusaurus.io/) - генератор статических сайтов
- [React](https://reactjs.org/) - UI библиотека
- [TypeScript](https://www.typescriptlang.org/) - типизированный JavaScript
- [GitHub Actions](https://github.com/features/actions) - CI/CD
- [GitHub Pages](https://pages.github.com/) - хостинг