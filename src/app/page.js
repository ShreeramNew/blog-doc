"use client";
import Image from "next/image";
import { Carousel } from "./components/Carousel";
import ShowCaseCard from "./components/ShowCaseCard";
import { useEffect } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import Step1 from "./components/sections/Step1";
import { DM_Serif_Text } from "next/font/google";
import Step2 from "./components/sections/Step2";

const dmSerif = DM_Serif_Text({ subsets: ["latin-ext"], weight: "400" });

export default function Home() {
   const CourseData = [
      {
         id: "1",
         imageLink: "https://cdn.pixabay.com/photo/2021/11/14/18/36/telework-6795505_1280.jpg",
         courseName: "Full-Stack Web Development",
         description:
            "Master MERN Stack (MongoDB, Express.js, React, Node.js). Learn to build full-stack applications from scratch, covering front-end, back-end, APIs, authentication, and deployment.",
         price: "$199",
      },
      {
         id: "2",
         imageLink:
            "https://cdn.pixabay.com/photo/2016/06/03/13/57/digital-marketing-1433427_1280.jpg",
         courseName: "Digital Marketing & SEO Mastery",
         description:
            "Boost Your Brand with SEO, Ads & Social Media. Learn search engine optimization, Google Ads, social media marketing, and content strategies to grow any business online.",
         price: "$179",
      },
      {
         id: "3",
         imageLink: "https://cdn.pixabay.com/photo/2017/10/01/14/56/communication-2805785_1280.jpg",
         courseName: "Graphic Design & Branding",
         description:
            "Create Stunning Visuals with Photoshop & Illustrator. Learn to design logos, social media posts, and branding materials with Adobe tools. Perfect for aspiring designers and entrepreneurs.",
         price: "$149",
      },
      {
         id: "4",
         imageLink: "https://cdn.pixabay.com/photo/2024/04/05/05/17/technology-8676540_1280.jpg",
         courseName: "Personal Finance & Investing",
         description:
            "Master Money Management & Build Wealth. Learn budgeting, investing, stock market basics, and financial planning to secure your future.",
         price: "$199",
      },
      {
         id: "5",
         imageLink: "https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010_1280.jpg",
         courseName: "Photography & Videography Essentials",
         description:
            "Shoot Like a Pro with DSLR & Mobile. Learn camera settings, lighting, composition, and video editing to create high-quality content.",
         price: "$159",
      },
      {
         id: "6",
         imageLink:
            "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372_1280.jpg",
         courseName: "Psychology & Human Behavior",
         description:
            "Understand How the Mind Works. Explore cognitive psychology, emotional intelligence, and behavioral patterns to improve communication and decision-making.",
         price: "$179",
      },
      {
         id: "7",
         imageLink: "https://cdn.pixabay.com/photo/2023/08/10/04/37/woman-8180786_1280.png",
         courseName: "Yoga & Mindfulness Masterclass",
         description:
            "Achieve Inner Peace & Physical Strength. Learn meditation, breathing exercises, and yoga postures for better health and well-being.",
         price: "$129",
      },
      {
         id: "8",
         imageLink:
            "https://images.unsplash.com/photo-1590650046871-92c887180603?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNwZWFraW5nfGVufDB8fDB8fHww",
         courseName: "Language Learning",
         description:
            "Master Spanish in 30 Days. Learn essential grammar, pronunciation, and conversational Spanish with interactive exercises.",
         price: "$149",
      },
      {
         id: "9",
         imageLink: "https://cdn.pixabay.com/photo/2019/11/18/03/24/dj-4633915_1280.jpg",
         courseName: "Music Production & Beat Making",
         description:
            "Create Professional Tracks with FL Studio & Ableton. Learn music theory, audio mixing, and beat production for electronic and hip-hop genres.",
         price: "$199",
      },
      {
         id: "10",
         imageLink: "https://cdn.pixabay.com/photo/2025/01/18/09/12/ai-generated-9341711_1280.png",
         courseName: "Cooking & Culinary Arts",
         description:
            "Master the Art of Cooking Like a Chef. Learn knife skills, plating, international cuisines, and healthy meal preparation.",
         price: "$99",
      },
   ];

   useEffect(() => {
      {
         console.log(
            CourseData.map(({ id, imageLink, courseName, description, price }) => (
               <ShowCaseCard
                  key={id}
                  id={id}
                  imageLink={imageLink}
                  courseName={courseName}
                  description={description}
                  price={price}
               />
            ))
         );
      }
   }, []);

   return (
      <div className=" flex bg-[#191919] h-fit">
         <div className=" hidden md:block h-screen  w-[23rem] border-r-2  flex-shrink-0"></div>
         <div className="p-[0rem] md:p-[2rem] flex-grow border- border-red-900 w-full md:w-[calc(100vw-24rem)]">
            <div className=" text-[2.8rem] my-[2rem] text-white font-bold max-w-[65rem] ">
               Creating a <span className={` text-[#996ec8]`}>Smooth Carousel Slider </span>{" "}
               Component in React/NextJs
            </div>
            <div className=" text-[#cbcbcb] text-[1.3rem] mt-4 max-w-[90%] mb-[3rem] ">
               This blog post delves into the creation of a custom carousel slider component using
               React. Our carousel, aptly named Carousel, allows you to showcase various content
               cards with fluid navigation controls. Whether you're highlighting featured products,
               client testimonials, or portfolio items, this component offers flexibility and
               elegance. <br /> <br /> We'll explore how to implement this carousel, discuss its key
               features such as loop navigation and customizable gap between cards, and provide
               insights into handling responsive behavior. By the end, you'll have a solid
               understanding of how to integrate and customize this carousel in your own React
               projects, enhancing user engagement with dynamic content display.
            </div>

            <div className=" text-2xl text-white mb-[4rem]">#Demo</div>

            <Carousel>
               {CourseData.map(({ id, imageLink, courseName, description, price }) => (
                  <ShowCaseCard
                     key={id}
                     id={id}
                     imageLink={imageLink}
                     courseName={courseName}
                     description={description}
                     price={price}
                  />
               ))}
            </Carousel>
            <Step1 />
            <Step2 />
         </div>
      </div>
   );
}
