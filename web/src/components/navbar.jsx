import {
   Navbar,
   Typography,
   IconButton,
   Button,
   Input,
} from "@material-tailwind/react";
import { BellIcon, BookmarkIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

export function MainNavbar() {
   const navigate = useNavigate();
   const ref = useRef(null);
   const handleSearch = () => {
      navigate(`/search/${ref?.current?.value}`);
   };
   return (
      <Navbar
         variant="gradient"
         color="blue-gray"
         className="min-w-full from-blue-gray-900 to-blue-gray-900 lg:px-[10%] py-3 rounded-none">
         <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
            <Typography
               as="a"
               href="/"
               variant="h6"
               className="mr-4 ml-2 cursor-pointer py-1.5">
               News
            </Typography>
            <div className="ml-auto flex gap-1 md:mr-4">
               <Link to={"/bookmarks"}>
                  <IconButton variant="text" color="white">
                     <BookmarkIcon className="h-4 w-4" />
                  </IconButton>
               </Link>
               <IconButton variant="text" color="white">
                  <BellIcon className="h-4 w-4" />
               </IconButton>
            </div>
            <div className="relative flex w-full gap-2 md:w-max">
               <Input
                  type="text"
                  color="white"
                  label="Apple, Elon Musk, business..."
                  className="pr-20"
                  inputRef={ref}
                  containerProps={{
                     className: "min-w-[288px]",
                  }}
               />
               <Button
                  size="sm"
                  color="white"
                  onClick={handleSearch}
                  className="!absolute right-1 top-1 rounded">
                  Cari
               </Button>
            </div>
         </div>
      </Navbar>
   );
}
