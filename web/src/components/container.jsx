import { useEffect, useState } from "react";
import { slicers } from "../utils/useSlice";
import { datePickerFormated } from "../utils/useDatePicker";
import { SideContainer } from "./sideContainer";
import { handleRedirect } from "../utils/useLocalStorage";

export function Container({ row, data, start }) {
   const [onHover, setOnHover] = useState(false);
   const [num, setNum] = useState({
      start: null,
      end: null,
   });
   const randomNum = () => {
      let firstNum = Math.floor(Math.random() * start) + 1;
      let secondNum = firstNum + 1;
      setNum({ start: firstNum, end: secondNum });
   };
   const headlineData = slicers(num?.start, num?.end, data);
   useEffect(() => {
      randomNum();
   }, []);
   return (
      <main className="max-w-full lg:h-[400px] mt-8 px-[10%] text-white font-primary">
         <div
            className={`${
               row
                  ? "flex flex-col gap-3 w-full h-full lg:flex-row lg:gap-4 lg:max-h-[400px] lg:mb-2"
                  : "flex flex-col gap-3 w-full h-full lg:flex-row-reverse lg:gap-4 lg:max-h-[400px] lg:mb-2"
            }`}>
            {headlineData?.map((datas) => (
               <a
                  onMouseEnter={() => setOnHover(true)}
                  onMouseLeave={() => setOnHover(false)}
                  key={datas?.title}
                  href={datas?.url}
                  target="blank"
                  onClick={() => handleRedirect(datas?.title, datas?.url)}
                  className="relative w-[100%] h-[200px] lg:h-[400px] lg:w-[40%] border border-blue-gray-400 rounded-lg">
                  <div className=" h-[100%] rounded-lg">
                     <img
                        src={datas?.urlToImage}
                        alt={datas?.title}
                        className="w-full h-full object-cover rounded-lg"
                     />
                  </div>
                  <div className="absolute bottom-1 px-2 text-sm lg:text-md max-w-[100%] max-h-[100%] bg-black/70 rounded-sm">
                     <h3 className="font-bold text-[16px]">{datas?.title}</h3>
                     <div
                        className={`transition-max-height duration-500 overflow-hidden  ${
                           onHover
                              ? "max-h-[60px] lg:max-h-[1000px]"
                              : "max-h-0"
                        }`}>
                        <p>Descriptions: </p>
                        <p className="text-[12px]">{datas?.description}</p>
                        <div className="flex gap-2">
                           <p className="text-[12px]">{datas?.source?.name}</p>
                           <p className="text-[12px]">{datas?.author}</p>
                           <p className="text-[12px]">
                              {datePickerFormated(datas?.publishedAt)}
                           </p>
                        </div>
                     </div>
                  </div>
               </a>
            ))}
            <SideContainer
               data={data}
               start={num?.start}
               end={num?.end}
               handleRedirect={handleRedirect}
            />
         </div>
      </main>
   );
}
