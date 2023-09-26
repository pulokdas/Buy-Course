import React, { useEffect, useState } from 'react'
import Card from './card';
// import '../data.json';
export default function Cards({handleSelectButton}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        // Update the 'data' state with the fetched data
        setData(data);

      })
    
  }, [])
  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {data.map((card) => (
        <Card key={card.id} data={card} handleSelectButton={handleSelectButton}  />
      ))}
    </div>
  )
}
