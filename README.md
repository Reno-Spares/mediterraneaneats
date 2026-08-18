# Mediterranean Food Truck

Marketing site for the Mediterranean Food Truck (Jason Bechara, Central West NSW),
built from the 2026 season flyer. React + TypeScript + Vite.

## Run it

```bash
npm install
npm run dev      # dev server
npm run build    # type-check + production build to dist/
npm run lint     # oxlint
```

## Pages

Routing is hash-based (`#/`, `#/food`, `#/events`, `#/contact`) so the built
`dist/` folder can be dropped on any static host with no server rewrites.

| Route       | Page    | Contents                                                      |
| ----------- | ------- | ------------------------------------------------------------- |
| `#/`        | Home    | Hero, award strip, what-we-cook, next three events, booking CTA |
| `#/food`    | Food    | Full menu grouped into fryer / wraps / dips & salads / drinks  |
| `#/events`  | Events  | Tabbed **Upcoming** and **Attended** lists for the 2026 season |
| `#/contact` | Contact | Contact details plus an enquiry form                           |

## Editing content

All copy that changes season to season lives in `src/data.ts`:

- `menu` — menu sections and items, with optional dietary tags
- `attended` / `upcoming` — the event lists behind the Events page and the
  "where to find us next" block on the home page
- `business` — owner, phone, email, region, award line

**The event months in `src/data.ts` are placeholders.** They were inferred from
the flyer, which lists the events but not their dates. Replace them with the real
dates before the site goes live. Moving an event from `upcoming` to `attended`
(and re-sorting) is all that is needed as the season progresses.

## Contact form

There is no backend. Submitting builds a `mailto:` link to the business address
with the enquiry pre-filled, and the visitor sends it from their own mail app.
To take submissions server-side instead, replace the `handleSubmit` body in
`src/pages/Contact.tsx` with a POST to a form service (Formspree, Netlify Forms,
etc.).

## Assets

`src/assets/flyer.jpeg` is the original 2026 flyer, shown on the home page.
Fonts (Archivo Black, Kaushan Script, Inter) load from Google Fonts in
`index.html`.
