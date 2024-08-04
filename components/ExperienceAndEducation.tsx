import Image from "next/image";
import BookIcon from '../Utils/BookIcon.png';

const ExperienceAndEducation = () => {
  return <div className="flex flex-row w-[1394px] h-[625px] ">
    <div className="mt-[46px] w-[682px] mr-[30px] bg-experience-gradient h-full rounded-[20px]">
      <div className="w-1/2 h-full flex flex-row">
        <div>
          <h2 className="w-[191px] text-[#FFF] text-[32px] pt-[36px] pl-[80px] font-semibold flex flex-col">Experience</h2>
          <div className="flex flex-col h-[485px] w-[596px] pl-[65px]">
            <div className="w-full h-[161px] flex flex-row items-center border-b-2 border-[#77777D]/20">
              <div>
                <Image src={BookIcon} alt="Book icon" width={50} height={50} />
              </div>
              <div className="pl-[20px] w-auto">
                <div className="pt-[30px] flex flex-row  whitespace-nowrap text-[#9f9f9f] text-[16px]">
                  Jun&nbsp;2024&nbsp;&#45;&nbsp;present
                </div>
                <h2 className="mt-[12px] h-[22px] text-[#CCC] text-[24px] font-semibold ">Disbound</h2>
                <h3 className="mt-[16px] h-[30px] text-[16px] pb-[31.3px] text-[#77777D]">Backend Developer</h3>
              </div>
            </div>
            <div className="w-full h-[161px] flex flex-row items-center border-b-2 border-[#77777D]/20">
              <div>
                <Image src={BookIcon} alt="Book icon" width={50} height={50} />
              </div>
              <div className="pl-[20px] w-auto">
                <div className="pt-[30px] flex flex-row  whitespace-nowrap text-[#9f9f9f] text-[16px]">
                  Jun&nbsp;2021&nbsp;&#45;&nbsp;present
                </div>
                <h2 className="mt-[12px] h-[22px] text-[#CCC] text-[24px] font-semibold">Disbound</h2>
                <h3 className="mt-[16px] h-[30px] text-[16px] pb-[31.3px] text-[#77777D]">Backend Developer</h3>
              </div>
            </div>
            <div className="w-full h-[161px] flex flex-row items-center border-b-2 border-[#77777D]/20">
              <div>
                <Image src={BookIcon} alt="Book icon" width={50} height={50} />
              </div>
              <div className="pl-[20px] w-auto">
                <div className="pt-[30px] flex flex-row  whitespace-nowrap text-[#9f9f9f] text-[16px]">
                  Jun&nbsp;2024&nbsp;&#45;&nbsp;present
                </div>
                <h2 className="mt-[12px] h-[22px] text-[#CCC] text-[24px] font-semibold ">Disbound</h2>
                <h3 className="mt-[16px] h-[30px] text-[16px] pb-[31.3px] text-[#77777D]">Backend Developer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div className="mt-[46px] w-[682px] h-full bg-education-gradient rounded-[20px]">
        <div className="w-1/2 h-full flex flex-row">
          <div>
            <h2 className="w-[191px] text-[#FFF] text-[32px] pt-[36px] pl-[80px] font-semibold flex flex-col">Education</h2>
            <div className="flex flex-col h-[485px] w-[596px] pl-[47px]">
              <div className="w-full h-[180px] flex flex-row items-center border-b-2 border-[#77777D]/20">
                <div>
                  <Image src={BookIcon} alt="Book icon" width={50} height={50} />
                </div>
                <div className="pl-[20px] w-auto">
                  <div className="pt-[30px] flex flex-row  whitespace-nowrap text-[#9f9f9f] text-[16px]">
                    Sep&nbsp;2022&nbsp;&#45;&nbsp;present
                  </div>
                  <h2 className="mt-[12px] h-[22px] text-[#CCC] text-[22px] font-semibold ">Bachelor Degree Of Information Technology</h2>
                  <h3 className="mt-[16px] h-[30px] text-[16px] pb-[31.3px] text-[#77777D]">Parul Institute Of Engineering & Technology</h3>
                </div>
              </div>
              <div className="w-full h-[161px] flex flex-row items-center border-b-2 border-[#77777D]/20">
                <div>
                  <Image src={BookIcon} alt="Book icon" width={50} height={50} />
                </div>
                <div className="pl-[20px] w-auto">
                  <div className="pt-[30px] flex flex-row  whitespace-nowrap text-[#9f9f9f] text-[16px]">
                    Jun&nbsp;2021&nbsp;&#45;&nbsp;Mar 2022
                  </div>
                  <h2 className="mt-[12px] h-[22px] text-[#CCC] text-[24px] font-semibold">Higher Secondary School Certificate</h2>
                  <h3 className="mt-[16px] h-[30px] text-[16px] pb-[31.3px] text-[#77777D]">Ryan International</h3>
                </div>
              </div>
              <div className="w-full h-[161px] flex flex-row items-center border-b-2 border-[#77777D]/20">
                <div>
                  <Image src={BookIcon} alt="Book icon" width={50} height={50} />
                </div>
                <div className="pl-[20px] w-auto">
                  <div className="pt-[30px] flex flex-row  whitespace-nowrap text-[#9f9f9f] text-[16px]">
                    Jun&nbsp;2019&nbsp;&#45;&nbsp;Mar 2020
                  </div>
                  <h2 className="mt-[12px] h-[22px] text-[#CCC] text-[24px] font-semibold ">Secondary School Certificate</h2>
                  <h3 className="mt-[16px] h-[30px] text-[16px] pb-[31.3px] text-[#77777D]">Matushri Kashiben Vrajlal Valia International</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default ExperienceAndEducation;