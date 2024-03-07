import { useState } from "react";
import { datePickerFormated } from "../utils/useDatePicker";
import { handleRedirect } from "../utils/useLocalStorage";
import { Skeleton } from "./skeleton";

export function Search({ searchData, loading }) {
   const [onHover, setOnHover] = useState(null);
   return (
      <main className="lg:px-[10%] px-2 text-white h-full mt-5">
         {loading === false ? (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
               {searchData?.map((search) => (
                  <a
                     href={search?.url}
                     onMouseEnter={() => setOnHover(search?.title)}
                     onMouseLeave={() => setOnHover(null)}
                     onClick={() => handleRedirect(search?.title, search?.url)}
                     key={search?.title}
                     className="relative border border-blue-gray-400 h-[200px] w-[180px] lg:h-[300px] lg:w-[240px] flex flex-col rounded-lg">
                     <img
                        src={search?.urlToImage}
                        alt={search?.title}
                        className="h-[100%] w-[100%] object-cover rounded-lg"
                     />
                     <div className="absolute bottom-1 px-2 text-sm lg:text-md max-w-[100%] max-h-[100%] bg-black/70 rounded-sm">
                        <h3 className="font-bold text-[16px]">
                           {search?.title}
                        </h3>
                        <div
                           className={`transition-max-height duration-500 overflow-hidden  ${
                              onHover === search?.title
                                 ? "max-h-[50px] lg:max-h-[300px]"
                                 : "max-h-0"
                           }`}>
                           <p>Descriptions: </p>
                           <p className="text-[12px]">{search?.description}</p>
                           <div className="flex gap-2">
                              <p className="text-[12px]">
                                 {search?.source?.name}
                              </p>
                              <p className="text-[12px]">{search?.author}</p>
                              <p className="text-[12px]">
                                 {datePickerFormated(search?.publishedAt)}
                              </p>
                           </div>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
         ) : (
            <Skeleton />
         )}
      </main>
   );
}
