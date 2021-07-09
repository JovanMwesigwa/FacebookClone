import React from 'react'

function HeaderIcon({ active, Icon }) {
    return (
        <div className="cursor-pointer flex items-center rounded-xl md:px-10 sm:h-14 md:hover:bg-gray-100
            active:border-b-2 active:border-blue-500 group">
            {
                active ? 
                <Icon className="h-7 text-center sm:h-7 mx-auto group-hover:text-blue-500 text-blue-500" /> :
                <Icon className="h-7 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500 " /> 
            }
            
        </div>
    )
}

export default HeaderIcon
