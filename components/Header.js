import React from 'react'
import Image from 'next/image'
import Headitem from './Headitem'
import{
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
function Header() {
  return (
   <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto ">
    <div className="flex flex-grow justify-evenly max-w-2xl">
      <Headitem title="HOME" Icon={HomeIcon}/>
      <Headitem title="TRENDING" Icon={LightningBoltIcon}/>
      <Headitem title="VERIFIED" Icon={BadgeCheckIcon}/>
      <Headitem title="COLLECTION" Icon={CollectionIcon} />
          <Headitem title="SEARCH" Icon={SearchIcon} />
          <Headitem title="ACCOUNT" Icon={UserIcon} />
    </div>
    <Image className="contain"
        src="https://links.papareact.com/ua6"
       
        width={169}
        height={100}
    />
   </header>
    
  )
}

export default Header