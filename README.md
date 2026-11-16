# Personal website

Personal academic website. Plain HTML, CSS and JS, no framework.

- `js/data.js`: all the content (bio, papers, projects, talks, teaching)
- `js/i18n.js`: Spanish, French and German translations
- `js/main.js`: renders the content and handles the language menu
- `css/style.css`

Open `index.html` directly, or run a dev server with live reload:

```bash
npm install
npm run dev
```

When editing an English text in `data.js`, update the matching entry in `i18n.js`;
otherwise that text shows in English in every language.
