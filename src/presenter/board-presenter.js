import {RenderPosition, render} from '../render.js';
import FilterView from '../view/filter-view.js';
import SortView from '../view/sort-view.js';
import EventsListView from '../view/events-list-view.js';
import CreatePointView from '../view/create-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import RoutePointView from '../view/route-point-view.js';

const EVENTS = [
  {
    date: '2019-03-18',
    dateLabel: 'MAR 18',
    icon: 'img/icons/taxi.png',
    title: 'Taxi Amsterdam',
    start: '2019-03-18T10:30',
    startLabel: '10:30',
    end: '2019-03-18T11:00',
    endLabel: '11:00',
    duration: '30M',
    price: 20,
    favorite: true,
    offers: [
      {title: 'Order Uber', price: 20},
    ],
  },
  {
    date: '2019-03-18',
    dateLabel: 'MAR 18',
    icon: 'img/icons/flight.png',
    title: 'Flight Chamonix',
    start: '2019-03-18T12:25',
    startLabel: '12:25',
    end: '2019-03-18T13:35',
    endLabel: '13:35',
    duration: '01H 10M',
    price: 160,
    favorite: false,
    offers: [
      {title: 'Add luggage', price: 50},
      {title: 'Switch to comfort', price: 80},
    ],
  },
  {
    date: '2019-03-18',
    dateLabel: 'MAR 18',
    icon: 'img/icons/drive.png',
    title: 'Drive Chamonix',
    start: '2019-03-18T14:30',
    startLabel: '14:30',
    end: '2019-03-18T16:05',
    endLabel: '16:05',
    duration: '01H 35M',
    price: 160,
    favorite: true,
    offers: [
      {title: 'Rent a car', price: 200},
    ],
  },
];

export default class BoardPresenter {
  constructor() {
    this._filtersContainer = document.querySelector('.trip-controls__filters');
    this._eventsContainer = document.querySelector('.trip-events');
    this._eventsList = null;
  }

  init() {
    const filterView = new FilterView();
    const sortView = new SortView();
    const eventsListView = new EventsListView();
    const createPointView = new CreatePointView();
    const editPointView = new EditPointView();

    render(filterView, this._filtersContainer, RenderPosition.BEFOREEND);

    const tripEventsTitleElement = this._eventsContainer.querySelector('.visually-hidden');

    render(sortView, tripEventsTitleElement, RenderPosition.AFTEREND);
    render(eventsListView, this._eventsContainer, RenderPosition.BEFOREEND);

    this._eventsList = this._eventsContainer.querySelector('.trip-events__list');

    render(editPointView, this._eventsList, RenderPosition.BEFOREEND);
    render(createPointView, this._eventsList, RenderPosition.BEFOREEND);

    EVENTS.forEach((event) => {
      render(new RoutePointView(event), this._eventsList, RenderPosition.BEFOREEND);
    });
  }
}
