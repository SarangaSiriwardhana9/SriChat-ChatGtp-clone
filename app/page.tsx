import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function Homepage(){
    return(
        <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
           <h1 className="text-5xl font-bold mb-20"> Sri chat </h1>
            <div className='flex space-x-2 text-center'>
                <div >
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/*Sun Icon*/}
                        <h2>Examples</h2>
                        <SunIcon className="h-8 w-8 " />
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">"Explain Something to me"</p>
                        <p className="infoText">
                            "What is the meaning of life?"
                        </p>
                        <p className="infoText">"what is the colour of the sun"</p>
                       
                    </div>
                </div>


                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/*Sun Icon*/}
                        <h2>Capabilities</h2>
                        <BoltIcon className="h-8 w-8 " />
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">"Explain Something to me"</p>
                        <p className="infoText">
                            "What is the meaning of life?"
                        </p>
                        <p className="infoText">"what is the colour of the sun"</p>
                       
                    </div>
                </div>



                <div>
                    <div className="flex flex-col items-center justify-center mb-5">
                        {/*Sun Icon*/}
                        <h2>Limitations</h2>
                        <ExclamationTriangleIcon className="h-8 w-8 " />
                    </div>
                    <div className="space-y-2">
                        <p className="infoText">"Explain Something to me"</p>
                        <p className="infoText">
                            "What is the meaning of life?"
                        </p>
                        <p className="infoText">"what is the colour of the sun"</p>
                       
                    </div>
                </div>
                
            </div>
            
            </div>
    )
}
export default Homepage