import { useState } from "react";
import { slicers } from "../utils/useSlice";
import { datePickerFormated } from "../utils/useDatePicker";

export function SideContainer({ data, start, end, handleRedirect }) {
   const [onHover, setOnHover] = useState(null);
   const newStart = (start += 6);
   const newEnd = (end += 9);
   const sideData = slicers(newStart, newEnd, data);
   return (
      <div className="grid grid-cols-2 gap-2 h-[60%] lg:w-[60%] lg:min-h-full">
         {sideData?.map((datas) => (
            <a
               href={datas?.url}
               target="blank"
               onClick={() => handleRedirect(datas?.title, datas?.url)}
               onMouseEnter={() => setOnHover(datas?.title, datas?.url)}
               onMouseLeave={() => setOnHover(null)}
               className="relative border border-blue-gray-400 lg:w-[280px] rounded-md cursor-pointer h-[200px] lg:h-[195px]"
               key={datas?.title}>
               <div className="h-[100%] rounded-lg">
                  <img
                     src={datas?.urlToImage}
                     alt={datas?.title}
                     className="w-full h-full object-cover rounded-lg"
                  />
               </div>
               <div className="absolute bottom-0 px-2 bg-black/50 py-2">
                  <p className="text-[12px]">{datas?.title}</p>
                  <div
                     className={`transition-max-height duration-500 overflow-hidden ${
                        onHover === datas?.title
                           ? "max-h-[50px] max-w-[100px] lg:max-h-[130px] lg:max-w-full"
                           : "max-h-0 max-w-0"
                     }`}>
                     <p className="text-[12px]">{datas?.description}</p>
                     <div className="flex gap-2">
                        <p className="text-[10px]">{datas?.source?.name}</p>
                        <p className="text-[10px]">{datas?.author}</p>
                        <p className="text-[10px]">
                           {datePickerFormated(datas?.publishedAt)}
                        </p>
                     </div>
                  </div>
               </div>
            </a>
         ))}
      </div>
   );
}
