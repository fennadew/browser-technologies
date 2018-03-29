# Browser Technologies
## Opdracht 3 - Progressive Enhanced Browser Technologies

## Use case: <b>Ik wil in een lijst contacten kunnen filteren, en details kunnen bekijken</b>
### Core functionality
De gebruiker moet een lijst met contacten kunnen zien, hier op filteren en contacten bekijken. Ik heb gekozen voor Node.js zodat ik server side data kan ophalen en kan renderen.

De basis is dan een form waar een naam kan worden ingetypt en gesubmit kan worden. Het formulier doet dan een post request naar de server en de server geeft een nieuwe pagina terug met de resultaten. Dit alles is allemaal zonder JavaScript.

De gehele content bekijken + filteren is mogelijk op alle browsers. Het support is 100%.

### Progressive enhancement: features
Als feature heb ik toegevoegd dat hij automatisch filtert wanneer de input value veranderd. Hier is de API addEventlistner voor nodig. Omdat deze niet in alle browsers ondersteund wordt (98%), heb ik hier een feature detection voor aangemaakt. Wanneer deze aanwezig is wordt de submit knop weggehaald omdat deze niet meer nodig is en wordt er gekeken of de input value matched met een deel van de naam.

Als tweede feature heb ik toegevoegd dat hij niet kijkt naar de hele string, maar alleen of het begin van de string klopt met de input value. Je begint immers met het zoeken van een naam altijd bij de eerste letters en je verwacht niet dat als je A intypt dat er dan allemaal mensen verschijnen die a's in hun naam hebben, maar alleen degene waarvan de naam met een A begint. Dit is mogelijk met de nieuwste ES6 feature String.protoype.startsWith. Hier heb ik ook een feature detection voor aangemaakt. Wanneer hij dit ondersteund zal hij de input value vergelijken met de eerste letters van alle contacten.

Beoordelingscriteria
- De code staat in een repository op GitHub
- Er is een Readme toegevoegd met daarin beschreven:
  - een beschrijving van de core functionality
  - een beschrijving van de feature(s)/Browser Technologies
  - welke browser de feature(s) wel/niet ondersteunen
  - een beschrijving van de accessibility issues die zijn onderzocht
- De demo is opgebouwd in 3 lagen, volgens het principe van Progressive Enhancement
- De user experience van de demo is goed
  - de leesbaarheidsregels zijn toegepast, contrast en kleuren kloppen
  - het heeft een gebruiksvriendelijke interface, met gebruikmaking van affordance en feedback op de interactieve elementen
- Student kan uitleggen wat Progressive Enhancement en Feature Detectie is en hoe dit toe te passen in Web Development
