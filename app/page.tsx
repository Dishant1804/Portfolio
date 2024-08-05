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
        <div className="pl-[280px]">
          <div className="flex flex-row reveal" id="home">
              <Profile />
            <div className="ml-[30px]">
              <HeroIntro />
              <Technologies />
            </div>
          </div>
          <div className="flex flex-col">
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
        </div>
        <>
          <Footer />
        </>
    </>
  );
}
