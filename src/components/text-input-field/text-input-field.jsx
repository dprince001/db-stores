import React from 'react'

const TextInputField = ({type, placeholder, name}) => {
  return (
    <>
        <input type={type} name={name} className='border border-[#7D7D7D] block mt-6 w-full p-3 focus:outline-none' placeholder={placeholder}/>
    </>
  )
}

export default TextInputField