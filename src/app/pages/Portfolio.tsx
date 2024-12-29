import Image from 'next/image'
import portfolioi from "../../../public/portfolioi.png";
import rectangle from "../../../public/rectangle.png";
import left from "../../../public/left.png";
import right from "../../../public/right.png";
import slidei from "../../../public/slidei.png";
import slideii from "../../../public/slideii.png";
import slideiii from "../../../public/slideiii.png";
import slideiv from "../../../public/slideiv.png";

const Portfolio = () => {
  return (
    <section id="portfolio" className='md:max-w-[1920px] md:h-[710px] max-w-[390px] h-[532px] bg-[#FBF7F2] overflow-x-hidden'>
      <Image src={portfolioi} alt='' width={280.61} height={255.51} className='absolute pt-[200px] md:flex hidden'/>
      <div className='md:pt-[120px] md:pr-[300px] md:pb-[120px] md:pl-[300px] pt-[32px] pr-[30px] pb-[32px] pl-[30px] md:gap-[60px] gap-[48px]'>
        <div className='md:flex md:justify-between md:w-full md:h-[110px] w-full h-[82px]'>
          {/* left side */}
          <div className='md:w-[1168px] h-full'>
            <div>
            <div className='flex items-center gap-2'>
            <Image src={rectangle} alt='rectangle_image' width={10} height={10}/>
            <p className='md:w-[210px] md:h-[32px] font-primary font-bold md:text-[20px] leading-[32px] text-[#BD1F17]'>Crispy, Every Bite Taste</p>
            </div>
            <h2 className='font-bebas font-bold md:text-[62px] md:leading-[62px] text-[40px] leading-[48px] text-[#181818]'>POPULAR FOOD ITEMS</h2>
            </div>
          </div>
          {/* right side */}
          <div className='md:w-[152px] md:h-[60px] md:flex md:gap-8 hidden'>
            <button><Image src={left} alt='' width={60} height={60}/></button>
            <button><Image src={right} alt='' width={60} height={60}/></button>
          </div>
        </div>
        <div className='md:h-[300px] h-[356px] md:flex md:gap-8 pt-8'>
          {/* frame 1 */}
          <div className='md:w-[306px] md:h-[300px] bg-white p-8 flex justify-center flex-col items-center'>
            <Image src={slidei} alt='slider_one' width={120} height={120} className='flex justify-center'/>
            <span className='w-[57px] h-1 rounded-[4px] bg-[#BD1F17]'></span>
            <div className='flex flex-col gap-4 pt-6'>
              <p className='font-primary font-normal text-[24px] leading-[36px] text-center text-[#0A1425]'>vegetables burger</p>
              <p className='font-primary font-normal text-[16px] leading-[32px] text-center text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
            </div>
          </div>
          {/* frame 2 */}
          <div className='md:w-[306px] md:h-[300px] bg-white p-8 md:flex justify-center hidden flex-col items-center'>
            <Image src={slideii} alt='slider_one' width={120} height={120} className='flex justify-center'/>
            <span className='w-[57px] h-1 rounded-[4px] bg-[#BD1F17]'></span>
            <div className='flex flex-col gap-4 pt-6'>
              <p className='font-primary font-normal text-[24px] leading-[36px] text-center text-[#0A1425]'>Spacial Pizza </p>
              <p className='font-primary font-normal text-[16px] leading-[32px] text-center text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
            </div>
          </div>
          {/* frame 3 */}
          <div className='md:w-[306px] md:h-[300px] bg-white p-8 md:flex hidden justify-center flex-col items-center'>
            <Image src={slideiii} alt='slider_one' width={120} height={120} className='flex justify-center'/>
            <span className='w-[57px] h-1 rounded-[4px] bg-[#BD1F17]'></span>
            <div className='flex flex-col gap-4 pt-6'>
              <p className='font-primary font-normal text-[24px] leading-[36px] text-center text-[#0A1425]'>vegetables burger</p>
              <p className='font-primary font-normal text-[16px] leading-[32px] text-center text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
            </div>
          </div>
          {/* frame 4 */}
          <div className='md:w-[306px] md:h-[300px] bg-white p-8 md:flex hidden justify-center flex-col items-center'>
            <Image src={slideiv} alt='slider_one' width={120} height={120} className='flex justify-center'/>
            <span className='w-[57px] h-1 rounded-[4px] bg-[#BD1F17]'></span>
            <div className='flex flex-col gap-4 pt-6'>
              <p className='font-primary font-normal text-[24px] leading-[36px] text-center text-[#0A1425]'>vegetables burger</p>
              <p className='font-primary font-normal text-[16px] leading-[32px] text-center text-[#0A1425]'>Barbecue Italian cuisine pizza</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio;