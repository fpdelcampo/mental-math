import { format } from 'mathjs'
import React from 'react'

export default function Timer({time, prev}) {
    const minutes = Math.floor(time / 60)
    var seconds = time % 60
    seconds = String(seconds).padStart(2, '0')
    var formattedTime = minutes + ":" + seconds
    if(time == 0) {
        if(prev < 0) {
            formattedTime = "2:00"
        }
        else {
            formattedTime = "0:00"
        }
    }
    
    return (
        <div className='w-[200px] h-[100px] content-center text-center bg-gray-300 border-black border-2 text-3xl mx-auto'>{formattedTime}</div>
    )
}
