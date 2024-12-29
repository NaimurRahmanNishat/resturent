import Image from 'next/image';
import aboutside from "../../../public/aboutside.png";
import about from "../../../public/about.png";
import aboutmarket from "../../../public/aboutmarket.png";
import call from "../../../public/call.png";
import framei from "../../../public/framei.png";
import frameii from "../../../public/frameii.png";
import frameiii from "../../../public/frameiii.png";

const About = () => {
  return (
    <section id="about" className='relative md:max-w-[1920px] md:h-[864px] w-full h-[1144.03px] bg-white overflow-x-hidden'>
      <Image src={aboutside} alt='about-side' layout="intrinsic" className='absolute right-0 top-[285px] hidden md:flex' />
      <div className='relative md:pt-[120px] md:pb-[120px] md:mx-[300px] pt-[32px] pb-[32px] px-[30px]'>
        <div className='md:flex md:gap-[32px] justify-between'>
          {/* left side */}
          <div>
            <Image src={aboutmarket} alt='about_market' layout="intrinsic" className='absolute md:w-[241.17px] md:h-[136.75px] md:pt-5 w-[128.99px] h-[73.14px] pt-3' />
            <Image src={about} alt='about_image' width={617} height={440} className='md:w-[617px] md:h-[440px] w-[330px] h-[246.03px]' />
          </div>
          {/* right side content */}
          <div className='md:w-[624px] md:h-[402px] w-[330px] h-[478px]'>
            {/* text */}
            <div>
              {/* number 1 */}
              <div>
                {/* top */}
                <div className='md:w-[624px] md:h-[36px] pt-3 md:pt-0 flex border-b-2 border-[#B52B1D]'>
                  <p className='md:w-[70px] md:h-[36px] pt-[6px] pr-[16px] pb-[6px] pl-[16px] md:flex md:gap-3 bg-[#B52B1D] text-white font-primary font-medium text-[14px] leading-[24px]'>About</p>
                  <p className='pt-[6px] pr-[16px] pb-[6px] pl-[16px] md:flex md:gap-3 bg-white font-primary font-medium text-[14px] leading-[24px] text-[#333333]'>Experience</p>
                  <p className='pt-[6px] pr-[16px] pb-[6px] pl-[16px] md:flex md:gap-3 font-primary font-medium text-[14px] leading-[24px] text-[#333333]'>Contact</p>
                </div>
                {/* bottom */}
                <h2 className='font-bebas font-bold md:text-[62px] md:leading-[62px] text-[40px] leading-[48px] pt-4 text-[#181818]'>Exceptional culinary experience and delicious food</h2>
              </div>
              {/* number 2 */}
              <div className='md:w-[624px] md:h-[104px] md:flex md:gap-5 md:pt-8'>
                <p className='font-primary font-normal text-[16px] leading-[26px] text-[#333333]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation.</p>
              </div>
            </div>
            {/* frame */}
            <div className='md:h-[56px] h-[48px] flex gap-8 md:pt-8 mt-8'>
              <button className='md:w-[161px] md:h-[56px] w-[149px] h-[48px] pt-3 pr-6 pb-3 pl-6 md:pt-4 md:pr-6 md:pb-4 md:pl-6 bg-[#FEBF00] text-[#0A1425] font-bold font-primary text-[18px] leading-6 text-center'>About More</button>
              <div className='flex items-center md:pt-7 gap-2'>
                <Image src={call} alt='call_image' width={24} height={24} className='text-[#BD1F17] md:w-[20px] md:h-[20px] w-[20px] h-[20px]'/>
                <span className='font-bold font-primary text-center md:text-[18px] leading-[24px] text-[#0A1425] text-[14px]'>+88 3426 739 485</span>
              </div>
            </div>
          </div>
        </div>
        {/* bottom part */}
        <div className='md:flex md:justify-between md:w-full md:h-[90px] w-full pt-8 md:mt-20 h-[274px] gap-8'>
          {/* frame 1 */}
          <div className='md:w-[440px] md:h-full flex md:gap-4'>
            <Image src={framei} alt='frame_one' width={90} height={90}/>
            <div className='flex gap-0.5 md:w-[334px] md:h-[70px] flex-col pt-2'>
              <h3 className='font-bebas font-bold md:text-[30px] leading-[36px] text-[#0A1425]'>fast delivery</h3>
              <p className='font-primary font-normal text-[20px] leading-[32px] text-[#0A1425]'>Within 30 minutes</p>
            </div>
          </div>
          {/* frame 2 */}
          <div className='md:w-[440px] md:h-full flex md:gap-4'>
          <Image src={frameii} alt='frame_one' width={90} height={90}/>
            <div className='flex gap-0.5 md:w-[334px] md:h-[70px] flex-col pt-2'>
              <h3 className='font-bebas font-bold md:text-[30px] leading-[36px] text-[#0A1425]'>absolute dining</h3>
              <p className='font-primary font-normal text-[20px] leading-[32px] text-[#0A1425]'>Best buffet restaurant</p>
            </div>
          </div>
          {/* frame 3 */}
          <div className='md:w-[440px] md:h-full flex md:gap-4'>
          <Image src={frameiii} alt='frame_one' width={90} height={90}/>
            <div className='flex gap-0.5 md:w-[334px] md:h-[70px] flex-col pt-2'>
              <h3 className='font-bebas font-bold md:text-[30px] leading-[36px] text-[#0A1425]'>pickup delivery</h3>
              <p className='font-primary font-normal text-[20px] leading-[32px] text-[#0A1425]'>Grab your food order</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;