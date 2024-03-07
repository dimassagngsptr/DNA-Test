import { useEffect, useState } from "react";
import { Container } from "../components/container";
import { MainNavbar } from "../components/navbar";
import { fetchData } from "../services/fetch-api";

export function LandingPage() {
   const [data, setData] = useState();
   const getData = async () => {
      const response = await fetchData("top-headlines?country=us");
      setData(response?.articles);
   };
   useEffect(() => {
      getData();
   }, []);
   return (
      <div className="bg-blue-gray-800">
         <MainNavbar />
         <Container row={"row"} data={data} start={2} />
         <Container data={data} start={10} />
      </div>
   );
}
