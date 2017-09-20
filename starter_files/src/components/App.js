import React, {Component} from 'react';
import '../styles/App.css';
import VehicleDetails from './VehicleDetails'
import getVehicles from '../services'

class App extends Component {
  constructor(props) {
    super(props);

  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  this.state = {
    vehicles: [],
    value: '',
    pilot: ''
  }
  this._handleNameChange = this._handleNameChange.bind(this)
  this._handleSubmit = this._handleSubmit.bind(this)
}
//
//   // FORM: HANDLE INPUT CHANGES
//   // handleNameChange below:
//   // See form lesson for details.
//   // Enter your code below:
  _handleNameChange(event) {
    this.setState({
      pilot: event.target.value
    })
  }

  _handleSubmit(event) {
    event.preventDefault();
    const newPilot = this.state.pilot
    this.setState({
      pilot: newPilot
    })
  }

  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.

  getVehicleData = () => {
    getVehicles().then((response) => {
      console.log(response.data.results)
      this.setState({vehicles: response.data.results})
    })
  }

  componentDidMount(){
    this.getVehicleData();
  }
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:


  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */
    let vehicles = this.state.vehicles;
    console.log(this.state)
    return (
      <div className="App">
        <div className="jumbotron">
          <h1>Star Wars</h1>
          <p>The vehicles of Star Wars</p>
        </div>
        <form>
          <div className="form-group form">
            <h2>What's your name, pilot?</h2>
            <input type="text" name="pilot" placeholder="Enter your name" value={this.state.pilot} onChange={this._handleNameChange}
            />
            <input className="btn btn-primary" type="submit" value="Submit!"
              onClick={this._handleSubmit}
            />
            <h1>{this.state.pilot}</h1>
          </div>

        </form>
        <div className="vehicle-cards-container">
          {vehicles.map((vehicleInfo) => {
            return (
              <VehicleDetails
                key={vehicleInfo.edited}
                name={vehicleInfo.name}
                model={vehicleInfo.model}
                manufacturer={vehicleInfo.manufacturer}
                vehicle_class={vehicleInfo.vehicle_class}
                crew={vehicleInfo.crew}
                length={vehicleInfo.length}
                max_atmosphering_speed={vehicleInfo.max_atmosphering_speed}
                cargo_capacity={vehicleInfo.cargo_capacity}
              />
            )
          })}
        </div>
        {/*
        The App component needs the following:
         jumbotron section, form section, vehicle cards section.
         Your form will also need a header in which you will pass the state of the form upon submit.
         */}
      </div>
    );
  }
}

export default App;
