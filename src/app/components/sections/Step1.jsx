"use client";
import { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Step1() {
   const code = `  import React, {
      Children,
      useEffect,
      useRef,
      useState,
   } from "react";
   import { FaChevronRight } from "react-icons/fa6";
   import { FaArrowLeft } from "react-icons/fa6";
   import { FaArrowRight } from "react-icons/fa6";
   
   export const Carousel = ({ children, gap = 2, loopRequired = false, showDefaultButton = true }) => {
      const [translateValue, setTranslateValue] = useState(0);
   
      const movRef = useRef();
      const maxMove = useRef(0); // The maximum move value, after which sliding is not required
      const cardRef = useRef(); // Added for one of the card, to find the width of it.
      const oneMoveValue = useRef(0); // Total amount of movement per click, which is sum of card width and gap between cards
      const [finalChildrens, setFinalChildrens] = useState([]);
      const parentRef = useRef();
   
      const handleChildren = () => {
         // Add a ref to one of the children, to find width of the card dynamically
         setFinalChildrens((prev) => {
            const childrenArray = React.Children.toArray(children);
            const renderWithRef = () => {
               return <div ref={cardRef}>{childrenArray[0]}</div>;
            };
            return [renderWithRef(), ...childrenArray.slice(1, childrenArray.length)];
         });
      };
   
      const checkMaxMove = () => {
         const ele = movRef.current;
         const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); //Find fontsize, so that we can decide 1rem=?px
   
         //Find one-move value
         if (cardRef.current) {
            oneMoveValue.current = cardRef.current.scrollWidth / fontSize + gap;
         }
   
         //Find visible width
         const visibleWidth = parentRef.current.offsetWidth;
         const visibleWidthInRems = visibleWidth / fontSize;
   
         //Find total width
         const toatalWidth = ele.scrollWidth;
         const totalWidthInRem = toatalWidth / fontSize;
   
         //Now find remaining width
         maxMove.current = totalWidthInRem - visibleWidthInRems;
      };
   
      useEffect(() => {
         handleChildren();
      }, []);
   
      useEffect(() => {
         checkMaxMove();
      }, [finalChildrens]);
   
      useEffect(() => {
         // Function to update state on resize
         const handleResize = () => {
            setScreenWidth(window.innerWidth);
         };
   
         // Trigger checkMaxMove() on screen size changes
         window.addEventListener("resize", checkMaxMove);
   
         // Cleanup: Remove event listener when component unmounts
         return () => {
            window.removeEventListener("resize", handleResize);
         };
      }, []);
   
      //Click next
      const handleNext = () => {
         setTranslateValue((prev) =>
            prev - oneMoveValue.current >= -maxMove.current
               ? prev - oneMoveValue.current
               : loopRequired
               ? 0
               : -maxMove.current
         );
      };
   
      //Click prev
      const handlePrev = () => {
         setTranslateValue((prev) =>
            prev + oneMoveValue.current <= 0
               ? prev + oneMoveValue.current
               : loopRequired
               ? -maxMove.current
               : 0
         );
      };
   
      return (
         <div className=" w-full">
            <div
               ref={parentRef}
               className="w-full gap-[3rem] border- border-red-900 flex flex-col justify-start items-start overflow-hidden pb-[2rem]"
            >
               <div
                  style={{
                  transform: \`translateX(\${translateValue}rem)\`,
                  gap: \`\${gap}rem\`,
               }}
                  className={\`flex justify-start items-center border- border-blue-900 transition-all duration-500 px-[\${gap}rem] \`}
                  ref={movRef}
               >
                  {finalChildrens}
               </div>
               {showDefaultButton && (
                  <div className=" flex justify-start items-center gap-5 border- w-full pl-[2rem] ">
                     <div
                        className=" w-[6rem] h-[2.8rem] bg-transparent hover:bg-white rounded-full flex justify-center items-center border-2 hover:pr-[0.5rem] transition-[padding] duration-500  cursor-pointer text-[#505050] border-[#505050] hover:border-[0px] hover:shadow-xl overflow-hidden"
                        onClick={handlePrev}
                     >
                        <FaArrowLeft size={20} />
                     </div>
                     <div
                        className=" w-[6rem] h-[2.8rem] bg-transparent hover:bg-white rounded-full flex justify-center items-center border-2 hover:pl-[0.5rem] transition-[padding] duration-500  cursor-pointer text-[#505050] border-[#505050] hover:border-[0px] hover:shadow-xl overflow-hidden"
                        onClick={handleNext}
                     >
                        <FaArrowRight size={20} />
                     </div>
                  </div>
               )}
            </div>
         </div>
      );
   };
   `;

   return (
      <div className=" ">
         <div className=" mb-[4rem]"></div>
         <div className="text-2xl text-white mb-4 font-semibold">
            <span className="text-[#996ec8]">Step 1:</span> Create the Carousel Component
         </div>
         <div className=" text-xl text-[#cbcbcb] font-medium pb-[2rem]">
            To begin, create a new file named <span className=" font-bold">Carousel.jsx</span>{" "}
            inside your project. This component will be responsible for rendering a horizontal
            scrollable carousel.
         </div>
         <div className=" ml-[2rem]">
            <div className=" text-lg font-semibold text-white">1. Install Required Dependency</div>
            <div className=" text-lg font-medium text-[#cbcbcb] mt-[1rem] mb-[1rem]">
               Before using the component, install the react-icons package, as we are using arrow
               icons in our navigation buttons: (You can choose any other package, as per your need)
            </div>
            <CopyCode code={"   npm i react-icons \n       "} showLineNumbers={false} />

            {/* 2 sub step  */}
            <div className=" text-lg font-semibold text-white mt-[3rem]">
               2. Add the Carousel Code
            </div>
            <div className=" text-lg font-medium text-[#cbcbcb] mt-[1rem] mb-[1rem]">
               Now, use the following code in <span className=" font-bold">Carousel.jsx</span> :
            </div>
            <CopyCode code={code} showLineNumbers={true} />
         </div>
      </div>
   );
}

const CopyCode = ({ code, showLineNumbers }) => {
   const [copied, setCopied] = useState(false);

   const copyToClipboard = async (text) => {
      try {
         await navigator.clipboard.writeText(text);
         setCopied(true);
         setTimeout(() => {
            setCopied(false);
         }, 1500);
      } catch (err) {
         console.error("Failed to copy text: ", err);
      }
   };
   return (
      <div className=" w-full  bg-[#011627] text-gray-300 relative rounded-[1rem] max-h-[60vh] overflow-y-auto">
         <div
            className=" sticky right-0 top-0 h-fit w-full flex justify-end border- items-center pr-3 cursor-pointer text-orange-700 z-[100] p-[1rem]"
            onClick={() => copyToClipboard(code)}
         >
            {copied ? (
               <div className=" relative">
                  <IoMdCheckmark size={20} />
               </div>
            ) : (
               <MdOutlineContentCopy size={20} />
            )}
         </div>
         <div className=" text-left font-semibold">
            <SyntaxHighlighter
               language="javascript"
               style={nightOwl}
               showLineNumbers={showLineNumbers}
               showInlineLineNumbers={showLineNumbers}
            >
               {code}
            </SyntaxHighlighter>
         </div>
      </div>
   );
};
