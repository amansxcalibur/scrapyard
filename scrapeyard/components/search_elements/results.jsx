import Image from "next/image";
import { useState } from "react";

export default function SampleResults({open, setOpen}){
    const fruits = ["Apple", "Mango", "Banana", "GFG"];
    const [curr_index, setCurrIndex] = useState(null)
    const handleShowBrief=(index, fruit)=>{
        if (open && curr_index!=undefined && index==curr_index){
            setOpen(false)
        }else{
            setOpen(true)
            setCurrIndex(index)
        }
        console.log("clicked brief open", open, index, fruit)
    }
    return(
        <div>
            <ul className="bg-red-400">
                {fruits.map((fruit, index) => (
                    <>
                    <li key={index} className="bg-blue-500 min-h-[8vw] flex items-center" onClick={()=>{handleShowBrief(index, fruit)}}>
                        <div className="max-h-[7.5vw] overflow-hidden rounded-[0.5vw]">
                            <Image src="/uWu.jpg" width={5} height={5} className="h-auto min-w-[7.5vw]"></Image>
                        </div>
                        <div className="flex flex-col bg-red-500 min-h-[7.5vw] flex-1">
                            <div>
                                {fruit} {index}
                            </div>
                            <div className="flex">
                                <div className="bg-white rounded-full min-h-[3vw] min-w-[3vw]"></div>
                                <div className="bg-white rounded-full min-h-[3vw] min-w-[3vw]"></div>
                                <div className="bg-white rounded-full min-h-[3vw] min-w-[3vw]"></div>
                            </div>
                            <div className="flex-1"></div>
                        </div>
                    </li>
                    <div className="w-full h-0.5 bg-black rounded-[1vw]"></div>
                    </>
                ))
                }
            </ul>
        </div>
    )
}