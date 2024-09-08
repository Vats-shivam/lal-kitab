import { FunctionComponent } from "react";
import { TiShoppingCart } from "react-icons/ti";

export type LinkListType = {
  className?: string;
};

const LinkList: FunctionComponent<LinkListType> = ({ className = "" }) => {
  return (
    <section
      className={`flex flex-col items-center justify-start pt-0 px-9 box-border max-w-full text-center text-45xl text-color font-alegreya mq900:pb-[63px] mq1300:pb-[97px] ${className} mx-auto mt-24`}
    >
      <div className="w-full flex flex-col items-center justify-start gap-[18px] max-w-full">
        {/* Heading Section */}
        <div className="self-stretch bg-color flex flex-col items-center justify-start gap-0.5 text-center">
          <h1 className="m-0 text-[inherit] text-white font-sans font-bold text-33xl sm:text-32xl sm:text-center">
            Available Online Courses
          </h1>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 items-center gap-96 justify-center w-full flex-wrap mt-24">

          <div className="flex flex-col gap-8 px-4 py-2 shadow-black shadow-[10px_10px_15px_5px] rounded-xl">
            <img
              className="w-full max-w-lg object-cover mx-auto border-4 rounded-lg"
              loading="lazy"
              alt="Course Image 1"
              src="/basicCourse.png"
            />
            <div className="flex flex-col gap-2">
            <button className="buynow flex justify-center mx-auto font-bold bg-color">
              <div className="spinner w-1/4">
              </div>
              <div>Buy Now</div>
            </button>
            <button className="flex items-center uppercase justify-center mx-auto font-bold bg-black px-8 py-4 rounded-full text-white hover:bg-gradient-to-r hover:from-color hover:to-orange-600 hover:scale-110">
              {/* <img src="/shopping-cart.png" alt="shopping cart" className="size-4 bg-white" /> */}
              <TiShoppingCart size={"2rem"}/>
              <div>Add to cart</div>
            </button>
            </div>
            
          </div>
          <div className="flex flex-col gap-8 px-4 py-2 shadow-black shadow-[10px_10px_15px_5px] rounded-xl">
            <img
              className="w-full max-w-lg object-cover mx-auto"
              loading="lazy"
              alt="Course Image 2"
              src="/advanceCourse.png"
            />
            <div className="flex flex-col gap-2">
            <button className="buynow flex justify-center mx-auto font-bold bg-color">
              <div className="spinner w-1/4">
              </div>
              <div>Buy Now</div>
            </button>
            <button className="flex items-center uppercase justify-center mx-auto font-bold bg-black px-8 py-4 rounded-full text-white hover:bg-gradient-to-r hover:from-color hover:to-orange-600 hover:scale-110">
              {/* <img src="/shopping-cart.png" alt="shopping cart" className="size-4 bg-white" /> */}
              <TiShoppingCart size={"2rem"}/>
              <div>Add to cart</div>
            </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LinkList;
