import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LandingPage } from "./view/landingPage";
import { SearchPage } from "./view/searchPage";
import { Bookmarks } from "./components/bookmarks";

const router = createBrowserRouter([
   { path: "/", element: <LandingPage /> },
   { path: "/search/:keywords", element: <SearchPage /> },
   { path: "/bookmarks", element: <Bookmarks /> },
]);

function App() {
   return (
      <>
         <RouterProvider router={router} />
      </>
   );
}

export default App;
