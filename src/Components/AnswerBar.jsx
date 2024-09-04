import React from 'react'

export default function AnswerBar({userAnswer, setUserAnswer}) {
    return (
        <input onInput={(e) => {
            setUserAnswer(e.target.value)
        }} 
        id='userAnswer' 
        className='w-[200px] h-[40px] m-auto content-center text-center items-center border-black border-2 rounded-lg bg-amber-100'
        value={userAnswer}>    
        </input>
    )
}
