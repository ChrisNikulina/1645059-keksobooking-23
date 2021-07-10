import {generateCard} from  './generate-card.js';
import {similarAddOffers} from './data.js';
import {setInactiveState, setActiveState} from './form.js';


const showCards = similarAddOffers(10);
const cards = showCards.map((publication) => generateCard(publication));
const mapCanvas = document.querySelector('#map-canvas');
mapCanvas.appendChild(cards[0]);

setInactiveState();
setActiveState();
