# Browser Technologies
//Robuuste, toegankelijke websites leren bouwen …

Een beschrijving van het component.
Een schets van de functionaliteit.
Bronnen van uitleg en gebruikte artikelen.
Welke browsers/devices ondersteunen deze wel/niet.
Een beschrijving hoe je ervoor hebt gezorgd dat de Core Functionalitiet het overal doet.

## Component 1: <b>FAQ lijst</b>
Het eerste component is een vragenlijst over de verschillende minorvakken. Ik heb [whatwg]( https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element) geraadpleegd om te onderzoeken welk element ik hier het beste voor kon gebruiken.

Uiteindelijk heb ik gebruik gemaakt van het `<details></details>` Element samen met het `<summary></summary>` element.
Het details element bevat een summary. Het summary element is altijd zichtbaar. Pas als het element wordt geopend (door er op te klikken) wordt te rest van de content zichtbaar. Dit is dus ideaal voor een FAQ.

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
Voor als je een profiel foto wil uploaden naar je favoriete sociale netwerk

RESOURCES
* [Can I use](https://caniuse.com/)
* [whatwg]( https://html.spec.whatwg.org/multipage/interactive-elements.html#the-details-element)
* [Browserstack](https://www.browserstack.com/)
* [Image placeholder](http://lwvnaperville.org/wp-content/uploads/2017/06/placeholder.png)