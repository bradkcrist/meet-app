import CitySearch from './component/CitySearch';
import EventList from './component/EventList';
import './App.css';
import NumberOfEvents from './component/NumberOfEvents';

const App = () => {
  return (
    <div className='App'>
      <CitySearch />
      <EventList />
      <NumberOfEvents />
    </div>
  );
};
export default App;
