import { Card, List, ListItem } from "@material-tailwind/react";
import { MainNavbar } from "./navbar";

export function Bookmarks() {
   const storageBookmark = JSON.parse(localStorage.getItem("myBookmark")) || [];
   return (
      <>
         <MainNavbar />
         <div className="h-screen bg-blue-gray-700 py-2 px-[10%]">
            <p className="text-center font-primary font-bold text-white text-[20px] mb-2">
               My List
            </p>
            <Card className="w-full bg-blue-gray-700 border border-gray-200">
               {storageBookmark?.map((bookmark) => (
                  <List key={bookmark?.title}>
                     <a
                        href={bookmark?.url}
                        target="blank"
                        className="text-initial">
                        <ListItem className="text-white border-b rounded-none">
                           {bookmark?.data}
                        </ListItem>
                     </a>
                  </List>
               ))}
            </Card>
         </div>
      </>
   );
}
