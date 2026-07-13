# Portfolio — Versione statica (HTML / CSS / JS)

Progetto pronto da modificare in **VS Code**. Nessun framework, nessuna build.

## Struttura

```
portfolio-static/
├── index.html          # Home
├── curriculum.html     # CV, formazione, competenze, documenti scaricabili
├── contatti.html       # Form contatti (apre client email)
├── css/
│   └── style.css       # Stili + variabili colore (personalizzabili)
├── js/
│   └── main.js         # Fade-in scroll, modale anteprima PDF, form mailto
├── docs/               # PDF (CV + 4 attestati)
└── images/
    └── proprietario.jpg  # <-- inserisci qui la tua foto
```

## Come usarlo

1. Scompatta la cartella.
2. Aprila in VS Code.
3. Doppio click su `index.html` per vederla nel browser,
   oppure usa l'estensione **"Live Server"** per il ricaricamento automatico.

## Personalizzazioni rapide

- **Colori/font**: modifica le variabili `:root { --primary: ...; }` in `css/style.css`.
- **Foto profilo**: sostituisci `images/proprietario.jpg`.
- **Email destinatario**: cambia `nunziap1975@gmail.com` in `js/main.js` (funzione submit del form).
- **Testi/contenuti**: sono direttamente nei file `.html`, ben commentati con sezioni tipo `<!-- ============ ESPERIENZE ============ -->`.
- **Aggiungere/rimuovere attestati**: duplica un blocco `<div class="card doc-card">...</div>` in `curriculum.html` e cambia titolo + percorso PDF.

## Note

- I PDF vengono aperti in anteprima dentro una modale (`<iframe>`), o scaricati.
- Il form contatti usa `mailto:` — apre il client email dell'utente. Per un invio server-side servirebbe un backend (es. Formspree, EmailJS).
- Tutte le icone sono emoji, così non serve nessuna libreria esterna. Se vuoi icone SVG proper, sostituiscile con Lucide/Feather.
