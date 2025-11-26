import { useEffect, useState } from "react";

const Questions = () => {

    const[questions,setQuestions] = useState({});
    const[questionId, setQuestionId] = useState(0);
    const[isLoading,setIsloading] = useState(false);

    useEffect(()=>{
        const getQuestiosn = async() => {
            try{
               const response = await fetch("http://localhost:1000/offline-saver/api/getQuestions",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({sections:"Grammar"})
            });
            const result = await response.json();
            setQuestions(result.response);
            console.log(result);

            
            if(result !== null && result !== undefined) setIsloading(true);
            }
            catch(e) {
               console.log(e);  
            }
        }
        getQuestiosn();
    },[])
   return ( 
    <div className="container bg-blue-100 mx-7 h-190 my-1">
      <div className="grid grid-cols-1">
           <div className=" questions-tag my-40 ">
            <div className="Indexing border mb-20 w-200 outline-2 outline-blue-50 mx-50 border-blue-500">
               <div className="question_first_half grid grid-cols-5">{
                [...Array(5)].map((value,key)=>(
                   <div className="border border-sky-300 bg-blue-700 text-center text-white  font-bold cursor-pointer outline-blue-300" key={key}>{key+1}</div>
                ))
                }</div>
               <div className="question_second_half text-center bg-blue-700 text-white font-bold cursor-pointer grid grid-cols-5">
                 {
                [...Array(5)].map((value,key)=>(
                   <div className="border border-sky-300 outline-blue-300" key={key}>{key+6}</div>
                ))
                }
               </div>
            </div>
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
                    <input type="radio" name={questions?.questions[questionId]?.id} className="my-4 cursor-pointer"  />
                   <span className="text-xl font-bold"> {questions?.questions[questionId]?.options[0]}</span>
                    <br />
                    <input type="radio" name={questions?.questions[questionId]?.id} className="my-4 cursor-pointer"  />
                     <span className="text-xl font-bold"> {questions?.questions[questionId]?.options[1]}</span>
                    <br />
                    <input type="radio" name={questions?.questions[questionId]?.id} className="my-4 cursor-pointer"  />
                     <span className="text-xl font-bold"> {questions?.questions[questionId]?.options[2]}</span>
                    <br />
                    <input type="radio" name={questions?.questions[questionId]?.id} className="my-4 cursor-pointer"  /> 
                     <span className="text-xl font-bold"> {questions?.questions[questionId]?.options[3]}</span>
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
                    </div>
                </span>
             </div>
           </div>
           
       </div>
       
    </div>
   )
}
export default Questions;