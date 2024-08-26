import Image from "next/image";
import Link from "next/link";
import profilePhoto from '../Utils/ProfilePhoto.png';
import githubIcon from '../Utils/githubProfile.svg';
import linkedinIcon from '../Utils/linkedinProfile.svg';
import mailIcon from '../Utils/mailProfile.svg';
import twitterIcon from '../Utils/twitterProfile.svg'

const Profile = () => {
  const email = 'dishantmiyani1804' + '@' + 'gmail' + '.' + 'com';
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;

  return (
    <div className="lg:max-w-[412px] w-screen h-[691px] bg-profile-gradiet rounded-[20px] border-0 mt-[37px] flex flex-col items-center mx-[20px] lg:mx-0 ">
      <div className="flex flex-col items-center">
        <Image src={profilePhoto} width={310} height={310} style={{ objectFit: 'cover' }} alt="Profile Image" className="mt-[64px] rounded-full" />
        <h1 className="text-white text-[44px] leading-[48px] mt-[60px] flex justify-center items-center ">
          Dishant Miyani
        </h1>
        <p className="lg:max-w-[273px] mt-[36px] text-[#9f9f9f] text-xl text-center px-[20px] lg:px-0">
          I am a Full Stack Web Developer &amp; AI/ML Engineer based in India.
        </p>
        <ul className="flex justify-center gap-[30px] mt-[20px] w-screen ">
          <li className="tooltip" data-tooltip="Let's connect">
            <Link href="https://www.linkedin.com/in/dishantmiyani/" target="_blank" rel="noopener noreferrer">
              <Image src={linkedinIcon} height={35} width={35} alt="LinkedIn" className="opacity-80" />
            </Link>
          </li>
          <li className="tooltip" data-tooltip="Mail me">
            <Link href={gmailUrl} target="_blank" rel="noopener noreferrer">
              <Image src={mailIcon} height={35} width={35} alt="Email" className="opacity-80" />
            </Link>
          </li>
          <li className="tooltip" data-tooltip="Github">
            <Link href="https://github.com/Dishant1804/" target="_blank" rel="noopener noreferrer">
              <Image src={githubIcon} height={35} width={35} alt="GitHub" className="opacity-80" />
            </Link>
          </li>
          <li className="tooltip" data-tooltip="Twitter">
            <Link href="https://x.com/MiyaniDishant" target="_blank" rel="noopener noreferrer">
              <Image src={twitterIcon} height={35} width={35} alt="Twitter" className="opacity-80" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;