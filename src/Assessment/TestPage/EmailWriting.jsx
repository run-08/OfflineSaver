const EmailWriting = () => {
    return(
        <div className="container my-2 bg-sky-100 mx-13 h-190 ">
            <div className="EmailContainer grid grid-cols-[99%_1%]">
               <div>
                 <div className="content col-span-1 mx-5 pt-5">
                   <span className="question text-2xl font-bold "> Question: Write an Email, regarding for your leave to your manager.</span>
                </div>
                <div className="warning pt-20">
                    <div className="grid red-template text-center grid-cols-5">
                        <div></div>
                         <div className="bg-orange-600 w-150">
                            <ul>
                               <p className="text-2xl py-2 text-white w-full">Do not seek help from any external devices</p> 
                               <p className="text-2xl py-2 text-white w-full"> If you copied the content from any AI, you will suspended from entire process</p>
                            </ul>
                         </div>
                    </div>
                </div>
                <div className="WriteContent flex my-20"> 
                    <textarea name="email-answer text-center" placeholder="Write your email..." maxLength={1200} minLength={40} className="border text-2xl rounded-xl outline-gray-600 py-5 px-5 h-100 w-300 mx-40 border-gray-700" id="email-answer"></textarea>
                </div>
               </div>
            </div>
        </div>
    )
}
export default EmailWriting;