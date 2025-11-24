import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();
   return(
    <div className="container">
        <div className="welcome_page grid grid-cols-12 gap-4">
            <div className="logo col-span-5 bg-amber-200 h-200"></div>
            <div className="content-side col-span-7">
                <div className="welcome_msg text-center my-20 text-2xl tracking-wider">
                    <h1 className="greet">Welcome to Capgemini Communication Assessment</h1>
                </div>
                <div className="user_details bg-blue-100 py-2 rounded-md text-2xl w-150 mx-35">
                    <form className="text-center ">
                        <div className="userName grid grid-cols-3 my-10">
                            <label htmlFor="email" className="text-2xl text-start mx-2 text-blue-500">Email:</label>
                            <input type="text" name="email" id="email" className="outline-none border-b-3 text-center w-90  border-blue-500" placeholder="Enter your email" />
                        </div>
                        <div className="userName grid grid-cols-3">
                            <label htmlFor="registerNumber" className="text-2xl text-start mx-1 text-blue-500">Register Number:</label>
                            <input type="number" name="registerNumber" id="registerNumber" className="outline-none border-b-3 text-center w-90 border-blue-500" placeholder="Enter your registerNumber" />
                        </div>
                        <div className="credentials-submit">
                            <button type="button" className="cu rsor-pointer my-2 bg-blue-700 mt-5 text-white px-3 py-2 rounded" onClick={(e)=>{
                                     navigate("/home/permissions")
                            }}>Submit</button>
                        </div>
                    </form>
                </div>  
            </div>
        </div>
    </div>
   );
}
export default WelcomePage;