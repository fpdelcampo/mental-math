import React from 'react'

export default function Score({score}) {
    return (
        <div className='bg-gray-300 w-[100px] h-[100px] text-center align-bottom text-3xl font-bold content-center border-black border-2 absolute left-0'>{score}</div>
    )
}
