import Image from "next/image";
import rectangle from "../../../public/rectangle.png";

const Clients = () => {
  return (
    <section id="clients" className="md:max-w-[1920px] max-w-[390px] md:h-[788px] h-[722px] bg-center bg-cover md:gap-2 gap-2 overflow-x-hidden" style={{ backgroundImage: `url(/plate.jpeg)` }}>
      <div className="md:w-full md:h-[788px] md:pt-[120px] md:pr-[300px] md:pb-[120px] md:pl-[300px] w-full h-[722px] p-[30px] gap-[60px] md:gap-[60px]">
        <div className="md:w-[635px] md:h-[582px] md:gap-[40px] w-[330px] h-[662px] gap-[40px]">
          {/* top */}
          <div className="md:w-[635px] md:h-[174px] md:gap-[16px] w-[330px] h-[162px] gap-[8px] flex flex-col">
            <div>
              <div className="flex items-center gap-[10px] md:w-[635px] md:h-[32px] w-[330px] h-[26px]">
                <Image src={rectangle} alt="" className="w-[10px] h-[10px] bg-[#BD1F17]"/>
                <p className="md:w-[92px] md:h-[32px] font-primary font-bold md:text-[20px] md:leading-[32px] text-[16px] leading-[26px] w-[73px] h-[26px] text-[#BD1F17]">Book Now</p>
              </div>
              <h2 className="md:w-[662px] md:h-[45px] text-white font-bebas font-bold text-[62px] leading-[62px] w-[654px] h-[48px]">Book Your Table</h2>
            </div>
            <p className="md:w-[545px] md:h-[48px] text-[#F7F8F9] font-primary font-normal text-[16px] leading-[24px] w-[330px] h-[72px]">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </p>
          </div>
          {/* bottom */}
          <div className="md:w-[635px] md:h-[368px] md:gap-[32px] w-[330px] h-[46px] gap-[24px] flex flex-col">
            {/* from */}
            <div className="md:w-[635px] md:h-[280px] md:gap-[24px] w-[330px] h-[388px] gap-[16px] flex flex-col md:flex-row-2">
              <div className="md:w-[635px] md:h-[46px] md:gap-[30px] w-[330px] h-[108px] gap-[16px] flex flex-col md:flex-row">
                <input type="text" placeholder="Your Name*" className="md:w-[302.5px] md:h-[46px] md:gap-[8px] py-[12px] px-[16px] border-[1px] border-[#E5E7EB] bg-transparent font-primary font-normal text-[14px] leading-[22px] w-[330px] h-[46px] gap-[8px]"/>
                <input type="email" placeholder="Your Email" className="md:w-[302.5px] md:h-[46px] md:gap-[8px] py-[12px] px-[16px] border-[1px] border-[#E5E7EB] bg-transparent font-primary font-normal text-[14px] leading-[22px] w-[330px] h-[46px] gap-[8px]"/>
              </div>
              <div className="md:w-[635px] md:h-[46px] md:gap-[30px] w-[330px] h-[108px] gap-[16px] flex flex-col md:flex-row">
                <input type="text" placeholder="Reservation Date" className="md:w-[302.5px] md:h-[46px] md:gap-[8px] py-[12px] px-[16px] border-[1px] border-[#E5E7EB] bg-transparent font-primary font-normal text-[14px] leading-[22px] w-[330px] h-[46px] gap-[8px] text-white"/>
                <input type="number" placeholder="Total People" className="md:w-[302.5px] md:h-[46px] md:gap-[8px] py-[12px] px-[16px] border-[1px] border-[#E5E7EB] bg-transparent font-primary font-normal text-[14px] leading-[22px] w-[330px] h-[46px] gap-[8px]"/>
              </div>
              <div className="md:w-[635px] md:h-[140px] md:gap-[30px] border-[1px] bg-transparent py-[2px] px-[16px] w-[330px] h-[140px] gap-[30px]">
                <input placeholder="Message" className="md:w-[58px] md:h-[22px] font-primary font-normal text-[14px] leading-[22px] text-white bg-transparent"/>
              </div>
            </div>
            {/* button */}
            <div className="md:w-[142px] md:h-[56px] md:py-4 md:px-6 md:gap-2 py-[11px] px-[20px] gap-[6.86px] w-[123px] h-[48px] bg-[#FEBF00]">
              <p className="w-[83px] h-[26px] text-[#0A1425] font-primary font-bold text-center text-[16px] leading-[26px] md:w-[94px] md:h-[24px] md:text-[18px] md:leading-[24px]">Book Now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;