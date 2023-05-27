import React from 'react'

export const Card = (props) => {
  return (
    <div className="money h-90 rounded-2xl w-80 p-6 flex-col justify-between flex items-center shadow-2xl">
                <h3 className="text-hung">{props.title}</h3>
                <img src={props.img} className="h-30 m-3" alt="" />
                <a href="#" className="bg-hung py-4 px-12 rounded-2xl hover:bg-emerald-900 transition text-white">Donate</a>
    </div>
  )
}
