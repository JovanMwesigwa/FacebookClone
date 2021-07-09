import React from 'react'
import Image from 'next/image';
import { 
    BeakerIcon, 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon
} from '@heroicons/react/solid';

import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'

import logo from '../public/facebook.png'
import HeaderIcon from './HeaderIcon'



function Header() {
    return (
        <div className="stick top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <Image src={logo} width={75} height={40}  />

                <div className="flex items-center ml-2 rounded-full bg-gray-100 py-1 px-4 mt-1">
                    <SearchIcon className="h-5 w-5 mr-3 text-gray-600"/>
                    <input type="text" placeholder="Search Facebook" className="bg-gray-100 md:inline-flex rounded-full hidden flex-shrink outline-none" />
                </div>
            </div>

            {/* center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon Icon={HomeIcon} active />
                    <HeaderIcon Icon={FlagIcon} />
                    <HeaderIcon Icon={PlayIcon} />
                    <HeaderIcon Icon={ShoppingCartIcon} />
                    <HeaderIcon Icon={UserGroupIcon} />
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile pic */}
                <p className="whitespace-nowrap font-semibold pr-3">Cyfer Jovan</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </div>
    )
}

export default Header
