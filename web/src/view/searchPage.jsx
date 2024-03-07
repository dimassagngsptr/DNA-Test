import { useParams } from "react-router-dom";
import { MainNavbar } from "../components/navbar";
import { Search } from "../components/search";
import { fetchData } from "../services/fetch-api";
import { useEffect, useState } from "react";

export function SearchPage() {
   const { keywords } = useParams();
   const [searchData, setSearchData] = useState();
   const [loading, setLoading] = useState(false);
   const getSearch = async () => {
      setLoading(true);
      const response = await fetchData(`everything?q=${keywords}`);
      if (response.status === "ok") {
         setSearchData(response?.articles);
         setLoading(false);
      }
   };
   useEffect(() => {
      getSearch();
   }, [keywords]);
   return (
      <div className="bg-blue-gray-800">
         <MainNavbar />
         <Search searchData={searchData} loading={loading} />
      </div>
   );
}
