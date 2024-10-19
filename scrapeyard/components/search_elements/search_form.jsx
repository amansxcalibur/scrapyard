export default function SearchForm(){
    const handleSubmit=()=>{
        //axios post
    }
    return(
        <form onSubmit={handleSubmit} className="min-h-[80vh] min-w-[40vw] bg-light flex justify-center items-center flex-col rounded-[2vw]">
            <div className="flex flex-col w-[30vw]">
                {/* <label>Model</label>
                <input type="text" placeholder="Model" className="w-full rounded-[2vw] min-h-[4vw] mb-[1vw]"></input>
                <input type="text" placeholder="Company" className="w-full rounded-[2vw] min-h-[4vw]"></input> */}
                <div className="flex">
                    <p className="text-[2vw] mr-[1vw]">Model</p><input type="text" className="bg-transparent w-full px-[0.5vw] text-[2vw]"></input>
                </div>
                <div className="h-[2px] bg-black w-full mb-[0.5vw]"></div>
                <div className="flex">
                    <p className="text-[2vw] mr-[1vw]">Maker</p><input type="text" className="bg-transparent w-full px-[0.5vw] text-[2vw]"></input>
                </div>
                <div className="h-[2px] bg-black w-full mb-[0.5vw]"></div>
            </div>
            <div className="flex flex-col w-[30vw]">
                {/* <input type="number" placeholder="mileage" className="w-full rounded-[2vw] min-h-[4vw]"></input>
                <input type="number" placeholder="location" className="w-full rounded-[2vw] min-h-[4vw] ml-[1vw]"></input> */}
                <div className="flex">
                    <p className="text-[2vw] mr-[1vw]">Transmission</p><input type="text" className="bg-transparent w-full px-[0.5vw] text-[2vw]"></input>
                </div>
                <div className="h-[2px] bg-black w-full mb-[0.5vw]"></div>
            </div>
            <div className="flex w-[30vw]">
                {/* <input type="number" placeholder="cost start range" className="w-full rounded-[2vw] min-h-[4vw]"></input>
                <input type="number" placeholder="cost end range" className="w-full rounded-[2vw] min-h-[4vw]"></input> */}
                <div className="flex flex-col flex-1">
                    <div className="flex">
                        <p className="text-[2vw] mr-[1vw]">Price</p><input type="text" className="bg-transparent w-full px-[0.5vw] text-[2vw]"></input>
                    </div>
                    <div className="h-[2px] bg-black w-full mb-[0.5vw]"></div>
                    <div className="flex">
                        <p className="text-[2vw] mr-[1vw]">Location</p><input type="text" className="bg-transparent w-full px-[0.5vw] text-[2vw]"></input>
                    </div>
                    <div className="h-[2px] bg-black w-full mb-[0.5vw]"></div>
                    <div className="flex">
                        <p className="text-[2vw] mr-[1vw]">Owner</p><input type="text" className="bg-transparent w-full px-[0.5vw] text-[2vw]"></input>
                    </div>
                    <div className="h-[2px] bg-black w-full mb-[0.5vw]"></div>
                </div>
                <div className="flex-1 bg-black rounded-[2vw] flex justify-center items-center ml-[1vw] mt-[1vw] min-h-[20vh]">
                    <p className="text-white">SEARCH</p>
                </div>
            </div>
            {/* <div>
                <button type="submit">Search</button>
            </div> */}
        </form>
    )
}