import Image from 'next/image';
import footerl from "../../../public/footertl.png";
import leaf from "../../../public/leaf.png";
import rectangle from "../../../public/rectangle.png";
import left from "../../../public/left.png";
import right from "../../../public/right.png";
import desktopquote from "../../../public/desktopquote.png";
import mobilequote from "../../../public/mobilequote.png";

const Blog = () => {
  return (
    <section
      id="blog"
      className="md:relative md:max-w-[1920px] w-full md:h-[965.97px] h-auto overflow-x-hidden"
    >
      {/* Wrapper for left image */}
      <div className="absolute md:flex hidden -left-48 md:mt-48 overflow-hidden">
        <Image src={footerl} alt="footer_image" width={307} height={303} />
      </div>
      {/* Wrapper for right image */}
      <div className="absolute md:flex hidden -right-48 rotate-45 md:mt-96 overflow-hidden">
        <Image src={leaf} alt="leaf_image" width={566.44} height={303.19} />
      </div>
      {/* Blog Content */}
      <div className="md:pt-[120px] md:pb-[120px] md:pr-[300px] md:pl-[300px] p-[30px] gap-[24px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-[24px]">
          <div className="flex flex-col gap-2 md:text-left">
            <div className="flex md:justify-start gap-[10px] items-center">
              <Image src={rectangle} alt="rectangle_image" width={10} height={10} />
              <p className="font-primary font-bold md:text-[20px] text-[16px] leading-[26px] md:leading-[32px] text-[#BD1F17]">
                Crispy, Every Bite Taste
              </p>
            </div>
            <h2 className="font-bebas font-bold md:text-[62px] text-[36px] leading-[48px] md:leading-[62px] text-[#181818]">
              What Some of my Customers Say
            </h2>
          </div>
          <div className="hidden md:flex md:w-[152px] md:h-[60px] gap-8">
            <button>
              <Image src={left} alt="left_arrow" width={60} height={60} />
            </button>
            <button>
              <Image src={right} alt="right_arrow" width={60} height={60} />
            </button>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="pt-9">
          {/* Desktop View */}
          <div className="hidden md:flex">
            <Image src={desktopquote} alt="desktop_quote" width={1320} height={555.97} />
          </div>
          {/* Mobile View */}
          <div className="flex md:hidden justify-center">
            <Image src={mobilequote} alt="mobile_quote" width={330} height={639.95} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
