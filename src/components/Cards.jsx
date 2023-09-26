import React, { useEffect, useState } from 'react'
import Card from './card';
// import '../data.json';
export default function Cards() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((response) => response.json())
      .then((data) => {
        // Update the 'data' state with the fetched data
        setData(data);

      })
    console.log(data);
  }, [])
  

  return (
    <div className="grid grid-cols-3 gap-8">
      {data.map((card) => (
        <Card key={card.id} data={card}  />
      ))}
    </div>
  )
}
