import './App.css';
import globe from './globe.png';
import locations from './data/locations.js';
import Card from './components/Card.js';

function App() {
  const data = locations.map(item => {
    return(
      <Card 
      title={item.title}
      location={item.location}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      imageUrl={item.imageUrl}
    />
    )
    
  })

  return (
    <div className="App">
      <div className="header">
        <img src={globe} alt="globe" className ="globe" />
        my travel journal.
      </div>
      <div className="body">
        {data}
      </div>

    </div>
  );
}

export default App;
