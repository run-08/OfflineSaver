import { useRoutes } from "react-router-dom";
import IndexDBConfig from "./IndexDB/IndexDBConfig";
import Home from "./Outlet/HomePage";
import SectionMaker from "./Sections/SectionMaker";

const App = () =>{

  return(
    <>
    <CustomRoutes></CustomRoutes>
    {/* <IndexDBConfig></IndexDBConfig> */}
    {/* <SectionMaker></SectionMaker> */}
    </>
  )
}
 const CustomRoutes = () => {
  return useRoutes([
  {
    path:"/home",
    element:<Home></Home>,
    children:[{ 
      path:"indexDB",
      element:<IndexDBConfig></IndexDBConfig>
    },
  {
    path:"sectionMaker",
    element:<SectionMaker/>
  }]
  }])
}

export default App; 