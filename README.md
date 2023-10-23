README

Introduktion:
Dette projekt indeholder en mobilapp udviklet ved hjælp af React Native, som gør det muligt for brugeren at interagere med en kamerafunktion og en billedviser. Appen integrerer også Firebase Authentication for brugerregistrering og login.

Projektstruktur:
Hovedfiler:
StackNavigator.js: Håndterer navigationsstakken for kamera- og billedskærme.
app.js: Dette er appens indgangspunkt, der definerer hovednavigationen og Firebase autentificeringslogikken.
Undermapper:
components: Denne mappe indeholder alle hovedkomponenterne i appen.
stackComponents: Indeholder komponenterne, der bruges i navigationsstakken, nemlig CameraScreen.js og ImageScreen.js.

Detaljeret beskrivelse:
StackNavigator.js:
CameraScreen: Viser kamera UI og tillader brugeren at tage billeder eller vælge billeder fra galleriet.
ImageScreen: Viser det valgte eller tagne billede i fuld skærm.
Navigationsindstillinger som header-stil og titel er også defineret her.
app.js:
Initialiserer Firebase med konfigurationsdetaljer.
Implementerer autentificeringslogik ved hjælp af onAuthStateChanged for at overvåge brugerens loginstatus.
Baseret på brugerens autentificeringsstatus viser appen enten hovedskærmene (Consultant, Company, Contracts) eller autentificeringsskærmene (SignUp, Login).
Logout-knappen tillader brugeren at logge ud af appen.
CameraScreen.js:
Anvender expo-camera for kamerafunktionalitet.
Bruger har mulighed for at skifte kamera (foran/bag), tage et billede eller vælge et billede fra galleriet.
Efter billedet er taget, bliver det tilføjet til en mini-gallerivisning, hvor brugeren kan klikke på det for at se det i fuld skærm.
ImageScreen.js:
Viser det billede, som brugeren har klikket på fra mini-galleriet, i fuld skærm.

Opsætning:
Installation:
Sørg for at have Node.js, React Native CLI og Expo CLI installeret på din maskine.
Kør npm install i projektroden for at installere alle de nødvendige afhængigheder.
Kørsel:
Kør expo start for at starte appen i udviklingstilstand.

Fremtidige forbedringer:
Integration med Firebase Storage for at gemme billeder i skyen.
Tilføjelse af billedredigeringsfunktioner som beskæring, rotation osv.
Optimering af UI/UX for en mere intuitiv brugeroplevelse.