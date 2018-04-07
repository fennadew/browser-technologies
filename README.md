# Browser Technologies - Progressive Enhanced
### Use case
Ik wil in een lijst contacten kunnen filteren, en details kunnen bekijken


### Feedback
| Feedback                | Verbetering              |
| ----------------------- |:------------------------| 
| Terug knop wanneer je zoekt zonder javascript  | Terug knop toegevoegd na zoeken om weer terug te gaan naar alle contacten |
| Extra feature erbij doen | Wanneer er op een contact wordt geklikt, schuiven de gegevens uit i.p.v dat je naar een nieuwe pagina gaat |  
| Testen op mobile | Viewport meta tag toegevoegd en getest in devicelab |
|  | Readme overzichtelijker gemaakt |

## :hammer: Core functionality
De gebruiker moet een lijst met contacten kunnen zien, hier op filteren en contacten bekijken. 


<details>
 <summary>Pattern primer</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/pattern.png" alt="pattern primer">
</details>

### Werkwijze
Ik heb gekozen voor Node.js zodat ik server side data kan ophalen en kan renderen.

De basis is dan een form waar een naam kan worden ingetypt en gesubmit kan worden.
Het formulier doet dan een post request naar de server en de server geeft een nieuwe pagina terug met de resultaten.
Dit alles is allemaal zonder JavaScript. Dit heb ik onderzocht op [canIuse](caniuse.com).

De gehele content bekijken + filteren is mogelijk op alle browsers. Het support is 100%.

### Browsers support <sub><sup><sub><sub>made by <a href="https://godban.github.io">godban</a></sub></sub></sup></sub>

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera-mini.png" alt="Opera Mini" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera Mini | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE7, IE8, IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

### Eigen tests

<details>
  <summary>Chrome 64 (Zonder javascript)</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/zonderjs.png" alt="tested on chrome"> <br>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/zonderjs2.png" alt="tested on chrome"> <br>
</details>

<details>
  <summary>IE8</summary>
 <p>Getest in <a href="https://www.browserstack.com">Browserstack]</a></p>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/ie8.png">.
</details>

## :wrench: Progressive enhancement: Feature 1
Als feature heb ik toegevoegd dat hij automatisch filtert wanneer de input value veranderd. Hier is de API addEventlistner voor nodig. Ik heb deze feature onderzocht op [can I use](caniuse.com). Omdat deze niet in alle browsers ondersteund wordt (98%), heb ik hier een feature detection voor aangemaakt. Wanneer deze aanwezig is wordt de submit knop weggehaald omdat deze niet meer nodig is en wordt er gekeken of de input value matched met een deel van de naam.

### Browsers support <sub><sup><sub><sub>made by <a href="https://godban.github.io">godban</a></sub></sub></sup></sub>

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| IE9, IE10, IE11, Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions

### Eigen tests
Getest in [Browserstack](https://www.browserstack.com)
<details>
 <summary>IE9:</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/ie9.png" alt="ie9">.
</details>

## :wrench: Progressive enhancement: Feature 2
Als tweede feature heb ik toegevoegd dat hij niet kijkt naar de hele string, maar alleen of het begin van de string klopt met de input value. Je begint immers met het zoeken van een naam altijd bij de eerste letters en je verwacht niet dat als je A intypt dat er dan allemaal mensen verschijnen die a's in hun naam hebben, maar alleen degene waarvan de naam met een A begint. Dit is mogelijk met de nieuwste ES6 feature String.protoype.startsWith. Ik heb deze onderzocht bij [Mozilla developers](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith). Hier heb ik ook een feature detection voor aangemaakt. Wanneer hij dit ondersteund zal hij de input value vergelijken met de eerste letters van alle contacten.

#### Browsers support <sub><sup><sub><sub>made by <a href="https://godban.github.io">godban</a></sub></sub></sup></sub>

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png" alt="IE / Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Opera | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari-ios.png" alt="iOS Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>iOS Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome-android.png" alt="Chrome for Android" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android |
| --------- | --------- | --------- | --------- | --------- | --------- | --------- |
| Edge| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions| last 2 versions


#### Eigen tests
Getest in [Browserstack](https://www.browserstack.com)
<details>
 <summary>Chrome 64:</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/metjs.png" alt="chrome">.
</details>


## :eyeglasses: Accessibility
* <b>Mouse/Trackpad</b>: Op alle aanklikbare elementen zijn hover en focus states toegepast.
 De website is getest met een screenreader.
 <details>
  <summary>Screenshot van screenreader</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/screenreader.png"  alt="tested on screenreader">
</details>
<p></p>

* <b>Custom fonts</b>: Er worden geen icon-fonts gebruikt en er wordt een fallback-lettertype gebruikt. Dit lettertype zie je wanneer de custom font niet kan worden geladen of custom fonts door de gebruiker zijn uitgeschakeld.
Ik heb deze getest op aangepaste aangepaste lettertypen met de Chrome-extensie [force fonts](https://chrome.google.com/webstore/detail/force-font/iidenkflofaiinggabfmdjbomolidnie). Werkt hetzelfde zonder aangepaste lettertypen. Met de extensie kun je het aangepaste lettertype vervangen door het gewenste systeemlettertype zoals 'Arial'.
 <details>
  <summary>Screenshot van test zonder custom font</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/customfonts.png"  alt="zonder custom font">
</details>


* <b>Images</b>: Alle images hebben een alt attribute. Deze hebben toegevoegde waarde wanneer deze door de screenreader wordt voorgelezen.

* <b>Color</b>: Er is voornamelijk gebruik gemaakt van zwart en wit. Dit is goed te zien voor kleurenblinden.
de focus state is grijs, waar de kleurenblinden dus ook geen last van zullen hebben. Het paars van de sumbit button en het de border van het input veldt is donker genoeg om genoeg contrast te bieden bij rood kleurenblindheid.

* <b>JavaScript</b>: De core functionaliteit van de website werkt geheel zonder JavaScript

* <b>Broadband internet</b>: Er is een service worker toegevoegd aan de website. Wanneer de pagina al bezocht is (en dus gecached) is de laat tijd on- en offline 175ms. Super snel dus!

 <details>
  <summary>Screenshot van service worker</summary>
<img src="https://github.com/fennadew/browser-technologies/blob/deploy/public/images/servicework.png"  alt="service worker">
</details>
