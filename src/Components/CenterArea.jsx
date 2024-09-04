import React from 'react'

export default function CenterArea({children}) {
    return (
        <div className='mt-[225px] w-[400px] h-[400px] bg-gray-300 flex flex-col m-auto  border-black border-2 rounded-lg'>{children}</div>
    )
}
