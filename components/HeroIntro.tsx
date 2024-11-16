"use client";
import Image from "next/image";
import AvailableIcon from "../Utils/AvailableIcon.svg";
import DownloadIcon from "../Utils/download.svg";

const HeroIntro = () => {
  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1O0e5CqE8aafFIJbQbaX2Fu2VTRxQG7dd/view?usp=drive_link",
      "_blank",
    );
  };

  return (
    <div className="w-screen max-w-[950px] h-auto p-[20px] sm:p-[30px] md:p-[40px] bg-heroIntro-gradient border-0 mt-[20px] sm:mt-[30px] md:mt-[37px] rounded-[10px] sm:rounded-[15px] md:rounded-[20px] flex flex-col items-start justify-center gap-[16px]">
      <h3 className="text-[#9F9F9F] text-[20px] sm:text-[22px] md:text-[24px] flex flex-col w-[163px] h-[28px]">
        Hello There!
      </h3>
      <h1 className="w-full max-w-[780px] h-auto text-[#FFF] text-[32px] sm:text-[36px] md:text-[40px] flex flex-col justify-center leading-[40px] sm:leading-[45px] md:leading-[50px]">
        I'm Dishant, a passionate programmer who loves to convert innovative
        <br className="hidden sm:block" /> ideas into code.
      </h1>
      <div className="h-[35px] flex flex-row items-center gap-[10px]">
        <Image src={AvailableIcon} alt="available Icon" />
        <h2 className="text-[#9F9F9F] text-[14px] sm:text-[16px] md:text-[18px]">
          Available For FreeLancing
        </h2>
      </div>
      <button
        className="w-[140px] sm:w-[150px] md:w-[163px] h-[50px] sm:h-[55px] md:h-[60px] py-[10px] sm:py-[15px] md:py-[20px] bg-[#0B8A56] text-[#FFF] rounded-[10px] sm:rounded-[12px] md:rounded-[15px] gap-[3.5px] flex flex-row justify-center items-center border-0 hover:bg-[#666666] hover:duration-300"
        onClick={handleDownloadCV}
      >
        <h6 className="text-[14px] sm:text-[15px] md:text-[16px]">
          Download CV
        </h6>
        <Image src={DownloadIcon} alt="download" />
      </button>
    </div>
  );
};

export default HeroIntro;
