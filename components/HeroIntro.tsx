"use client"
import Image from 'next/image';
import AvailableIcon from '../Utils/AvailableIcon.svg'
import DownloadIcon from '../Utils/download.svg'

const HeroIntro = () => {
  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1q7KZ_Uz-GQ_RU0rBUNTkThRiQAjpaF0Q/view?usp=sharing' , '_blank');
  };

  return (
    <div className="w-[950px] h-[403px] p-[40px] bg-heroIntro-gradient border-0 mt-[37px] rounded-[20px] flex flex-col items-start justify-center gap-[16px]">
      <h3 className="text-[#9F9F9F] text-[24px] flex flex-col w-[163px] h-[28px]">Hello There!</h3>
      <h1 className="w-[780px] h-[150px] text-[#FFF] text-[40px] flex flex-col justify-center leading-[50px]">I'm Dishant, a passionate programmer who loves to convert innovative<br></br> ideas into code.</h1>
      <div className='h-[35px] flex flex-row items-center gap-[10px]'>
        <Image src={AvailableIcon} alt='available Icon' />
        <h2 className='text-[#9F9F9F]'>Available For FreeLancing</h2>
      </div>
      <button
        className='w-[163px] h-[60px] py-[20px] bg-[#0B8A56] text-[#FFF] rounded-[15px] gap-[3.5px] flex flex-row justify-center items-center border-0 hover:bg-[#666666] hover:duration-300'
        onClick={handleDownloadCV}
      >
        <h6 className='text-[16px]'>Download CV</h6>
        <Image src={DownloadIcon} alt='download' />
      </button>
    </div>
  );
}

export default HeroIntro;