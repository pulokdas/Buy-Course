import React from 'react'

export default function Cart() {
  return (
    <div className="max-w-sm w-80  bg-white border border-gray-200 rounded-lg shadow">
    

    <div className="p-5 space-y-4">
      <a href="#">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-blue-500 dark:text-white">Credit Hour Remaining 7hr</h5>
      </a>
      <hr />
      <h1 className="text-xl font-bold tracking-tight text-gray-900">Course Name</h1>
      <ol>
        <li>Introduction to C programming</li>
        <li>Introduction to C programming</li>
        <li>Introduction to C programming</li>
      </ol>
      <hr />
      <h1 className="font-bold">Total Credit Hour : 13</h1>
      <hr />
      <h1 className="font-bold">Total Price : 48000 USD</h1>

     

    </div>
  </div>
  )
}
