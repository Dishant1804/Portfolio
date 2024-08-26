import ExperienceAndEducation from "@/components/ExperienceAndEducation";
import HeroIntro from "@/components/HeroIntro";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ScrollAnimations from "@/components/scrollAnimation";

export default function Home() {

  return (
    <>
      <ScrollAnimations />
        <div className="flex flex-col w-full lg:mt-[50px] justify-center items-center ">
          <div className="flex flex-col lg:flex-row reveal mx-auto" id="home">
              <div>
                <Profile />
              </div>
            <div className="lg:ml-[30px] flex flex-col items-center mx-auto ">
              <HeroIntro />
              <Technologies />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center ml-[45px] lg:mx-auto">
            <div id="experience" className="reveal">
              <ExperienceAndEducation />
            </div>
            <div id="projects" className="reveal">
              <Projects />
            </div>
            <div id="contact" className="reveal">
              <ContactForm />
            </div>
          </div>
          <div>
            <Footer /> 
          </div>
        </div>
    </>
  );
}
