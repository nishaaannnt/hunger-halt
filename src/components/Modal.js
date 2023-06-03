import React from 'react'
import { createPortal } from 'react-dom'

// Create portal is used to render child into DOM

const Modal = ({onClose,children,}) => {
  return createPortal(
    <div className='bg-black/30 sm:h-screen fixed inset-0 w-screen'>
    <div className='md:w-1/4 h-1/3 rounded-xl p-2  flex flex-col fixed inset-x-0 inset-y-0 z-50  m-auto items-center  bg-white drop-shadow-xl'>
        <button className='text-xl   px-2 rounded-2xl text-black/40   ml-auto' onClick={()=>onClose(false)}>x</button>
        <hr />
        <div className='p-2'>{children}</div>
      </div>
    </div>,
    document.getElementById('modal')
  )
}

export default Modal