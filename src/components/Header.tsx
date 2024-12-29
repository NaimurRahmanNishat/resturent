import Image from 'next/image';
import React from 'react'
import connection from "../../public/connection.png";
import wifi from "../../public/wifi.png";
import battery from "../../public/battery.png";

const Header = () => {
  return (
    <section className='w-[390px] h-[53px] bg-white flex items-center justify-between pt-[18px] pr-[26px] pb-[14px] pl-[27px]'>
      {/* time */}
      <div className='w-[54px] h-[21px] text-center font-semibold text-[17px] leading-[22px] text-[#000000]'>
        9:41
      </div>
      {/* indecator */}
      <span className='w-[127px] h-[37px] rounded-[18.5px] bg-[#000000]'></span>
      {/* network */}
      <div className='w-[78.26px] h-[13px] flex items-center gap-1'>
        {/* network path */}
        <Image src={connection} alt='mobile_network' width={19.2} height={12}/>
        {/* wifi */}
        <Image src={wifi} alt='wifi_network' width={17} height={12}/>
        {/* battery */}
        <Image src={battery} alt='battery' width={27.33} height={13}/>
      </div>
    </section>
  )
}

export default Header;