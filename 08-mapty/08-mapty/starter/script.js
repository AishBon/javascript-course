'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords; // lat and long
    this.distance = distance; // km
    this.duration = duration; // min
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

// === Running ===
class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    this.pace = this.duration / this.distance; // min/km
    return this.pace;
  }
}

// === Cycling ===
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60); // km/h
    return this.speed;
  }
}

// === Running workout test ===
const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== Running Workout ===');
console.log('distance:', run1.distance, 'km');
console.log('duration:', run1.duration, 'min');
console.log('cadence:', run1.cadence, 'steps/min');
console.log('pace:', run1.pace.toFixed(1), 'min/km');
console.log('description:', run1.description);
console.log('id:', run1.id);

// === Cycling workout test ===
const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== Cycling Workout ===');
console.log('distance:', cycling1.distance, 'km');
console.log('duration:', cycling1.duration, 'min');
console.log('elevation gain:', cycling1.elevationGain, 'm');
console.log('speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('description:', cycling1.description);
console.log('id:', cycling1.id);

// === Inheritance test ===
run1.click();
cycling1.click();
console.log('=== Inheritance Test ===');
console.log('Run clicks:', run1.clicks);
console.log('Cycling clicks:', cycling1.clicks);

// DOM ELEMENTS
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App is starting');
    this._getPosition();

    // Attach event handler for form submission
    form.addEventListener('submit', this._newWorkout.bind(this));

    // Attach event handler for workout type change
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        this._handleLocationError.bind(this),
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('Geolocation is not supported by this browser');
      this._loadDefaultMap();
    }
  }

  _handleLocationError(error) {
    console.error('Geolocation error:', error);
    let message = 'Could not get your position. ';

    switch (error.code) {
      case error.PERMISSION_DENIED:
        message +=
          'Location access was denied. Please enable location services and refresh the page.';
        break;
      case error.POSITION_UNAVAILABLE:
        message +=
          'Location information is unavailable. Please try again later.';
        break;
      case error.TIMEOUT:
        message += 'The request timed out. Please try again.';
        break;
      default:
        message += 'An unknown error occurred. Please try again.';
        break;
    }

    alert(`${message}`);
    this._loadDefaultMap();
  }

  _loadDefaultMap() {
    console.log('Loading default map location (Manila)');
    const defaultCoords = [14.604, 120.994];
    this.#map = L.map('map').setView(defaultCoords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
    console.log('Default map loaded successfully');
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

    const coords = [latitude, longitude];
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords).addTo(this.#map).bindPopup('You are here!').openPopup();

    this.#map.on('click', this._showForm.bind(this));
    console.log('Map loaded successfully at user location');
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _newWorkout(e) {
    // Helper functions
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    e.preventDefault();

    // Store data
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    console.log(`Creating ${type} workout:`, { distance, duration, lat, lng });

    // Handle running workout
    if (type === 'running') {
      const cadence = +inputCadence.value;

      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // Handle cycling workout
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    console.log('workout object created:', workout);

    this.#workouts.push(workout);

    this._renderWorkoutMarker(workout);
    this._renderWorkout(workout);

    this._hideForm();
    console.log('Workout creation complete!');
  }

  _renderWorkout(workout) {
    //create the base html
    let html = `
    <li class="workout workout--${workout.type}" data-id"${workout.id}">
    <h2 class="workout__title"> ${workout.description} </h2>
    <div class="workout__details">
    <span class="workout__icon>${
      workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
    } </span>

    <span class="workout__value">${workout.distance}</span>
    <span class="workout__unit">km</span>
    </div>
  <div class="workout__details">
    <span class="workout__icon">⏱</span>
    <span class="workout__value">${workout.duration}</span>
    <span class="workout__unit">min</span>
  </div>
`;

    if (workout.type === 'running')
      html += `
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.pace.toFixed(1)}</span>
      <span class="workout__unit">min/km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">🦶🏼</span>
      <span class="workout__value">${workout.cadence}</span>
      <span class="workout__unit">spm</span>
    </div>
  </li>
  `;

    if (workout.type === 'cycling')
      html += `
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${workout.speed.toFixed(1)}</span>
      <span class="workout__unit">km/h</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⛰</span>
      <span class="workout__value">${workout.elevationGain}</span>
      <span class="workout__unit">m</span>
    </div>
  </li>
  `;

    form.insertAdjacentHTML('afterend', html);
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }
}

// Create the app
const app = new App();
console.log('Hour 2 complete!');
