import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SectionZustand from "../SharedMemory/SectionZustand";
const SectionMaker = () => {
    const[sections,setSections]=useState(0);
    const setSectionDetails = SectionZustand((state) => state.setSectionDetails);
    const [details,setDetails] = useState({});
    const navigate = useNavigate();
    return (
      <div className="sectionBody ">
         <div className="container my-30">
            <div className="sectionForm">
               <form className="testForm">
                  <div className="grid grid-cols-1 test_name text-center">
                     <input type="text" max="50" className="outline-none font-semibold text-3xl title border-b-2 border-indigo-600 text-center mx-30  tracking-widest"  min="3" placeholder="Enter the testName" id="TestName" onChange={(e)=>{
                            setDetails((prev)=>({
                              ...prev,
                              title:e.target.value,
                            }))
                     }}/>
                  </div>
                    <div className=" my-10 border-3 mx-20 text-center rounded-xl border-indigo-500">
                     <div className="no_of_round grid grid-cols-2 my-10">
                       <input type="number" max="100" min="1" className="outline-none text-2xl  mx-20 border-b-2 border-green-300" placeholder="Number of Sections" onChange={(e)=>{
                          setSections(e.target.value);
                       }} />
                       <button className="button cursor-pointer w-10 text-white bg-red-500 rounded-xs" onClick={(e) => {
                        e.preventDefault();
                       }}>ok</button>
                     </div>
                    <div className="no_of_round grid grid-cols-1 my-10" >
                    {
                         [...Array(Number(sections))].map((value,index)=>(
                             <input key={index} id={index} type="text" max="100" min="1" className="outline-none text-2xl  my-10 mx-20 border-b-2 border-green-300" placeholder="Enter the section name" onChange={(e)=>{
                                  setDetails(prev => ({
                                    ...prev,
                                    [e.target.id]:e.target.value,
                                  }));
                                  console.log(details);
                             }}/>
                         )) 
                    }
                    <div className="grid grid-cols-3 ">
                        <button type="submit" className="col-start-2 h-10 rounded-sm text-xl cursor-pointer bg-red-700 text-white w-[50%] ml-40 mt-10 " onClick={(e)=>{
                            e.preventDefault();
                            setSectionDetails(details);
                            console.log(details);
                            navigate("/home/indexDb");
                        }}>Submit</button>
                    </div>
                    </div>
                    </div>
               </form>  
            </div>  
        </div>
      </div>
    );
}

export default SectionMaker;