import { useEffect, useState } from 'react';
import Map from '../components/Map';
		
function Shops() {
		
  const [coordinaates, setCoordinates] = useState({lngLat: [59.8060, 24.8034], zoom: 8});
  const [shops, setShops] = useState([]);
  const dbUrl = 'https://react0922-default-rtdb.europe-west1.firebasedatabase.app/shops.json';

  useEffect(() => {
    fetch(dbUrl).then(response => response.json())
        .then(responseBody => {
            const shopsFromDb = [];
            for (const key in responseBody) {
                shopsFromDb.push(responseBody[key]);
            }
            setShops(shopsFromDb);
        })
  }, []);
		
  return (
    <div>
      <br />
      <button onClick={() => setCoordinates({lngLat: [59.8060, 24.8034], zoom: 8})}>Kõik poed</button> 
      <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button> 
      {shops.map(element => 
        <span key={element.name}>
          <button onClick={() => setCoordinates({lngLat: [element.latitude, element.longitude], zoom: 13})}>
            {element.name}
          </button>
        </span> )}  
        <br /><br />        
      <Map 
        shopMarkers={shops} 
        mapCoordinaates={coordinaates}  
      />
    </div>)
		
}
		
export default Shops;