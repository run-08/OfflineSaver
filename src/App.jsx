import { useRoutes } from "react-router-dom";
import MediaDevicesPermissions from "./Assessment/MediaDevicesPermissions";
import WelcomePage from "./Assessment/WelcomePage";
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
  },
  {
    path:"welcomePage",
    element:<WelcomePage/>
  },
  {
    path:"permissions",
    element:<MediaDevicesPermissions/>
  }
]
  }])
}

export default App; 