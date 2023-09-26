import React, { useState } from 'react'

export default function Cart({credit,price,remainingHour,selectedCards}) {
   
  return (
    <div className="max-w-sm w-80  bg-white border border-gray-200 rounded-lg shadow">
    

    <div className="p-5 space-y-4">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-500 dark:text-white">Credit Hour Remaining {remainingHour} hr</h5>
      </a>
      <hr />
      <h1 className="text-xl font-bold tracking-tight text-gray-900">Course Name</h1>
      <ol>
        <li>{selectedCards.map((card, index) => (
            <li key={index}>{index+1}. {card}</li>
          ))}</li>
        
      </ol>
      <hr />
      <h1 className="font-bold">Total Credit Hour :{credit} </h1>
      <hr />
      <h1 className="font-bold">Total Price : {price} USD</h1>

     

    </div>
  </div>
  )
}
