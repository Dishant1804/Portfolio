import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "Poppins": ["Poppins", 'sans-serif'],
    },
    backgroundImage: {
      'profile-gradiet': 'linear-gradient(163deg, #09B06B -35.84%, #000 52.07%, #1E1E1E 124.62%), linear-gradient(180deg, #121214 0%, #6E6E7A 100%)',
      'heroIntro-gradient': 'linear-gradient(145deg, #09B06B -45.84%, #000 38.96%, #1E1E1E 130.89%), linear-gradient(180deg, #121214 0%, #6E6E7A 100%)',
      'technology-gradient': 'linear-gradient(102deg, rgba(30, 30, 30, 0.18) 9.93%, rgba(132, 132, 132, 0.18) 127.66%)',
      'experience-gradient' : 'linear-gradient(120deg, #09B06B -51.14%, rgba(0, 0, 0, 0.80) 47.27%, #1E1E1E 189.47%)',
      'education-gradient': 'linear-gradient(120deg, rgba(30, 30, 30, 0.2) 38.08%, rgba(132, 132, 132, 0.5) 200.67%)',
      'project-gradient' : 'linear-gradient(96deg, #09B06B -69.26%, #000 31.68%, #1E1E1E 101.8%)',
      'contact-gradient' : 'linear-gradient(63deg, #09B06B -69.52%, rgba(8, 156, 95, 0.98) -69.5%, rgba(0, 0, 0, 0.80) 44.51%, #1E1E1E 98.98%), linear-gradient(122deg, rgba(9, 176, 107, 0.50) -49.06%, #000 -10.7%, #1E1E1E 92.16%)'
    },
    extend: {
      animation: {
        "loop-scroll-front": "loop-scroll-front 40s linear infinite",
        "loop-scroll-back": "loop-scroll-back 40s linear infinite",
      },
      keyframes: {
        "loop-scroll-front": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "loop-scroll-back": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        }
      },
    }
  },
  plugins: [],
};

export default config;