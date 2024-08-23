"use client";

import { useState } from "react";
import Image from "next/image";
import mailIcon from "../Utils/sendMessage.svg";
import mail from "../Utils/mail.svg";
import location from "../Utils/location.svg";
import followIcon from "../Utils/user-plus-solid.svg";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        const errorData = await response.json();
        console.error("Error data:", errorData);
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex flex-col mt-[36px] h-[750px] w-full  max-w-[1394px] bg-contact-gradient rounded-[20px] ">
      <div className="flex justify-center w-full ">
        <h3 className="text-[20px] text-[#9c9c9c] mt-[35px] ">Contact</h3>
      </div>
      <h1 className="flex justify-center items-center text-[40px] text-[#FFF] font-semibold ">
        Get In Touch With Me!
      </h1>
      <div className="flex flex-row w-full h-[512px] gap-[20px] justify-center items-center mt-[40px]">
        <div className="flex flex-col justify-evenly w-[350px] h-full border border-white/20 rounded-[20px] pl-[28px] shadow-xl shadow-black hidden md:block ">
          <div className="flex flex-col gap-[5px] mt-[60px] pl-[15px]">
            <div className="flex flex-row items-center gap-[5px]">
              <Image
                src={location}
                className="text-[#0B8A56]"
                height={16}
                width={16}
                alt="Location icon"
              />
              <h3 className="text-[#9c9c9c] flex flex-start  text-[20px] font-semibold">
                Location
              </h3>
            </div>
            <h5 className="text-[#9c9c9c] pl-[20px]">India</h5>
          </div>
          <div className="flex flex-col mt-[40px] pl-[15px]">
            <div className="flex flex-row gap-[5px] items-center">
              <Image src={mail} height={16} width={16} alt="Mail icon" />
              <h3 className="text-[#9c9c9c] flex flex-start text-[18px] font-semibold">
                Email
              </h3>
            </div>
            <h5 className="text-[#9c9c9c] pl-[20px] mt-[5px] ">
              dishantmiyani1804@gmail.com
            </h5>
          </div>
          <div className="flex flex-col mt-[40px] pl-[15px] ">
            <div className="flex flex-row gap-[5px] items-center">
              <Image src={followIcon} height={16} width={16} alt="Mail icon" />
              <h3 className="text-[#9c9c9c] flex flex-start text-[18px] font-semibold">
                Find me on
              </h3>
            </div>
            <ul className="text-[#9c9c9c] flex flex-row gap-[10px] pl-[20px] mt-[5px] mb-[60px] ">
              <Link
                href={"https://github.com/Dishant1804/"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Github
              </Link>
              <Link
                href={"https://x.com/MiyaniDishant"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </Link>
              <Link
                href={"https://www.linkedin.com/in/dishantmiyani/"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </Link>
              {/* <Link href={'https://github.com/Dishant1804/'} className="hover:underline">Discord</Link> */}
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-[800px] h-full border border-white/20 rounded-[20px] pl-[28px]  shadow-xl shadow-black ">
          <div className="mt-[25px] pl-[8px] flex flex-row text-[#9c9c9c] font-semibold">
            <div className="mr-[292px]">Full name</div>
            <div>Email Address</div>
          </div>
          <div className="mt-[7px] flex flex-row text-[#9c9c9c] font-semibold">
            <input
              type="text"
              placeholder="John Doe"
              className="mr-[20px] text-[14px] w-[352px] bg-[#013220] h-[60px] rounded-[15px] pl-[21px] shadow-xl shadow-black focus:outline-none focus:border-none focus:ring-0 "
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-[352px] bg-[#013220] h-[60px] text-[14px] rounded-[15px] pl-[21px] shadow-xl shadow-black focus:outline-none focus:border-none focus:ring-0"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
          </div>
          <div className="mt-[20px] pl-[8px] flex flex-row text-[#9c9c9c] font-semibold">
            <div className="mr-[292px]">Subject</div>
          </div>
          <div className="mt-[7px] flex flex-row text-[#9c9c9c] font-semibold">
            <input
              type="text"
              placeholder="Write Your Message"
              className="text-[14px] w-[728px] bg-[#013220] h-[60px] rounded-[15px] pl-[21px] shadow-xl shadow-black focus:outline-none focus:border-none focus:ring-0"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            ></input>
          </div>
          <div className="mt-[20px] pl-[8px] flex flex-row text-[#9c9c9c] font-semibold">
            <div className="mr-[292px]">Message</div>
          </div>
          <div className="mt-2 flex flex-row text-[#9c9c9c] font-semibold">
            <textarea
              placeholder="Write Your Message"
              maxLength={260}
              className=" p-[20px] text-[14px] w-[728px] bg-[#013220] h-32 rounded-[15px] resize-none shadow-xl shadow-black focus:outline-none focus:border-none focus:ring-0"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            className="text-[#FFF] mt-[24px] flex w-[195px] px-[25px] py-[13px] bg-[#0B8A56] rounded-[15px] justify-center items-center gap-[5px] text-[16px] font-semibold hover:bg-[#5555] hover:duration-300 "
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Send Message
            <Image src={mailIcon} height={16} width={16} alt="" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

