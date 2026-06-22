# PhillyHair MD — Landing Pages

Next.js landing page host for `more.phillyhairmd.com`.

## Adding Pages

Each page is a folder under `app/`:

```
app/
  hair-restoration-google/page.tsx   ← more.phillyhairmd.com/hair-restoration-google
  fue-transplant-google/page.tsx     ← more.phillyhairmd.com/fue-transplant-google
```

## Shared Components

- `GhlForm` — GHL iframe with GCLID + UTM passthrough
- `GclidCapture` — sessionStorage GCLID capture on page load
- `FaqAccordion` — FAQ section
- `ReviewCard` — patient review card

## GTM / Tracking

GTM container: `GTM-TG4Z4QP5`
GHL chat widget: `6683f4961123b126099a8638`

## Deploy

Push to `main` → Coolify auto-builds and deploys to `more.phillyhairmd.com`.
