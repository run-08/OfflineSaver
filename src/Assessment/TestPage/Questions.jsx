import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Questions = () => {

    const[questions,setQuestions] = useState({});
    const[questionId, setQuestionId] = useState(0);
    const[isLoading,setIsloading] = useState(false);
    const[answers,setAnswers]=useState({});
    const[objectStore,setObjectStore] = useState("undefined");
    const navigate = useNavigate();

    useEffect(()=>{
        const getQuestiosn = async() => {
            try{
               const response = await fetch("http://localhost:1000/offline-saver/api/getQuestions",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({sections:"Email Writing"})
            });
            const result = await response.json();
            setQuestions(result.response);
            setObjectStore(result.sectionName);
            console.log(result);
            if(result !== null && result !== undefined) setIsloading(true);
            }
            catch(e) {
               console.log(e);  
            }
            console.log(answers);
            
        }
        getQuestiosn();
    },[])
   return ( 
    <div className="container bg-blue-100 mx-7 h-190 my-1">
      <div className="grid grid-cols-1">
           <div className=" questions-tag my-40 ">
         
             <div className="questions mx-10">
                <span className="question">
                   {
                   isLoading ? 
                   <p className="text-3xl">{questions?.questions[questionId]?.id+") "}{questions?.questions[questionId]?.question} </p>
                   :
                   ""}
                </span>
                <span className="options">
                    {
                          isLoading ? 
                    <div className="my-4">
                     {
                        [...new Array(4)].map((value,key) =>(
                         <div key={key}>
                          <input type="radio" checked={answers[questionId] !== undefined && answers[questionId] === key }  name={questions?.questions[questionId]?.id} className="my-4 cursor-pointer"   onClick={(e)=> {
                        setAnswers((answer) => ({...answer,[questionId]:key}));} } 
                        /> 
                          <span className="text-xl font-bold"> {questions?.questions[questionId]?.options[key]}</span>
                    <br /></div>
                        )) 
                     }     
                  </div>
                    :" "
                    }
                    <div className="btn grid grid-cols-5">
                        <button className={`rounded border px-3 w-25 text-white ${questionId==0 ? "hidden":"block"} bg-sky-500 text-2xl py-2 cursor-pointer`} onClick={()=>setQuestionId(questionId-1)}> 
                            Prev 
                            </button>
                        <button className={`rounded border px-3 w-25 text-white ${questionId==9 ? "hidden":"block"} bg-sky-500 text-2xl py-2 cursor-pointer`} onClick={()=>setQuestionId(questionId+1)}>
                           Next
                        </button>
                          <button className={`rounded border px-3 w-25 text-white ${questionId !== 9 ? "hidden":"block"} bg-sky-500 text-2xl py-2 cursor-pointer`} onClick={()=>{
                             setTimeout(()=>{
                              console.log(answers);
                              navigate("/home/indexDB",{state:{answers,objectStore,title:"Capgemini Communication Assessment - 1"}})
                             },3000);
                          }}>
                           Submit
                        </button>
                    </div>
                </span>
             </div>
           </div>
           
       </div>
       
    </div>
   )
}
export default Questions;