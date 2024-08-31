import { useState, useEffect } from 'react';
import CitySearch from './component/CitySearch';
import EventList from './component/EventList';
import './App.css';
import NumberOfEvents from './component/NumberOfEvents';
import { extractLocations, getEvents } from './api';
import { InfoAlert, ErrorAlert } from './component/Alerts';

const App = () => {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState('See all cities');
  const [errorAlert, setErrorAlert] = useState('');
  const [infoAlert, setInfoAlert] = useState('');

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);
 

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === 'See all cities' ? allEvents : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  return (
    <div className='App'>
      <div className='alerts-container'>
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null} {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
      </div>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity} setInfoAlert={setInfoAlert} />
      <NumberOfEvents setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
};
export default App;
