import { FunctionComponent } from "react";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[170px] pl-px pr-0 box-border max-w-full text-left text-lg text-black font-alegreya mq900:pb-[71px] mq900:box-border mq1300:pb-[110px] mq1300:box-border ${className}`}
    >
      <div className="w-[1596px] flex flex-row items-start justify-center py-0 pl-[68px] pr-5 box-border relative max-w-full mq1300:pl-[34px] mq1300:box-border">
        <div className="w-[1126px] flex flex-row items-start justify-start flex-wrap content-start gap-[124px] max-w-full mq900:gap-[31px] mq1300:gap-[62px] mq450:gap-[15px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[121px] min-w-[326px] max-w-full mq900:gap-[60px] mq450:gap-[30px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-0.5 pr-0 box-border max-w-full">
              <img
                className="h-[500px] flex-1 relative max-w-full overflow-hidden object-cover"
                loading="lazy"
                alt=""
                src="/mask-group@2x.png"
              />
            </div>
            <div className="w-[465px] flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="self-stretch relative">
              Taking this astrology course has been an enlightening experience. The depth of information provided is impressive, yet it's presented in a way that’s accessible and easy to grasp. From natal chart interpretations to understanding planetary influences, I’ve learned how to apply astrology in practical ways. The support from the community and instructors is fantastic, too! I highly recommend this course to anyone serious about learning astrology.
              </div>
              <div className="h-[33px] relative text-5xl inline-block mq450:text-lgi">
              Amol Sadashiv Joshi , Jalgaon , Maharashtra , India
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[121px] min-w-[326px] max-w-full mq900:gap-[60px] mq450:gap-[30px]">
            <img
              className="self-stretch h-[500px] relative max-w-full overflow-hidden shrink-0 object-cover"
              loading="lazy"
              alt=""
              src="/mask-group@3x.png"
            />
            <div className="w-[465px] flex flex-col items-start justify-start gap-[15px] max-w-full">
              <div className="self-stretch relative">
              I have always been curious about astrology, but this course truly exceeded my expectations. The lessons are well-structured and easy to follow, even for beginners like me. The instructors are knowledgeable and passionate, making the material engaging and fun. I've gained so much insight into astrological charts and how they influence our lives. This course is a game-changer for anyone looking to dive deep into astrology!
              </div>
              <div className="h-[33px] relative text-5xl inline-block mq450:text-lgi">
              Acharya Kunjbihari Jindal , Jind , Haryana
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[54px] w-[54px] absolute !m-[0] top-[229px] left-[0px] overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/arrow--left-2.svg"
        />
        <img
          className="h-[54px] w-[54px] absolute !m-[0] top-[229px] right-[0px] overflow-hidden shrink-0 object-contain"
          loading="lazy"
          alt=""
          src="/arrow--left-3@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
