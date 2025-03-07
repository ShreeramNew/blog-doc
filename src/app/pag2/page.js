"use client";
import { Carousel } from "../components/Carousel";

export default function Home() {
   return (
      <div className=" flex bg-[#f6f5ea] h-fit">
         <Carousel>
            <div>Card 1</div> {/* Replace these with your actual card */}
            <div>Card 2</div>
            <div>Card 3</div>
         </Carousel>
      </div>
   );
}
