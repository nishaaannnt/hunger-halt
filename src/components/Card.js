import React from 'react'
import {useNavigate} from 'react-router-dom'

// Basic static card

export const Card = (props) => {
  const navigate=useNavigate();
  return (
    <div className="money h-90 rounded-2xl w-80 mb-16 p-6 flex-col justify-between flex items-center shadow-2xl">
                <h3 className="text-hung">{props.title}</h3>
                <img src={props.img} className="h-30 m-3" alt="" />
                <a onClick={()=>navigate(props.tow)} className="bg-hung py-4 px-12 cursor-pointer rounded-2xl hover:bg-emerald-900 transition text-white">Donate</a>
    </div>
  )
}
