import footerbg from "../../../public/footerbg.jpeg";
import clock from "../../../public/clock.png";
import call from "../../../public/call.png";
import mail from "../../../public/mail.png";
import map from "../../../public/map.png";
import facebook from "../../../public/facebook.png";
import twitter from "../../../public/twitter.png";
import instragram from "../../../public/instragram.png";
import linkedin from "../../../public/linkedin.png";
import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="relative md:max-w-[1920px] max-w-[390px] md:h-[719.45px] h-[1088px] bg-[#000000] overflow-x-hidden">
      {/* Background image */}
      <Image src={footerbg} alt="" className="w-full h-full object-cover" />
      
      {/* Overlay with backdrop filter */}
      <div className="absolute inset-0 backdrop-blur-custom bg-opacity-50 bg-black p-[30px] md:pt-[120px] md:pr-[300px] md:pb-[120px] md:pl-[300px] md:gap-2 gap-2 flex items-center justify-center">
        
        <div className="md:w-[1320px] md:h-[479.45px] w-[330px] h-[939px] gap-[60px] md:gap-[120px]">
          
          {/* Main Content */}
          <div className="flex flex-col items-center md:gap-[72px] gap-[48px] md:w-[1320px] md:h-[256px] w-[330px] h-[808px]">
            
            <h1 className="text-[#FFFFFF] font-bold text-[40px] leading-[48px] text-center font-bebas">
              We’re ready to offer you the best dining experiences
            </h1>

            {/* Info sliders */}
            <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[24px] md:w-[1320px] w-[330px]">
              
              {/* Info Item Component */}
              {[
                { icon: clock, title: "Opening hours", text: "Monday - Sunday 9:00 AM to 11:30 PM" },
                { icon: call, title: "LET'S TALK", text: "Phone: 1-800-222-4545 Fax: 1-800-222-4545" },
                { icon: mail, title: "BOOK A TABLE", text: "Email: demo@website.com Support: support@website.com" },
                { icon: map, title: "Our Address", text: "123 Street New York City, United States Of America." }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-[16px] w-[330px] md:w-[312px]">
                  <Image src={item.icon} alt={item.title} className="w-[30px] h-[30px]" />
                  <div className="text-center">
                    <h3 className="font-bold text-[24px] text-[#FFFFFF] tracking-wider font-bebas">{item.title}</h3>
                    <p className="text-[16px] text-white leading-[25px] font-normal">{item.text}</p>
                  </div>
                </div>
              ))}

            </div>
          </div>
          
          {/* Footer Social Media and Copyright */}
          <div className="flex flex-col items-center justify-center gap-[16px] md:gap-[25px] w-[194px] h-[171px] md:w-[285.82px] md:h-[103.45px] mx-auto md:pt-[200px]">
            <div className="flex items-center gap-[16px] md:gap-[24px]">
              {[facebook, twitter, instragram, linkedin].map((icon, index) => (
                <Image key={index} src={icon} alt="Social Icon" className="h-[36px] w-[36px] md:w-[53.45px] md:h-[53.45px] md:p-[14.73px] p-[9.92px]" />
              ))}
            </div>
            <p className="text-center font-bold text-[16px] font-primary text-white">
              © <span className="font-normal">2023 All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;