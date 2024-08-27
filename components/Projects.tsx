import Image from "next/image";
import ProfileIcon from '../Utils/ProfilePhoto.png'
import githubIcon from '../Utils/githubIcon.svg'
import Link from "next/link";

const Projects = () => {
  return (
    <div className="mt-[46px] w-screen lg:max-w-[1394px] h-auto rounded-[20px] bg-project-gradient flex flex-col items-center p-[30px] ">
      <h1 className="w-full h-[60px] pt-[41px] flex justify-center items-center text-[#FFF] text-[35px] lg:text-[40px] font-semibold">
        Works & Projects
      </h1>
      <div className="w-full pt-[35px] flex justify-center items-center">
        <div className="w-[90%] lg:w-[590px] flex flex-col flex-wrap leading-relaxed justify-center items-center text-[#9f9f9f] text-[16px] text-center">
          Check out some of my projects,crafted with love and dedication, each one reflecting the passion and soul I poured into every detail.
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center mt-[20px] items-center lg:px-[30px]">
        {/** main div */}
        <div className="flex flex-col h-auto lg:h-[768px] lg:max-w-[575px] lg:mr-[27px]">
          {/** left div */}
          <div className="h-auto lg:h-[312px] lg:max-w-[575px] rounded-[20px] border border-[#77777D]/30 p-[27px] shadow-xl shadow-black hover:border-white/30 hover:transition hover:duration-500">
            {/** top div */}
            <div className="flex flex-row h-[40px] items-center">
              <div className="flex justify-center items-center gap-[13px]">
                <Image src={ProfileIcon} alt="profile Icon" width={40} height={40} />
                <h2 className="text-[#FFF] text-[16px]">Dishant Miyani</h2>
              </div>
              <div className="ml-auto lg:ml-[280px]">
                <Link href="https://github.com/Dishant1804/Multiple-Disease-Classifier" target="_blank" rel="noopener noreferrer">
                  <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Check code here">
                    <Image src={githubIcon} alt="github" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
            <h1 className="text-[#FFF] text-[28px] mt-[22px] font-semibold">HealthInsight</h1>
            <p className="mt-[10px] w-full lg:w-[472px] text-[#CCC] text-[16px]">
              Developed a diagnostic tool using ML model and NLP technologies combining chronic disease classification and report analysis, enhancing early detection and patient care.
            </p>
            <div className="flex flex-row gap-[10px] mt-[12px]">
              {/** technologies and tools used */}
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Python">
                <i className="devicon-python-plain"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="TensorFlow">
                <i className="devicon-tensorflow-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="PyTorch">
                <i className="devicon-pytorch-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Pandas">
                <i className="devicon-pandas-plain"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Streamlit">
                <i className="devicon-streamlit-plain"></i>
              </div>
            </div>
          </div>
          <div className="h-auto lg:h-[410px] w-full lg:max-w-[575px] mt-[24px] rounded-[20px] border border-[#77777D]/30 px-[27px] pt-[36px] pb-[27px] shadow-xl shadow-black hover:border-white/30 hover:transition hover:duration-500">
            {/** bottom div */}
            <div className="flex flex-row h-[40px] items-center">
              <div className="flex justify-center items-center gap-[13px] ">
                <Image src={ProfileIcon} alt="profile Icon" width={40} height={40} />
                <h2 className="text-[#FFF] text-[16px]">Dishant Miyani</h2>
              </div>
              <div className="ml-auto lg:ml-[280px]">
                <Link href="https://github.com/Dishant1804/Type-Trek" target="_blank" rel="noopener noreferrer">
                  <div className="ml-auto h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Check code here">
                    <Image src={githubIcon} alt="github" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
            <h1 className="text-[#FFF] text-[28px] mt-[35px] font-semibold">Type-Trek</h1>
            <p className="mt-[20px] w-full lg:w-[472px] text-[#CCC] text-[16px]">
              Type Trek is a dynamic and engaging speed typing website that enhances your typing speed and accuracy through interactive challenge. Ideal for all skill levels due to flexibility of selecting number of words, Type Trek combines fun with functionality, thus it improves their typing skills while enjoying a seamless typing experience.
            </p>
            <div className="flex flex-row gap-[10px] mt-[30px]">
              {/** technologies and tools used */}
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="JavaScript">
                <i className="devicon-javascript-plain"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="React">
                <i className="devicon-react-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Tailwind CSS">
                <i className="devicon-tailwindcss-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Netlify">
                <i className="devicon-netlify-plain"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-auto lg:h-[768px] lg:max-w-[575px] mt-[27px] lg:mt-[0px]">
          {/** right div */}
          <div className="h-auto lg:h-[410px] w-full lg:max-w-[575px] rounded-[20px] border border-[#77777D]/30 p-[27px] shadow-xl shadow-black hover:border-white/30 hover:transition hover:duration-500">
            {/** top div */}
            <div className="flex flex-row h-[40px] items-center">
              <div className="flex justify-center items-center gap-[13px]">
                <Image src={ProfileIcon} alt="profile Icon" width={40} height={40} />
                <h2 className="text-[#FFF] text-[16px]">Dishant Miyani</h2>
              </div>
              <div className="ml-auto lg:ml-[160px] gap-[10px] flex justify-center items-center">
                <div>
                  <h4 className="text-[12px] lg:text-[16px] text-[#77777D] flex flex-row whitespace-nowrap">Currently Working</h4>
                </div>
                <div>
                  <Link href="https://github.com/Dishant1804/SyntaxSnipp" target="_blank" rel="noopener noreferrer">
                    <div className=" h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Check code here">
                      <Image src={githubIcon} alt="github" width={20} height={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <h1 className="text-[#FFF] text-[28px] mt-[25px] font-semibold">Syntax-Snipp</h1>
            <p className="mt-[15px] w-full lg:w-[482px] text-[#CCC] text-[16px]">
              Syntax Snipp is a platform for developers to showcase their code snippets. Users can upload and share their syntax directly from Visual Studio Code, making it easy to flaunt their coding skills. This tool enhances collaboration and visibility within the developer community, providing a streamlined way to manage and display code snippets professionally.
            </p>
            <div className="flex flex-row gap-[10px] mt-[30px]">
              {/** technologies and tools used */}
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="TypeScript">
                <i className="devicon-typescript-plain"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Next.js">
                <i className="devicon-nextjs-plain"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Tailwind CSS">
                <i className="devicon-tailwindcss-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Express">
                <i className="devicon-express-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Prisma">
                <i className="devicon-prisma-original"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="PostgreSQL">
                <i className="devicon-postgresql-plain"></i>
              </div>
            </div>
          </div>
          <div className="h-auto lg:h-[302px] w-full lg:w-[575px] mt-[24px] rounded-[20px] border border-[#77777D]/30 p-[27px] shadow-xl shadow-black hover:border-white/30 hover:transition hover:duration-500">
            {/** bottom div */}
            <div className="flex flex-row h-[40px] items-center">
              <div className="flex gap-[13px] items-center justify-center">
                <Image src={ProfileIcon} alt="profile Icon" width={40} height={40} />
                <h2 className="text-[#FFF] text-[16px]">Dishant Miyani</h2>
              </div>
              <div className="ml-auto lg:ml-[280px]">
                <Link href="https://github.com/Dishant1804/socket-chat" target="_blank" rel="noopener noreferrer">
                  <div className="ml-auto h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Check code here">
                    <Image src={githubIcon} alt="github" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
            <h1 className="text-[#FFF] text-[28px] mt-[22px] font-semibold">Socket Chat</h1>
            <p className="mt-[10px] w-full lg:w-[482px] text-[#CCC] text-[16px]">
              Socket Chat is a terminal-based chat application developed in C using socket programming. It features client-server architecture, enabling real-time text communication, socket creation and management.
            </p>
            <div className="flex flex-row gap-[10px] mt-[12px]">
              {/** technologies and tools used */}
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="C">
                <i className="devicon-c-plain"></i>
              </div>
              <div className="h-[40px] w-[40px] border text-[#CCC] border-[#7777] rounded-[10px] flex justify-center items-center tooltip" data-tooltip="Bash">
                <i className="devicon-bash-plain"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;