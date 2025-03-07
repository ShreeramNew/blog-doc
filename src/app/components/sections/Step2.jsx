"use client";
import { useEffect, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import SyntaxHighlighter from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function Step2() {
   const code = `"use client";
   import { Carousel } from "../components/Carousel";
   
   export default function Home() {
      return (
         <div className=" flex bg-[#f6f5ea] h-fit">
            <Carousel loopRequired={true} gap={3}>
               <div>Card 1</div> {/* Replace these with your actual card */}
               <div>Card 2</div>
               <div>Card 3</div>
            </Carousel>
         </div>
      );
   }
   `;

   return (
      <div>
         <div className=" mb-[4rem]"></div>
         <div className="text-2xl text-white mb-4 font-semibold">
            <span className=" text-[#996ec8]">Step 2:</span> Use the Carousel Component
         </div>
         <div className=" text-xl text-[#cbcbcb] font-medium mb-[2rem]">
            Now you can import and use Carousel component. Pass the cards you want to render, as
            children of Carousel component.
         </div>
         <div className=" ml-[2rem]">
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
