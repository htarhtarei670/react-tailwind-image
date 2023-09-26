import React from 'react'
import Card from './Card'

const Cards = ({ datas }) => {
  return (
    <div className="mt-24 w-full">
      <div className="grid grid-cols-1 mx-8 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {datas.map((data) => (<Card key={data.id} data={data} />))}
      </div>
    </div>
  );
}

export default Cards
