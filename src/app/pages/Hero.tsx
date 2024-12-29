import Image from 'next/image';
import heroimage from "../../../public/heroimage.png";
import vector from "../../../public/vector.png";
import offer from "../../../public/offer.png";

const Hero = () => {
  return (
    <section id="#home" className="md:max-w-[1920px] max-w-[390px] md:h-[1047px] h-[792.1px] bg-[#BD1F17] bg-center">
      <div className="absolute w-full h-full opacity-[0.04]" style={{ backgroundImage: `url(image.png)` }} />
      <div className="relative w-full h-full">
        <div className="absolute inset-0 opacity-[0.12] bg-center w-full h-full" style={{ backgroundImage: `url(naranjas.png)` }} />
          <div className='pt-[108px]'>
            <div className='md:pt-[130px] md:pr-[300px] md:pl-[300px] pt-[32px] pl-[30px] pr-[30px] md:grid md:grid-cols-2 md:gap-[8px]'>
              {/* left side */}
              <div className='z-10 md:pt-[134px] md:w-[946px] mb-8'>
                <div className='md:pb-[16px] mb-4 font-primary font-normal text-[24px] leading-[32px] text-white'>
                  <div className=''>
                    <h1 className='font-bebas md:text-[120px] text-[48px] leading-[56px] md:leading-[130px] text-white'>Taste the authentic Saudi cuisine</h1>
                  </div>
                  <p>Among the best Saudi chefs in the world, serving <br /> you something beyond flavor. </p>
                </div>
                <button className='w-[180px] h-[56px] bg-[#FEBF00] text-[#0A1425] font-bold text-[18px] leading-[24px] text-center font-primary'>Explore Menu</button>
              </div>
              {/* right side */}
              <div className="relative flex flex-col items-end">
                {/* Vector image aligned to the right */}
                <Image src={vector} alt="star_image" width={45} height={45} className="absolute md:-top-9 md:-right-6 -top-5"/>
                {/* Hero content image */}
                <Image src={heroimage} alt="hero_banner" width={700} height={649} className="relative"/>
                {/* offer image */}
                <Image src={offer} alt='offer_iamge' width={120} height={120} className='absolute bottom-0 md:-bottom-4 md:-right-14 md:w-[120px] md:h-[120px] w-[72px] h-[72px]'/> 
              </div>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Hero;


