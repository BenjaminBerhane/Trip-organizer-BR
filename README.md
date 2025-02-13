# React + Vite

/src
│── /components            # Återanvändbara komponenter
│   ├── TripForm.jsx       # Formulär för att skapa/redigera resor
│   ├── TripList.jsx       # Lista med alla planerade resor
│   ├── TripDetails.jsx    # Detaljer om en specifik resa
│   ├── Navbar.jsx         # Navigationsmeny
│── /pages                 # Sidor som används i React Router
<!-- │   ├── Home.jsx           # Startsida med inspiration -->
│   ├── Trips.jsx          # Sida för att se och hantera resor
│   ├── TripView.jsx       # Sida för att se detaljer om en resa
<!-- │── /context               # Context API för state management (om du vill)
│   ├── TripContext.jsx    # Global hantering av resor -->
│── /utils                 # Hjälpfunktioner och localStorage-hantering
│   ├── storage.js         # Funktioner för att spara och hämta resor från localStorage
│── App.jsx                # Huvudkomponenten med React Router
│── main.jsx               # Root-rendering och router-provider
│── index.css              # Global CSS eller Tailwind-import
