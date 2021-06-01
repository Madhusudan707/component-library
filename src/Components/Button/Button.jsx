import React from 'react'

export const Button = ({btnText}) => {
    return (
        <button className='bg-gray-500 text-white font-bold p-4 shadow-sm rounded-lg hover:bg-blue-500'>{btnText}</button>
    )
}
