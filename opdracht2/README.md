# Browser Technologies
[Link naar website](https://fennadew.github.io/browser-technologies/opdracht2/)

### Definitie feature detection:
[Feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) houdt in dat er wordt gecheckt of een browser een bepaald stuk code of element ondersteunt en of andere code daarvan afhankelijk is, zodat de browser altijd de core functionaliteit kan laten zien in plaats van te crashen / of fouten te geven in sommige browsers.

## Feedback
| Feedback                | Verbetering              |
| ----------------------- |:------------------------:| 
| Dingen in `head` weghalen die overbodig zijn  | Alle overbodige tekst in de viewport meta tag verwijderd |
| Extra feature detection bij faq | Feature detection voor addeventlistner toegevoegd. |  

## Component 1: <b>FAQ lijst</b>
Het eerste component is een vragenlijst over de verschillende minorvakken. Ik heb [whatwg]( https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) geraadpleegd om te onderzoeken welk element ik hier het beste voor kon gebruiken.

Uiteindelijk heb ik gebruik gemaakt van het `<details></details>` Element samen met het `<summary></summary>` element.
Het details element bevat een summary. Het summary element is altijd zichtbaar. Pas als het element wordt geopend (door er op te klikken) wordt te rest van de content zichtbaar. Dit is allemaal HTML only. Dit is dus ideaal voor een FAQ.

Het details element wordt door Internet Explorer en Edge niet ondersteund.

![CanIuse details](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/details.png).

Ik heb daarom een fallback gemaakt in javascript. Deze kijkt of het attribute 'open' bestaat in het details element. Wanneer dit niet het geval is, heb ik een fallback gemaakt. Deze fallback werkt tot IE9 en alle Edge versies. Op IE8 en ouder is een uitgeklapte versie te zien.

Ook wanneer JavaScript het niet doet is de uitgeklapte versie te zien. Zo is de core functionaliteit voor iedereen beschikbaar.
Ik heb dit getest met browserstack. Als extra feature heb ik het automatisch sluiten van de vraag wanneer een ander wordt geopend toegevoegd. Dit werkt alleen met JavaScript.

* <b>Chrome 64 (Mijn standaard browser)</b>
![Chrome](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/chrome.png).

* <b>IE10:</b>
![IE10](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/ie10.png).

* <b>IE8:</b>
![IE8](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/ie8.png).


## Component 2: <b>Image picker + preview</b>
Het tweede component is een image picker + preview voor als je een profiel foto wil uploaden naar je favoriete sociale netwerk. Als core functionaliteit heb ik alleen `<input type="file" accept="image/*">` toegevoegd in mijn html. Zo kan je altijd een plaatje toevoegen zonder de preview.

Daarna ben ik gaan kijken hoe het een plaatje zou kunnen previewen. Ik heb hiervoor [Stackoverflow](https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded) geraadpleegd. Zo kwam ik uit op de API fileReader die standaard in (in de nieuwste versies) van JavaScript zit. Ik heb op [Can i use](https://caniuse.com/#search=FileReader) gekeken welke browsers fileReader ondersteunen.

![File reader can I use](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/filereader.png).

Alleen ie11 ondersteund het gedeeltelijk niet. Ik heb een fallback gecreeërd die kijkt of fileReader in het window object zit. Zo ja, dan voegt hij een placeholder image toe, en styling. De files die dan geupload worden kunnen nu gepreviewd worden d.m.v de fileReader API. Als JavaScript uit staat dan is de file upload button nog altijd beschikbaar zonder preview.

* <b>Chrome 64 (Mijn standaard browser)</b>
![Chrome](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/chrome2.png).

* <b>IE11:</b>
![IE10](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/ie11.png).

* <b>IE9:</b>
![IE8](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/ie9.png).

Ik heb op alle browsers (firefox, ie, safari) getest in browserstack. Ik heb mijn eigen browser gepakt voor de meeste enhanceste versie en gekeken tot welke internet explorer de image picker het doet. Deze laat ik zien om te demonstreren wat er gebeurd als er geen fileReader aanwezig is. Deze fallback werkt op elke browser.

## Beide componenten <b>zonder JavaScript</b>
![IE8](https://github.com/fennadew/browser-technologies/blob/master/opdracht2/img/nojs.png).

RESOURCES
* [Can I use](https://caniuse.com/)
* [Mozilla web docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
* [Stackoverflow](https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded)
* [whatwg]( https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)
* [Browserstack](https://www.browserstack.com/)
* [Image placeholder](http://lwvnaperville.org/wp-content/uploads/2017/06/placeholder.png)
