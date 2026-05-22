import View from './view.js';

function createOfferSelector(id, name, title, price, checked = false) {
  return (`
    <div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="${id}" type="checkbox" name="${name}"${checked ? ' checked' : ''}>
      <label class="event__offer-label" for="${id}">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </label>
    </div>
  `);
}

function createTypeItem(id, value, label, checked = false) {
  return (`
    <div class="event__type-item">
      <input id="${id}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${value}"${checked ? ' checked' : ''}>
      <label class="event__type-label  event__type-label--${value}" for="${id}">${label}</label>
    </div>
  `);
}

export default class EditPointView extends View {
  getTemplate() {
    return (`
      <li class="trip-events__item">
        <form class="event event--edit" action="#" method="post">
          <header class="event__header">
            <div class="event__type-wrapper">
              <label class="event__type  event__type-btn" for="event-type-toggle-edit-1">
                <span class="visually-hidden">Choose event type</span>
                <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
              </label>
              <input class="event__type-toggle  visually-hidden" id="event-type-toggle-edit-1" type="checkbox">

              <div class="event__type-list">
                <fieldset class="event__type-group">
                  <legend class="visually-hidden">Event type</legend>
                  ${createTypeItem('event-type-taxi-edit-1', 'taxi', 'Taxi')}
                  ${createTypeItem('event-type-bus-edit-1', 'bus', 'Bus')}
                  ${createTypeItem('event-type-train-edit-1', 'train', 'Train')}
                  ${createTypeItem('event-type-ship-edit-1', 'ship', 'Ship')}
                  ${createTypeItem('event-type-drive-edit-1', 'drive', 'Drive')}
                  ${createTypeItem('event-type-flight-edit-1', 'flight', 'Flight', true)}
                  ${createTypeItem('event-type-check-in-edit-1', 'check-in', 'Check-in')}
                  ${createTypeItem('event-type-sightseeing-edit-1', 'sightseeing', 'Sightseeing')}
                  ${createTypeItem('event-type-restaurant-edit-1', 'restaurant', 'Restaurant')}
                </fieldset>
              </div>
            </div>

            <div class="event__field-group  event__field-group--destination">
              <label class="event__label  event__type-output" for="event-destination-edit-1">
                Flight
              </label>
              <input class="event__input  event__input--destination" id="event-destination-edit-1" type="text" name="event-destination" value="Chamonix" list="destination-list-edit-1">
              <datalist id="destination-list-edit-1">
                <option value="Amsterdam"></option>
                <option value="Geneva"></option>
                <option value="Chamonix"></option>
              </datalist>
            </div>

            <div class="event__field-group  event__field-group--time">
              <label class="visually-hidden" for="event-start-time-edit-1">From</label>
              <input class="event__input  event__input--time" id="event-start-time-edit-1" type="text" name="event-start-time" value="18/03/19 12:25">
              &mdash;
              <label class="visually-hidden" for="event-end-time-edit-1">To</label>
              <input class="event__input  event__input--time" id="event-end-time-edit-1" type="text" name="event-end-time" value="18/03/19 13:35">
            </div>

            <div class="event__field-group  event__field-group--price">
              <label class="event__label" for="event-price-edit-1">
                <span class="visually-hidden">Price</span>
                &euro;
              </label>
              <input class="event__input  event__input--price" id="event-price-edit-1" type="text" name="event-price" value="160">
            </div>

            <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
            <button class="event__reset-btn" type="reset">Delete</button>
            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </header>

          <section class="event__details">
            <section class="event__section  event__section--offers">
              <h3 class="event__section-title  event__section-title--offers">Offers</h3>

              <div class="event__available-offers">
                ${createOfferSelector('event-offer-luggage-edit-1', 'event-offer-luggage', 'Add luggage', 50, true)}
                ${createOfferSelector('event-offer-comfort-edit-1', 'event-offer-comfort', 'Switch to comfort', 80, true)}
                ${createOfferSelector('event-offer-meal-edit-1', 'event-offer-meal', 'Add meal', 15)}
                ${createOfferSelector('event-offer-seats-edit-1', 'event-offer-seats', 'Choose seats', 5)}
                ${createOfferSelector('event-offer-train-edit-1', 'event-offer-train', 'Travel by train', 40)}
              </div>
            </section>

            <section class="event__section  event__section--destination">
              <h3 class="event__section-title  event__section-title--destination">Destination</h3>
              <p class="event__destination-description">Chamonix-Mont-Blanc (usually shortened to Chamonix) is a resort area near the junction of France, Switzerland and Italy. At the base of Mont Blanc, the highest summit in the Alps, it's renowned for its skiing.</p>

              <div class="event__photos-container">
                <div class="event__photos-tape">
                  <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">
                  <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">
                  <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">
                  <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">
                  <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">
                </div>
              </div>
            </section>
          </section>
        </form>
      </li>
    `);
  }
}
