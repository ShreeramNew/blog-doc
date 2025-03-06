import React, {
   Children,
   forwardRef,
   useEffect,
   useImperativeHandle,
   useRef,
   useState,
} from "react";
import { FaChevronRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

export const Carousel = forwardRef(
   ({ children, gap = 2, loopRequired = false, showDefaultButton = true }, ref) => {
      const [translateValue, setTranslateValue] = useState(0);

      const movRef = useRef();
      const maxMove = useRef(0); // The maximum move value, after which sliding is not required
      const cardRef = useRef(); // Added for one of the card, to find the width of it.
      const oneMoveValue = useRef(0); // Total amount of movement per click, which is sum of card width and gap between cards
      const [finalChildrens, setFinalChildrens] = useState([]);
      const parentRef = useRef();

      const handleChildren = () => {
         console.log(React.Children.toArray(children));
         setFinalChildrens(
            React.Children.toArray(children).map((child, index) => {
               return (
                  <div key={child.props.id} ref={index == 0 ? cardRef : null}>
                     {child}
                  </div>
               );
            })
         );
      };

      const checkMaxMove = () => {
         const ele = movRef.current;
         const fontSize = parseFloat(getComputedStyle(document.documentElement).fontSize); //Find fontsize, so that we can decide 1rem=?px

         //Find one move value
         if (cardRef.current) {
            oneMoveValue.current = cardRef.current.scrollWidth / fontSize + gap;
         }

         //Find visible width
         const divRect = ele.getBoundingClientRect();
         const viewportWidth = window.innerWidth;
         // const visibleWidth = Math.min(divRect.right, viewportWidth) - Math.max(divRect.left, 0);
         const visibleWidth = parentRef.current.offsetWidth;
         console.log("Visible width:", visibleWidth / fontSize);

         const visibleWidthInRems = visibleWidth / fontSize;

         //Find total width
         const toatalWidth = ele.scrollWidth;
         const totalWidthInRem = toatalWidth / fontSize;

         maxMove.current = totalWidthInRem - visibleWidthInRems;
         console.log(maxMove.current);
      };

      useEffect(() => {
         handleChildren();
      }, []);

      useEffect(() => {
         checkMaxMove();
         console.log(finalChildrens);
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
            prev - oneMoveValue.current >= -maxMove.current - oneMoveValue.current
               ? prev - oneMoveValue.current
               : loopRequired
               ? 0
               : prev
         );
      };

      //Click prev
      const handlePrev = () => {
         setTranslateValue((prev) =>
            prev + oneMoveValue.current <= 0
               ? prev + oneMoveValue.current
               : loopRequired
               ? -maxMove.current
               : prev
         );
      };

      useImperativeHandle(ref, () => ({
         next: handleNext,
         prev: handlePrev,
      }));

      return (
         <div className=" w-full">
            <div
               ref={parentRef}
               className="w-full gap-[3rem] border- border-red-900 flex flex-col justify-start items-start overflow-hidden pb-[2rem]"
            >
               <div
                  style={{
                     transform: `translateX(${translateValue}rem)`,
                     gap: `${gap}rem`,
                     padding: `0 ${gap}rem`,
                  }}
                  className="flex justify-start items-center px-[2rem] border- border-blue-900 transition-all duration-500"
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
   }
);
