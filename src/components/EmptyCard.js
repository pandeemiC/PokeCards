import React from 'react'
import logo from '../img/PokeCardLogo.png';

export default function EmptyCard() {
  return (
    <>
    <div className="container flex justify-center items-center ml-auto">
        <div className={`items-center justify-center flex border-none mx-auto mt-5 h-[700px] w-[600px] m-4 shadow-2xl rounded-2xl [color-change-2x] bg-gray-200 color-change-2x`}>
          <img 
            src={logo}
            alt="PokeCard Logo"
            className="w-[330px] h-[330px] mb-10 animate-spin"
          />
        </div>
    </div>
    </>
  )
}
