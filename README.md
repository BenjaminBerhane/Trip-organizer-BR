# Trip Organizer BR

Trip Organizer BR är en webbapplikation byggd med React och Vite som hjälper användare att planera och hantera sina resor. Användare kan skapa, redigera och visa detaljer om sina resor på ett enkelt och intuitivt sätt.

## Funktioner

- **Skapa och hantera resor**: Lägg till nya resor med detaljer som destination, datum och beskrivning.
- **Visa resedetaljer**: Se all relevant information om en specifik resa.
- **Responsiv design**: Anpassar sig för att fungera smidigt på både desktop och mobila enheter.

## Teknisk översikt

Projektet är strukturerat enligt följande:

```
/src
├── /components
│   ├── TripForm.jsx        # Formulär för att skapa/redigera resor
│   ├── TripList.jsx        # Lista över alla planerade resor
│   ├── TripDetails.jsx     # Detaljerad vy av en specifik resa
│   └── Navbar.jsx          # Navigationsmeny
├── /pages
│   ├── Trips.jsx           # Sida för att visa och hantera resor
│   └── TripView.jsx        # Sida för att visa detaljer om en specifik resa
├── /utils
│   └── storage.js          # Funktioner för att spara och hämta resor från localStorage
├── App.jsx                 # Huvudkomponenten med React Router
├── main.jsx                # Root-rendering och router-provider
└── index.css               # Global CSS eller Tailwind-import
```

## Installation

Följ dessa steg för att köra projektet lokalt:

1. **Klona repositoryt**:

   ```bash
   git clone https://github.com/BenjaminBerhane/Trip-organizer-BR.git
   cd Trip-organizer-BR
   ```

2. **Installera beroenden**:

    Se till att du har Node.js installerat.   Kör sedan:  

   ```bash
   npm install
   ```

3. **Starta utvecklingsservern**:

   ```bash
   npm run dev
   ```

    Applikationen bör nu vara tillgänglig på `http://localhost:3000`.  

## Bygga för produktion

För att skapa en produktionsbuild, kör:

```bash
npm run build
```


Denna kommando genererar en `dist`-mapp med de optimerade filerna.

## Beroenden

Projektet använder följande huvudsakliga beroenden:

- React
- React Router
- Vite

## Bidra

Bidrag är välkomna! Om du har förslag på förbättringar eller hittar buggar, vänligen öppna en issue eller skicka in en pull request.

## Licens

Detta projekt är licensierat under MIT-licensen.

