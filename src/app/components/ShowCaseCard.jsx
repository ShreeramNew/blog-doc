"use client";
import Image from "next/image";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function ShowCaseCard({ id, imageLink, courseName, description, price }) {
   return (
      <div className=" bg-black w-[20rem] md:w-[26rem] h-[24rem] flex flex-col justify-start items-start flex-shrink-0 relative shadow-xl ">
         <div className=" w-full h-[18rem] overflow-hidden relative">
            <Image
               fill
               src={imageLink}
               className=" object-cover w-full h-full bottom-[0.8rem] left-[0.8rem]"
            />
         </div>
         <div className=" flex flex-col justify-start items-start p-[1rem] gap-[1rem]">
            <div className=" text-white font-medium text-[1.2rem]">{courseName}</div>
            <div className=" h-[4rem] flex justify-between items-center absolute bottom-0 left-0 w-full px-[1rem]">
               <div className=" font-semibold text-gray-100">{price}</div>
               <div className=" flex justify-center items-center gap-1 cursor-pointer text-gray-100 font-medium">
                  <span>Register</span>
                  <FaArrowRightLong size={20} />
               </div>
            </div>
         </div>
      </div>
   );
}
